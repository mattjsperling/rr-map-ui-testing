
import { Header } from "@/components/layout/Header";
import { MapView } from "@/components/layout/MapView";
import { PropertyCard } from "@/components/property/PropertyCard";
import { AdCard } from "@/components/property/AdCard";
import { ScrollArea } from "@/components/ui/scroll-area";
import { FilterBar } from "@/components/layout/FilterBar";
import { homes } from "@/data/homes";

export default function Index() {
  return (
    <div className="h-screen flex flex-col overflow-hidden">
      <div className="shadow-[0px_2px_6px_0px_rgba(0,0,0,0.12),0px_1px_2px_0px_rgba(0,0,0,0.08)] bg-[#FAF9F8] w-full flex-1 flex flex-col overflow-hidden">
        <Header />
        <main className="w-full flex-1 flex gap-5 max-md:flex-col overflow-hidden">
          {/* Left side: scrollable */}
          <section className="w-[44%] max-md:w-full h-full flex flex-col overflow-hidden">
            <ScrollArea className="h-[calc(100vh-68px)] max-md:h-[50vh]">
              {/* Filters pinned to top of left pane */}
              <div className="sticky top-0 z-10 bg-[#FAF9F8] pt-4 pb-2 px-4 border-b border-[#ddd]">
                <FilterBar />
              </div>
              <div className="bg-[#FAF9F8] w-full">
                <div className="items-center content-center flex-wrap border-b-[color:var(--color-border-divider,#DDD)] bg-[#FAF9F8] flex w-full gap-6 font-bold pt-3 pb-6 px-6 border-b border-solid">
                  <div className="items-center self-stretch flex min-w-60 w-full gap-4 flex-wrap flex-1 shrink basis-[0%] my-auto">
                    <h1 className="text-[#131313] text-ellipsis text-lg leading-6 self-stretch flex-1 shrink basis-[0%] my-auto">
                      Seattle, WA homes for sale & real estate
                    </h1>
                    <div className="items-center self-stretch flex gap-6 text-sm whitespace-nowrap leading-5 my-auto">
                      <div className="items-center self-stretch flex gap-4 my-auto">
                        <div className="items-center self-stretch flex gap-1 my-auto">
                          <span className="text-[#131313]">View:</span>
                          <div className="self-stretch flex items-center text-[#15727A]">
                            <span>Split</span>
                            <img
                              src="https://cdn.builder.io/api/v1/image/assets/87c856cbfc60482abe6dff9ffae95cea/cf4d84073bb13b254dcd15d142c64a4c2e5c4258?placeholderIfAbsent=true"
                              className="aspect-[1] object-contain w-6"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="content-start flex-wrap flex w-full gap-4 overflow-hidden p-4">
                  <div className="flex min-w-60 w-[792px] items-center gap-[40px_100px] text-sm font-bold leading-5 justify-between flex-wrap">
                    <div className="self-stretch flex gap-1 text-[#131313]">
                      <span>{homes.length}</span>
                      <span className="text-[#686868] font-normal">of</span>
                      <span>{homes.length} homes</span>
                    </div>
                    <div className="items-center self-stretch flex gap-1 whitespace-nowrap">
                      <span className="text-[#131313]">Sort:</span>
                      <div className="self-stretch flex items-center text-[#15727A]">
                        <span>Recommended</span>
                        <img
                          src="https://cdn.builder.io/api/v1/image/assets/87c856cbfc60482abe6dff9ffae95cea/cf4d84073bb13b254dcd15d142c64a4c2e5c4258?placeholderIfAbsent=true"
                          className="aspect-[1] object-contain w-6"
                        />
                      </div>
                    </div>
                  </div>
                  
                  {/* Property + ad cards */}
                  {homes.map((home, index) => {
                    // Every third home is an ad
                    if ((index + 1) % 3 === 0 && home.isForeclosure) {
                      return (
                        <AdCard
                          key={home.id}
                          imageUrl={home.imageUrl}
                          price={home.price}
                          beds={home.beds}
                          baths={home.baths}
                          sqft={home.sqft}
                          address={home.address}
                          logoUrl="https://cdn.builder.io/api/v1/image/assets/87c856cbfc60482abe6dff9ffae95cea/a8ad4c008b0babf307c6a5d1a1c15d1a36b894e5?placeholderIfAbsent=true"
                        />
                      );
                    }
                    
                    return (
                      <PropertyCard
                        key={home.id}
                        imageUrl={home.imageUrl}
                        price={home.price}
                        beds={home.beds}
                        baths={home.baths}
                        sqft={home.sqft}
                        address={home.address}
                        agent={home.agent}
                        isHot={home.isHot}
                      />
                    );
                  })}
                </div>
              </div>
            </ScrollArea>
          </section>
          {/* Right side: fixed */}
          <section className="w-[56%] max-md:w-full max-md:ml-0 h-[calc(100vh-68px)] flex flex-col overflow-hidden">
            <MapView />
          </section>
        </main>
      </div>
    </div>
  );
}
