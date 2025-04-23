
import { X, ChevronLeft, ChevronRight, Heart, Share2 } from "lucide-react";
import { Home } from "@/data/types";
import { PropertyStats } from "./PropertyStats";
import { useState } from "react";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

interface MapPinPopupProps {
  home: Home;
  onClose: () => void;
}

export function MapPinPopup({ home, onClose }: MapPinPopupProps) {
  const images = home.images || [home.imageUrl];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isFavorite, setFavorite] = useState(false);

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="bg-white rounded-xl shadow-lg w-72 overflow-hidden transform -translate-x-1/2">
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
      
      <div className="relative">
        {images && images.length > 1 ? (
          <Carousel className="relative w-full" opts={{ loop: true }}>
            <CarouselContent>
              {images.map((image, index) => (
                <CarouselItem key={index}>
                  <AspectRatio ratio={16 / 9}>
                    <img
                      src={image}
                      alt={`Property ${index + 1}`}
                      className="object-cover w-full h-full"
                    />
                  </AspectRatio>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="carousel-arrow carousel-arrow-left" />
            <CarouselNext className="carousel-arrow carousel-arrow-right" />
          </Carousel>
        ) : (
          <AspectRatio ratio={16 / 9}>
            <img
              src={images[0]}
              alt="Property"
              className="object-cover w-full h-full"
            />
          </AspectRatio>
        )}
        
        {home.isHot && (
          <span className="absolute top-3 right-3 z-20 bg-red-100 text-red-600 rounded-full text-xs font-bold px-3 py-1 uppercase shadow">
            Hot
          </span>
        )}
      </div>
      
      <div className="flex flex-col">
        <div className="flex items-start justify-between px-4 pt-3">
          <span className="font-bold text-[18px] leading-[24px] text-[#222]">
            ${home.price.toLocaleString('en-US')}
          </span>
          <div className="flex items-center gap-2">
            <button
              aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
              className="focus:outline-none transition p-1 rounded-full hover:bg-[#f1f1f1]"
              onClick={e => {
                e.stopPropagation();
                setFavorite(f => !f);
              }}
              style={{color: isFavorite ? "#C82021" : "#ACACAC"}}
            >
              <Heart className="w-5 h-5" fill={isFavorite ? "#C82021" : "none"} />
            </button>
            <button
              aria-label="Share"
              className="focus:outline-none transition p-1 rounded-full hover:bg-[#f1f1f1]"
              onClick={e => {
                e.stopPropagation();
                window?.navigator?.share?.({ url: window.location.href })?.catch(() => {});
              }}
              style={{ color: "#ACACAC" }}
            >
              <Share2 className="w-5 h-5" />
            </button>
          </div>
        </div>
        <div className="flex items-center space-x-2 px-4 text-[14px] leading-[20px] text-[#222]">
          <span>{home.beds} beds</span>
          <span className="mx-1">•</span>
          <span>{home.baths} baths</span>
          <span className="mx-1">•</span>
          <span>{home.sqft.toLocaleString()} sqft</span>
        </div>
        <div className="mt-2 px-4 pb-4 text-[12px] leading-[16px] text-[#222]">
          <p>{home.address}</p>
        </div>
      </div>
    </div>
  );
}
