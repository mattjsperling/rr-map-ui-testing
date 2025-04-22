import { Header } from "@/components/layout/Header";
import { MapView } from "@/components/layout/MapView";
import { PropertyCard } from "@/components/property/PropertyCard";
import { ScrollArea } from "@/components/ui/scroll-area";
import { FilterBar } from "@/components/layout/FilterBar";
import { homes } from "@/data/homes";
import { useState } from "react";
import { Home } from "@/data/homes";
import { useIsMobile } from "@/hooks/use-mobile";

export default function Index() {
  const [highlightedHomeId, setHighlightedHomeId] = useState<string | null>(null);
  const [filters, setFilters] = useState<Record<string, string>>({});
  const [visibleHomes, setVisibleHomes] = useState<Home[]>(homes);
  const isMobile = useIsMobile();

  // Handle hover on property card
  const handlePropertyHover = (id: string) => {
    setHighlightedHomeId(id);
  };

  // Handle hover end on property card
  const handlePropertyLeave = () => {
    setHighlightedHomeId(null);
  };

  // Handle filter changes
  const handleFilterChange = (newFilters: Record<string, string>) => {
    setFilters(newFilters);

    // Apply filters to homes
    let filtered = [...homes];

    if (newFilters.price && newFilters.price !== "any") {
      if (newFilters.price.startsWith("<")) {
        const maxPrice = parseInt(newFilters.price.substring(1));
        filtered = filtered.filter((home) => home.price < maxPrice);
      } else if (newFilters.price.startsWith(">")) {
        const minPrice = parseInt(newFilters.price.substring(1));
        filtered = filtered.filter((home) => home.price > minPrice);
      } else if (newFilters.price.includes("-")) {
        const [minPrice, maxPrice] = newFilters.price.split("-").map((p) => parseInt(p));
        filtered = filtered.filter((home) => home.price >= minPrice && home.price <= maxPrice);
      }
    }

    if (newFilters.beds && newFilters.beds !== "any") {
      if (newFilters.beds.startsWith(">")) {
        const minBeds = parseInt(newFilters.beds.substring(1));
        filtered = filtered.filter((home) => home.beds > minBeds);
      }
    }

    if (newFilters.homeType && newFilters.homeType !== "any") {
      filtered = filtered.filter((home) => home.type === newFilters.homeType);
    }

    if (newFilters.forSale && newFilters.forSale !== "for-sale") {
      if (newFilters.forSale === "sold") {
        filtered = filtered.filter((home) => home.sold === true);
      } else if (newFilters.forSale === "for-rent") {
        filtered = filtered.filter((home) => home.forRent === true);
      } else {
        filtered = filtered.filter((home) => !home.sold && !home.forRent);
      }
    }

    setVisibleHomes(filtered);
  };

  return (
    <div className="h-screen flex flex-col overflow-hidden">
      <div className="shadow-[0px_2px_6px_0px_rgba(0,0,0,0.12),0px_1px_2px_0px_rgba(0,0,0,0.08)] bg-[#FAF9F8] w-full flex-1 flex flex-col overflow-hidden">
        <Header />
        <main className="w-full flex-1 flex flex-col lg:flex-row overflow-hidden">
          {/* Left side: scrollable */}
          <section
            className={`${
              isMobile
                ? 'w-full h-[60vh]'
                : 'w-full lg:w-[60%] xl:w-[64%] 2xl:w-[68%]'
            } flex flex-col overflow-hidden border-r border-[#DDD]`}
          >
            <ScrollArea className="h-full hide-scrollbar">
              {/* Filters pinned to top of left pane */}
              <div className="sticky top-0 z-10 bg-[#FAF9F8] pt-4 pb-2 px-4">
                <FilterBar onFilterChange={handleFilterChange} />
              </div>
              <div className="bg-[#FAF9F8] w-full">
                {/* header and controls in a row */}
                <div className="flex w-full px-6 pt-3 pb-3 items-center justify-between flex-wrap">
                  <div className="flex items-center gap-4 text-lg leading-6 font-bold">
                    <h1 className="text-[#131313] text-ellipsis">
                      Seattle, WA homes for sale & real estate
                    </h1>
                    <div className="flex items-center gap-2 text-[#15727A] text-sm whitespace-nowrap ml-4">
                      <span>View:</span>
                      <div className="flex items-center gap-1">
                        <span>Split</span>
                        <img
                          src="https://cdn.builder.io/api/v1/image/assets/87c856cbfc60482abe6dff9ffae95cea/cf4d84073bb13b254dcd15d142c64a4c2e5c4258?placeholderIfAbsent=true"
                          className="aspect-[1] object-contain w-6"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-8 ml-0 mt-1 flex-wrap">
                    <div className="flex gap-1 text-[#131313] text-sm font-bold leading-5 items-center">
                      <span>{visibleHomes.length}</span>
                      <span className="text-[#686868] font-normal">of</span>
                      <span>{homes.length} homes</span>
                    </div>
                    <div className="flex items-center gap-2 whitespace-nowrap text-sm ml-4">
                      <span className="text-[#131313]">Sort:</span>
                      <div className="flex items-center text-[#15727A] gap-1">
                        <span>Recommended</span>
                        <img
                          src="https://cdn.builder.io/api/v1/image/assets/87c856cbfc60482abe6dff9ffae95cea/cf4d84073bb13b254dcd15d142c64a4c2e5c4258?placeholderIfAbsent=true"
                          className="aspect-[1] object-contain w-6"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                {/* Property cards grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 pb-6 auto-rows-fr">
                  {visibleHomes.map((home) => (
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
                      onMouseEnter={handlePropertyHover}
                      onMouseLeave={handlePropertyLeave}
                    />
                  ))}
                </div>
              </div>
            </ScrollArea>
          </section>
          {/* Right side: fixed */}
          <section
            className={`${
              isMobile
                ? 'w-full h-[40vh]'
                : 'w-full lg:w-[40%] xl:w-[36%] 2xl:w-[32%]'
            } flex flex-col overflow-hidden`}
          >
            <MapView highlightedHomeId={highlightedHomeId} />
          </section>
        </main>
      </div>
    </div>
  );
}
