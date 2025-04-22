
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { Home } from "@/data/types";
import { PropertyStats } from "./PropertyStats";
import { useState } from "react";

interface MapPinPopupProps {
  home: Home;
  onClose: () => void;
}

export function MapPinPopup({ home, onClose }: MapPinPopupProps) {
  const images = home.images || [home.imageUrl];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="absolute z-50 bg-white rounded-xl shadow-lg w-72 overflow-hidden transform -translate-x-1/2 -translate-y-full mt-[-10px]">
      <button
        onClick={(e) => {
          e.stopPropagation();
          onClose();
        }}
        className="absolute top-2 right-2 z-10 bg-white rounded-full p-1 shadow-md"
        aria-label="Close popup"
      >
        <X size={16} />
      </button>
      
      <div className="relative h-40 w-full">
        <img
          src={images[currentImageIndex]}
          alt={home.address}
          className="absolute h-full w-full object-cover"
        />
        
        {images.length > 1 && (
          <>
            <button 
              onClick={prevImage} 
              className="absolute top-1/2 left-2 -translate-y-1/2 bg-white/80 rounded-full p-1"
              aria-label="Previous image"
            >
              <ChevronLeft size={16} />
            </button>
            <button 
              onClick={nextImage} 
              className="absolute top-1/2 right-2 -translate-y-1/2 bg-white/80 rounded-full p-1"
              aria-label="Next image"
            >
              <ChevronRight size={16} />
            </button>
          </>
        )}
        
        {home.isHot && (
          <div className="absolute top-2 left-2">
            <span className="bg-[#BF3400] text-white text-xs px-2 py-1 rounded-md font-bold">
              HOT HOME
            </span>
          </div>
        )}
      </div>
      
      <div className="p-3">
        <div className="font-bold text-lg">${home.price.toLocaleString()}</div>
        <PropertyStats beds={home.beds} baths={home.baths} sqft={home.sqft} />
        <div className="text-xs mt-2 text-gray-700 truncate">{home.address}</div>
        <div className="text-xs mt-1 text-gray-500 truncate">{home.agent}</div>
      </div>
    </div>
  );
}
