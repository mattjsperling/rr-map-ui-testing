
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
      {images && images.length > 0 ? (
        <Carousel
          className="relative w-full"
          opts={{
            loop: true,
          }}
        >
          <CarouselContent className="-ml-1 pl-1">
            {images.map((image, index) => (
              <CarouselItem key={index} className="pl-1">
                <div className="p-1">
                  <AspectRatio ratio={16 / 9}>
                    <img
                      src={image}
                      alt={`Property ${index + 1}`}
                      className="object-cover rounded-md"
                    />
                  </AspectRatio>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="carousel-arrow carousel-arrow-left" />
          <CarouselNext className="carousel-arrow carousel-arrow-right" />
        </Carousel>
      ) : (
        <img
          src={imageUrl}
          alt="Property"
          className="w-full h-48 object-cover"
        />
      )}
      <div className="flex-1 flex flex-col">
        <div className="px-4 pt-3">
          <div className="flex items-center justify-between">
            <span className="text-xl font-semibold text-gray-800">${price}</span>
            {isHot && (
              <span className="px-2 py-1 bg-red-100 text-red-600 rounded-full text-xs font-medium uppercase">
                Hot
              </span>
            )}
          </div>
          <div className="flex items-center text-gray-600 mt-1">
            <span>{beds} beds</span>
            <span className="mx-2">•</span>
            <span>{baths} baths</span>
            <span className="mx-2">•</span>
            <span>{sqft} sqft</span>
          </div>
          <div className="mt-2">
            <h2 className="text-gray-900 font-medium">{address}</h2>
            <p className="text-gray-600 text-sm">Listed by {agent}</p>
          </div>
        </div>
        <div className="favorite-share-row mt-2 mb-2 flex gap-4 px-4">
          <button
            aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
            className={`focus:outline-none transition`}
            onClick={e => {
              e.stopPropagation();
              setFavorite(f => !f);
            }}
            style={{ color: isFavorite ? "#C82021" : "#ACACAC" }}
          >
            <Heart className={`w-5 h-5`} fill={isFavorite ? "#C82021" : "none"} />
          </button>
          <button
            aria-label="Share"
            className="focus:outline-none transition"
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
    </div>
  );
}

