
import { ScrollArea } from "@/components/ui/scroll-area";
import { PropertyCard } from "@/components/property/PropertyCard";
import { FilterBar } from "@/components/layout/FilterBar";
import { Home } from "@/data/types";
import { useState } from "react";

interface PropertyListProps {
  homes: Home[];
  highlightedHomeId: string | null;
  onPropertyHover: (id: string) => void;
  onPropertyLeave: () => void;
  filters: Record<string, string>;
  onFilterChange: (newFilters: Record<string, string>) => void;
  sortMode: "recommended" | "price" | "newest";
  onSortChange: (sortMode: "recommended" | "price" | "newest") => void;
}

export function PropertyList({
  homes,
  highlightedHomeId,
  onPropertyHover,
  onPropertyLeave,
  filters,
  onFilterChange,
  sortMode,
  onSortChange,
}: PropertyListProps) {
  return (
    <ScrollArea className="h-full hide-scrollbar">
      <div className="sticky top-0 z-10 bg-[#FAF9F8] pt-4 pb-2 px-4">
        <FilterBar onFilterChange={onFilterChange} />
      </div>
      <div className="bg-[#FAF9F8] w-full">
        <div className="flex flex-col w-full px-6 pt-3 pb-3 gap-1">
          <div className="flex items-center gap-4 text-lg leading-6 font-bold">
            <h1 className="text-[#131313] text-ellipsis">
              Seattle, WA homes for sale & real estate
            </h1>
          </div>
          
          {/* Results count and sorting options */}
          <div className="flex flex-wrap items-center gap-6 justify-between mt-2">
            <div className="flex gap-2 text-[#131313] text-sm font-bold leading-5 items-center">
              <span>{homes.length}</span>
              <span className="text-[#686868] font-normal">of</span>
              <span>{homes.length} homes</span>
              
              {/* Sort as clickable text */}
              <div className="relative ml-4">
                <div className="flex items-center gap-1 cursor-pointer select-none text-[#15727A] font-semibold text-sm" onClick={() => {
                  const nextSort = sortMode === "recommended" ? "price" : 
                                  sortMode === "price" ? "newest" : "recommended";
                  onSortChange(nextSort);
                }}>
                  <span>
                    {sortMode === "recommended" 
                      ? "Recommended"
                      : sortMode === "price"
                      ? "Price"
                      : "Newest"}
                  </span>
                  {sortMode === "price" ? (
                    <span className="inline-flex">↓</span>
                  ) : (
                    <span className="inline-flex">↑</span>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Property cards grid */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-4 p-3 pb-6 auto-rows-fr justify-center"
          style={{
            justifyItems: "center"
          }}
        >
          {homes.map((home) => (
            <PropertyCard
              key={home.id}
              id={home.id}
              imageUrl={home.imageUrl}
              images={home.images}
              price={home.price}
              beds={home.beds}
              baths={home.baths}
              sqft={home.sqft}
              address={home.address}
              agent={home.agent}
              isHot={home.isHot}
              onMouseEnter={onPropertyHover}
              onMouseLeave={onPropertyLeave}
              showActions
            />
          ))}
        </div>
      </div>
    </ScrollArea>
  );
}
