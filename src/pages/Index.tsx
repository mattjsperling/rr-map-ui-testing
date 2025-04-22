import { Header } from "@/components/layout/Header";
import { MapView } from "@/components/layout/MapView";
import { PropertyCard } from "@/components/property/PropertyCard";
import { AdCard } from "@/components/property/AdCard";

export default function Index() {
  return (
    <div className="pb-[130px] max-md:pb-[100px]">
      <div className="shadow-[0px_2px_6px_0px_rgba(0,0,0,0.12),0px_1px_2px_0px_rgba(0,0,0,0.08)] bg-[#FAF9F8] w-full overflow-hidden">
        <Header />
        <main className="w-full">
          <div className="gap-5 flex max-md:flex-col">
            <section className="w-[44%] max-md:w-full">
              <div className="bg-[#FAF9F8] min-h-[956px] w-full overflow-hidden mt-[68px] mx-auto max-md:mt-10">
                <div className="items-center content-center flex-wrap border-b-[color:var(--color-border-divider,#DDD)] bg-[#FAF9F8] flex w-full gap-6 font-bold pt-3 pb-6 px-6 border-b border-solid">
                  <div className="items-center self-stretch flex min-w-60 w-full gap-4 flex-wrap flex-1 shrink basis-[0%] my-auto">
                    <h1 className="text-[#131313] text-ellipsis text-lg leading-6 self-stretch flex-1 shrink basis-[0%] my-auto">
                      San Francisco, CA homes for sale & real estate
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
                <div className="content-start flex-wrap flex w-full gap-4 overflow-hidden flex-1 h-full p-4">
                  <div className="flex min-w-60 w-[792px] items-center gap-[40px_100px] text-sm font-bold leading-5 justify-between flex-wrap">
                    <div className="self-stretch flex gap-1 text-[#131313]">
                      <span>40</span>
                      <span className="text-[#686868] font-normal">of</span>
                      <span>286 homes</span>
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

                  <PropertyCard
                    imageUrl="https://cdn.builder.io/api/v1/image/assets/87c856cbfc60482abe6dff9ffae95cea/2d9ec5061d2bd6a5533823a24e47b96e85d8475c?placeholderIfAbsent=true"
                    price={450000}
                    beds={3}
                    baths={3.5}
                    sqft={2560}
                    address="123 Main St, Seattle, WA 98178"
                    agent="Cory Brandt · RE/MAX Northwest Realtors"
                    isHot={true}
                  />

                  <PropertyCard
                    imageUrl="https://cdn.builder.io/api/v1/image/assets/87c856cbfc60482abe6dff9ffae95cea/67a92244504a58ae4d71f5e6965a02bc62c49b7a?placeholderIfAbsent=true"
                    price={450000}
                    beds={3}
                    baths={3.5}
                    sqft={2560}
                    address="123 Main St, Seattle, WA 98178"
                    agent="Cory Brandt · RE/MAX Northwest Realtors"
                    isHot={true}
                  />

                  <AdCard
                    imageUrl="https://cdn.builder.io/api/v1/image/assets/87c856cbfc60482abe6dff9ffae95cea/6d00fc81de657ed1a5e3f59414f4ae834f36a2ea?placeholderIfAbsent=true"
                    price={450000}
                    beds={3}
                    baths={3.5}
                    sqft={2560}
                    address="123 Main St, Seattle, WA 98178"
                    logoUrl="https://cdn.builder.io/api/v1/image/assets/87c856cbfc60482abe6dff9ffae95cea/a8ad4c008b0babf307c6a5d1a1c15d1a36b894e5?placeholderIfAbsent=true"
                  />

                  <PropertyCard
                    imageUrl="https://cdn.builder.io/api/v1/image/assets/87c856cbfc60482abe6dff9ffae95cea/b067b35c991bcbfc08e325ed875ddf3434dfbba7?placeholderIfAbsent=true"
                    price={450000}
                    beds={3}
                    baths={3.5}
                    sqft={2560}
                    address="123 Main St, Seattle, WA 98178"
                    agent="Cory Brandt · RE/MAX Northwest Realtors"
                    isHot={true}
                  />
                </div>
              </div>
            </section>

            <section className="w-[56%] ml-5 max-md:w-full max-md:ml-0">
              <MapView />
            </section>
          </div>
        </main>
      </div>
      <div className="relative z-10 flex mt-[-569px] w-[484px] max-w-full flex-col ml-[324px] max-md:mt-[-200px]">
        {["https://cdn.builder.io/api/v1/image/assets/87c856cbfc60482abe6dff9ffae95cea/3e90b401-20b2-4578-9e68-f20f39df6ea7?placeholderIfAbsent=true", "https://cdn.builder.io/api/v1/image/assets/87c856cbfc60482abe6dff9ffae95cea/550c9fde-ba61-46f2-9793-8fdc2c3e11cf?placeholderIfAbsent=true", "https://cdn.builder.io/api/v1/image/assets/87c856cbfc60482abe6dff9ffae95cea/c2f72068-b349-4337-9ec1-a6a8e01e1d5a?placeholderIfAbsent=true", "https://cdn.builder.io/api/v1/image/assets/87c856cbfc60482abe6dff9ffae95cea/44f1b35c-1c85-4782-b120-25a84bf07962?placeholderIfAbsent=true", "https://cdn.builder.io/api/v1/image/assets/87c856cbfc60482abe6dff9ffae95cea/abab5c0a-3fda-4d8f-9d7d-7b9e69a94049?placeholderIfAbsent=true", "https://cdn.builder.io/api/v1/image/assets/87c856cbfc60482abe6dff9ffae95cea/a0467258-f8e6-4d4d-abb1-27283f3ad9dc?placeholderIfAbsent=true"].map(
          (url, index) => (
            <img
              key={index}
              src={url}
              className={`aspect-[1] object-contain w-10 absolute z-0 -translate-x-2/4 -translate-y-2/4 h-10 ${
                index < 4 ? "mb-[319px] max-md:mb-10" : ""
              } left-2/4 top-2/4`}
              alt={`Map marker ${index + 1}`}
            />
          ),
        )}
      </div>
    </div>
  );
}
