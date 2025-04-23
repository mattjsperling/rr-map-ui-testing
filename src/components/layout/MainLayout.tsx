
import { Header } from "@/components/layout/Header";
import { MapView } from "@/components/layout/MapView";
import { homes } from "@/data/homesData";
import { useState, useMemo } from "react";
import { Home } from "@/data/types";
import { useIsMobile } from "@/hooks/use-mobile";
import { PropertyList } from "@/components/layout/PropertyList";

export type ViewMode = "split" | "list" | "map";
export type SortMode = "recommended" | "price" | "newest";

export function MainLayout() {
  const [highlightedHomeId, setHighlightedHomeId] = useState<string | null>(null);
  const [filters, setFilters] = useState<Record<string, string>>({});
  const [visibleHomes, setVisibleHomes] = useState<Home[]>(homes);
  const [viewMode, setViewMode] = useState<ViewMode>("split");
  const [sortMode, setSortMode] = useState<SortMode>("recommended");
  const isMobile = useIsMobile();

  // Hover handlers
  const handlePropertyHover = (id: string) => setHighlightedHomeId(id);
  const handlePropertyLeave = () => setHighlightedHomeId(null);

  // Filter
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

  // Sort
  const handleSortChange = (newSort: SortMode) => setSortMode(newSort);

  // View
  const handleViewChange = (v: ViewMode) => setViewMode(v);

  // Sorting logic
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

  const showList = viewMode === "split" || viewMode === "list";
  const showMap = viewMode === "split" || viewMode === "map";

  return (
    <div className="h-screen flex flex-col overflow-hidden">
      <div className="shadow-[0px_2px_6px_0px_rgba(0,0,0,0.12),0px_1px_2px_0px_rgba(0,0,0,0.08)] bg-[#FAF9F8] w-full flex-1 flex flex-col overflow-hidden">
        <Header />
        <main className="w-full flex-1 flex flex-col lg:flex-row overflow-hidden">
          {showList && (
            <section
              className={`${
                isMobile
                  ? 'w-full h-[60vh]'
                  : 'w-full max-w-[900px] min-w-[440px] flex-shrink-0'
              } flex flex-col overflow-hidden border-r border-[#DDD]`}
            >
              <PropertyList
                homes={sortedHomes}
                highlightedHomeId={highlightedHomeId}
                onPropertyHover={handlePropertyHover}
                onPropertyLeave={handlePropertyLeave}
                filters={filters}
                onFilterChange={handleFilterChange}
                sortMode={sortMode}
                onSortChange={handleSortChange}
                viewMode={viewMode}
                onViewChange={handleViewChange}
              />
            </section>
          )}
          {showMap && (
            <section
              className={`${
                isMobile
                  ? (showList ? 'w-full h-[40vh]' : 'w-full h-[100vh]')
                  : 'flex-1'
              } flex flex-col overflow-hidden`}
            >
              <MapView highlightedHomeId={highlightedHomeId} />
            </section>
          )}
        </main>
      </div>
    </div>
  );
}
