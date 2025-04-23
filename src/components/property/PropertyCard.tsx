import { Heart, Share2 } from "lucide-react";
import React, { useState } from "react";
import { Carousel } from "@/components/ui/carousel"
import {
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { AspectRatio } from "@/components/ui/aspect-ratio"

interface PropertyCardProps {
  id: string;
  imageUrl: string;
  images: string[];
  price: number;
  beds: number;
  baths: number;
  sqft: number;
  address: string;
  agent: string;
  isHot: boolean;
  onMouseEnter?: (id: string) => void;
  onMouseLeave?: () => void;
  showActions?: boolean;
}

// Custom typography utility classes for card
const typography = {
  price: "font-[Inter] font-bold text-[18px] leading-[24px] text-[#222]",
  stats: "font-[Inter] font-normal text-[14px] leading-[20px] text-[#222]",
  address: "font-[Inter] font-normal text-[12px] leading-[16px] text-[#222]",
};

export function PropertyCard({
  id,
  imageUrl,
  images,
  price,
  beds,
  baths,
  sqft,
  address,
  agent,
  isHot,
  onMouseEnter,
  onMouseLeave,
  showActions,
}: PropertyCardProps) {
  const [isFavorite, setFavorite] = useState(false);

  return (
    <div
      className="property-card bg-white rounded-xl overflow-hidden shadow hover:shadow-lg flex flex-col relative"
      onMouseEnter={() => onMouseEnter && onMouseEnter(id)}
      onMouseLeave={() => onMouseLeave && onMouseLeave()}
    >
      {/* Image/Carousel with hot badge on top right */}
      <div className="relative">
        {images && images.length > 0 ? (
          <Carousel className="relative w-full" opts={{ loop: true }}>
            <CarouselContent className="">
              {images.map((image, index) => (
                <CarouselItem key={index} className="">
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
              src={imageUrl}
              alt="Property"
              className="object-cover w-full h-full"
            />
          </AspectRatio>
        )}
        {/* Hot badge */}
        {isHot && (
          <span className="absolute top-3 right-3 z-20 bg-red-100 text-red-600 rounded-full text-xs font-bold px-3 py-1 uppercase shadow">
            Hot
          </span>
        )}
      </div>
      <div className="flex-1 flex flex-col">
        {/* Price and icons row */}
        <div className="flex items-start justify-between px-4 pt-3">
          <span className={typography.price}>
            ${price.toLocaleString('en-US')}
          </span>
          <div className="flex items-center gap-2">
            <button
              aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
              className="focus:outline-none transition p-2 rounded-full hover:bg-[#f1f1f1]"
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
              className="focus:outline-none transition p-2 rounded-full hover:bg-[#f1f1f1]"
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
        {/* Stats */}
        <div className={`flex items-center space-x-2 mt-1 px-4 ${typography.stats}`}>
          <span>{beds} beds</span>
          <span className="mx-1">•</span>
          <span>{baths} baths</span>
          <span className="mx-1">•</span>
          <span>{sqft.toLocaleString()} sqft</span>
        </div>
        {/* Address */}
        <div className={`mt-2 px-4 pb-4 ${typography.address}`}>
          <h2>{address}</h2>
        </div>
      </div>
    </div>
  );
}
