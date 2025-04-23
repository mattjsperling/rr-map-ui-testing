
import { ScrollArea } from "@/components/ui/scroll-area";
import { PropertyCard } from "@/components/property/PropertyCard";
import { FilterBar } from "@/components/layout/FilterBar";
import { ViewToggle, ViewMode } from "@/components/layout/ViewToggle";
import { SortMenu, SortMode } from "@/components/layout/SortMenu";
import { Home } from "@/data/types";
import { useState } from "react";

interface PropertyListProps {
  homes: Home[];
  highlightedHomeId: string | null;
  onPropertyHover: (id: string) => void;
  onPropertyLeave: () => void;
  filters: Record<string, string>;
  onFilterChange: (newFilters: Record<string, string>) => void;
  sortMode: SortMode;
  onSortChange: (sortMode: SortMode) => void;
  viewMode: ViewMode;
  onViewChange: (mode: ViewMode) => void;
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
  viewMode,
  onViewChange,
}: PropertyListProps) {
  return (
    <ScrollArea className="h-full hide-scrollbar">
      <div className="sticky top-0 z-10 bg-[#FAF9F8] pt-4 pb-2 px-4">
        <FilterBar onFilterChange={onFilterChange} />
        {/* Controls now above the list */}
        <div className="flex flex-wrap items-center gap-3 justify-between mt-3">
          <div className="flex items-center gap-6">
            <span className="font-bold text-lg text-[#131313]">
              Seattle, WA homes for sale & real estate
            </span>
            <span className="ml-2 text-[#131313] text-sm font-bold">
              {homes.length}
              <span className="text-[#686868] font-normal ml-1">of {homes.length} homes</span>
            </span>
          </div>
          <div className="flex items-center gap-3">
            {/* Sort menu as select */}
            <SortMenu sortMode={sortMode} onSortChange={onSortChange} />
            <ViewToggle viewMode={viewMode} onViewChange={onViewChange} />
          </div>
        </div>
      </div>
      <div className="bg-[#FAF9F8] w-full">
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
              // Pass additional props for favorite/share/leftpane if needed in future
            />
          ))}
        </div>
      </div>
    </ScrollArea>
  );
}
