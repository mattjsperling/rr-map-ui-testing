
import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { homes } from '@/data/homes';
import { FilterBar } from "./FilterBar";
import { MapPinPopup } from '../property/MapPinPopup';
import { createPortal } from 'react-dom';
import { Home } from '@/data/homes';

// Initialize mapbox
mapboxgl.accessToken = 'pk.eyJ1IjoibWF0dHNwZXJsaW5ncmVkZmluIiwiYSI6ImNtODZkZzZ3dDAzZHUybHE1NDJ4YnJ6cmkifQ.2DclNy9docVaGwLrD91F7g';

export function MapView() {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const markersRef = useRef<{ [id: string]: mapboxgl.Marker }>({});
  const popupRef = useRef<HTMLDivElement | null>(null);
  
  const [selectedHome, setSelectedHome] = useState<Home | null>(null);
  const [popupCoords, setPopupCoords] = useState<[number, number] | null>(null);

  useEffect(() => {
    // Create portal div for the popups if it doesn't exist
    if (!popupRef.current) {
      const div = document.createElement('div');
      div.id = 'map-popup-container';
      document.body.appendChild(div);
      popupRef.current = div;
    }

    // Initialize map
    if (!map.current && mapContainer.current) {
      map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/streets-v12',
        center: [-122.335167, 47.608013], // Seattle center
        zoom: 12,
        attributionControl: false
      });

      map.current.addControl(new mapboxgl.NavigationControl(), 'top-right');
      
      // Close popup when clicking anywhere on the map
      map.current.on('click', () => {
        setSelectedHome(null);
        setPopupCoords(null);
      });

      // Add markers when map loads
      map.current.on('load', () => {
        addMarkersToMap();
      });
    }

    return () => {
      // Cleanup
      if (map.current) {
        map.current.remove();
        map.current = null;
      }
    };
  }, []);

  // Add markers to map
  const addMarkersToMap = () => {
    if (!map.current) return;

    homes.forEach(home => {
      // Create custom marker element
      const markerEl = document.createElement('div');
      markerEl.className = 'price-marker';
      
      // Create marker content
      const markerContent = document.createElement('div');
      markerContent.className = 'bg-[#15727A] text-white text-sm font-bold py-1 px-2 rounded-lg shadow-md hover:bg-[#0A5C64] transition-colors cursor-pointer';
      markerContent.textContent = `$${Math.round(home.price / 1000)}K`;
      
      markerEl.appendChild(markerContent);

      // Create marker
      const marker = new mapboxgl.Marker({
        element: markerEl,
        anchor: 'bottom',
      })
        .setLngLat([home.lng, home.lat])
        .addTo(map.current);

      // Add click handler
      markerEl.addEventListener('click', (e) => {
        e.stopPropagation();
        setSelectedHome(home);
        setPopupCoords([home.lng, home.lat]);
      });

      // Store marker reference
      markersRef.current[home.id] = marker;
    });
  };

  // Handle popup close
  const handleClosePopup = () => {
    setSelectedHome(null);
    setPopupCoords(null);
  };

  // Get screen coordinates for popup positioning
  const getScreenCoords = (): { left: number, top: number } | null => {
    if (!map.current || !popupCoords) return null;
    
    const point = map.current.project(new mapboxgl.LngLat(popupCoords[0], popupCoords[1]));
    return { left: point.x, top: point.y };
  };

  const screenCoords = getScreenCoords();

  return (
    <div className="grow overflow-hidden font-normal w-full">
      {/* Map controls - similar to the original design */}
      <div className="relative justify-between items-stretch z-10 flex w-full gap-[40px_100px] flex-wrap px-[28px] py-3">
        <FilterBar />
        <div className="flex min-w-60 items-center gap-8 text-base text-[#222] whitespace-nowrap text-center h-full w-[290px]">
          <div className="items-center self-stretch flex min-w-60 w-[290px] gap-2 my-auto">
            <div className="bg-white self-stretch flex min-w-60 w-[290px] gap-0.5 overflow-hidden my-auto p-0.5 rounded-lg">
              <button className="self-stretch gap-1 overflow-hidden flex-1 shrink basis-[0%] p-2 rounded-md">
                List
              </button>
              <button className="self-stretch bg-[#268C95] gap-1 overflow-hidden text-white font-bold flex-1 shrink basis-[0%] p-2 rounded-md">
                Split
              </button>
              <button className="self-stretch gap-1 overflow-hidden flex-1 shrink basis-[0%] p-2 rounded-md">
                Map
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Map container */}
      <div className="w-full h-[calc(100vh-150px)] relative">
        <div ref={mapContainer} className="absolute inset-0" />
        
        {/* Map tools overlay */}
        <div className="absolute items-center flex left-4 top-[100px] w-12 flex-col text-[10px] text-[#131313] whitespace-nowrap leading-[1.6] gap-4">
          <div className="w-full gap-4">
            <button className="justify-center items-center shadow-[0px_4px_16px_0px_rgba(0,0,0,0.12),0px_1px_4px_0px_rgba(0,0,0,0.08)] bg-[#FEFEFE] flex min-h-12 w-full flex-col h-12 rounded-md">
              <img src="https://cdn.builder.io/api/v1/image/assets/87c856cbfc60482abe6dff9ffae95cea/3dad50c5bcfd7422ea7e634e2fec296b2e91faa1?placeholderIfAbsent=true" className="aspect-[1] object-contain w-6" />
              <div>Draw</div>
            </button>
            <button className="justify-center items-center shadow-[0px_4px_16px_0px_rgba(0,0,0,0.12),0px_1px_4px_0px_rgba(0,0,0,0.08)] bg-[#FEFEFE] flex min-h-12 w-full flex-col h-12 mt-4 rounded-md">
              <img src="https://cdn.builder.io/api/v1/image/assets/87c856cbfc60482abe6dff9ffae95cea/72f38436ca31ba28a90979b535b2e96f5b71e078?placeholderIfAbsent=true" className="aspect-[1] object-contain w-6" />
              <div>Options</div>
            </button>
            <button className="justify-center items-center shadow-[0px_4px_16px_0px_rgba(0,0,0,0.12),0px_1px_4px_0px_rgba(0,0,0,0.08)] bg-[#FEFEFE] flex min-h-12 w-full flex-col h-12 mt-4 rounded-md">
              <img src="https://cdn.builder.io/api/v1/image/assets/87c856cbfc60482abe6dff9ffae95cea/23a4fa22adda2a00a2f7826c3a54301ec34ec4af?placeholderIfAbsent=true" className="aspect-[1] object-contain w-6" />
              <div>Map</div>
            </button>
          </div>
        </div>
      </div>

      {/* Popup portal */}
      {popupRef.current && selectedHome && screenCoords && createPortal(
        <div 
          style={{
            position: 'absolute',
            left: `${screenCoords.left}px`,
            top: `${screenCoords.top}px`,
            zIndex: 100,
          }}
          onClick={(e) => e.stopPropagation()}
        >
          <MapPinPopup 
            home={selectedHome} 
            onClose={handleClosePopup} 
          />
        </div>,
        popupRef.current
      )}
    </div>
  );
}
