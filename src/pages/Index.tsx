
import { Header } from "@/components/layout/Header";
import { MapView } from "@/components/layout/MapView";
import { PropertyCard } from "@/components/property/PropertyCard";
import { ScrollArea } from "@/components/ui/scroll-area";
import { FilterBar } from "@/components/layout/FilterBar";
import { homes } from "@/data/homesData";
import { useState, useMemo } from "react";
import { Home } from "@/data/types";
import { useIsMobile } from "@/hooks/use-mobile";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "@/components/ui/select";
import { ChevronDown, ChevronUp, ArrowDown, ArrowUp } from "lucide-react";

type ViewMode = "split" | "list" | "map";
type SortMode = "recommended" | "price" | "newest";

export default function Index() {
  const [highlightedHomeId, setHighlightedHomeId] = useState<string | null>(null);
  const [filters, setFilters] = useState<Record<string, string>>({});
  const [visibleHomes, setVisibleHomes] = useState<Home[]>(homes);
  const [viewMode, setViewMode] = useState<ViewMode>("split");
  const [sortMode, setSortMode] = useState<SortMode>("recommended");
  const isMobile = useIsMobile();

  // Handle hover on property card
  const handlePropertyHover = (id: string) => {
    setHighlightedHomeId(id);
  };

  const handlePropertyLeave = () => {
    setHighlightedHomeId(null);
  };

  // Handle filter changes
  const handleFilterChange = (newFilters: Record<string, string>) => {
    setFilters(newFilters);
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

  // Handle sort change
  const handleSortChange = (value: SortMode) => {
    setSortMode(value);
  };

  // Handle view change
  const handleViewChange = (value: ViewMode) => {
    setViewMode(value);
  };

  // Sorted homes
  const sortedHomes = useMemo(() => {
    let result = [...visibleHomes];
    if (sortMode === "recommended") return result;
    if (sortMode === "price") {
      result.sort((a, b) => b.price - a.price);
    }
    if (sortMode === "newest") {
      result.sort((a, b) => (b.id > a.id ? 1 : -1));
    }
    return result;
  }, [visibleHomes, sortMode]);

  // Conditional rendering for views
  const showList = viewMode === "split" || viewMode === "list";
  const showMap = viewMode === "split" || viewMode === "map";

  return (
    <div className="h-screen flex flex-col overflow-hidden">
      <div className="shadow-[0px_2px_6px_0px_rgba(0,0,0,0.12),0px_1px_2px_0px_rgba(0,0,0,0.08)] bg-[#FAF9F8] w-full flex-1 flex flex-col overflow-hidden">
        <Header />
        <main className="w-full flex-1 flex flex-col lg:flex-row overflow-hidden">
          {/* Left side: list */}
          {showList && (
            <section
              className={`${
                isMobile
                  ? 'w-full h-[60vh]'
                  : 'w-full max-w-[900px] min-w-[440px] flex-shrink-0'
              } flex flex-col overflow-hidden border-r border-[#DDD]`}
            >
              <ScrollArea className="h-full hide-scrollbar">
                <div className="sticky top-0 z-10 bg-[#FAF9F8] pt-4 pb-2 px-4">
                  <FilterBar onFilterChange={handleFilterChange} />
                </div>
                <div className="bg-[#FAF9F8] w-full">
                  <div className="flex flex-col w-full px-6 pt-3 pb-3 gap-1">
                    <div className="flex items-center gap-4 text-lg leading-6 font-bold">
                      <h1 className="text-[#131313] text-ellipsis">
                        Seattle, WA homes for sale & real estate
                      </h1>
                    </div>
                    {/* New row: results and sort controls */}
                    <div className="flex flex-wrap items-center gap-6 justify-between mt-2">
                      <div className="flex gap-2 text-[#131313] text-sm font-bold leading-5 items-center">
                        <span>{visibleHomes.length}</span>
                        <span className="text-[#686868] font-normal">of</span>
                        <span>{homes.length} homes</span>
                        {/* Sort as clickable text */}
                        <div className="relative ml-4">
                          <Select value={sortMode} onValueChange={handleSortChange}>
                            <SelectTrigger
                              className="px-0 py-0 border-0 bg-transparent h-auto min-w-0 text-[#15727A] font-semibold text-sm shadow-none hover:bg-transparent focus:ring-0 focus:ring-offset-0 focus:outline-none"
                              style={{
                                boxShadow: "none"
                              }}
                            >
                              <div className="flex items-center gap-1 cursor-pointer select-none">
                                <span>
                                  {sortMode === "recommended" 
                                    ? "Recommended"
                                    : sortMode === "price"
                                    ? "Price"
                                    : "Newest"}
                                </span>
                                <ChevronDown className="h-4 w-4" />
                              </div>
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="recommended">Recommended</SelectItem>
                              <SelectItem value="price">Price</SelectItem>
                              <SelectItem value="newest">Newest</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                      {/* View Selector as clickable text */}
                      <div className="relative">
                        <Select value={viewMode} onValueChange={handleViewChange}>
                          <SelectTrigger
                            className="px-0 py-0 border-0 bg-transparent h-auto min-w-0 text-[#15727A] font-semibold text-sm shadow-none hover:bg-transparent focus:ring-0 focus:ring-offset-0 focus:outline-none"
                            style={{
                              boxShadow: "none"
                            }}
                          >
                            <div className="flex items-center gap-1 cursor-pointer select-none">
                              <span>
                                {viewMode === "split"
                                  ? "Split View"
                                  : viewMode === "list"
                                  ? "List View"
                                  : "Map View"}
                              </span>
                              <ChevronDown className="h-4 w-4" />
                            </div>
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="split">Split View</SelectItem>
                            <SelectItem value="list">List View</SelectItem>
                            <SelectItem value="map">Map View</SelectItem>
                          </SelectContent>
                        </Select>
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
                    {sortedHomes.map((home) => (
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
                        showActions
                      />
                    ))}
                  </div>
                </div>
              </ScrollArea>
            </section>
          )}
          {/* Right side: map */}
          {showMap && (
            <section
              className={`${
                isMobile
                  ? (showList ? 'w-full h-[40vh]' : 'w-full h-[100vh]')
                  : 'flex-1'
              } flex flex-col overflow-hidden`}
              // Only render if "map" or "split" view active
              style={{
                display: viewMode === "list" ? "none" : undefined
              }}
            >
              <MapView highlightedHomeId={highlightedHomeId} />
            </section>
          )}
        </main>
      </div>
    </div>
  );
}
