import { Badge } from "@/components/ui/Badge";
import { PropertyStats } from "./PropertyStats";

interface AdCardProps {
  imageUrl: string;
  price: number;
  beds: number;
  baths: number;
  sqft: number;
  address: string;
  logoUrl: string;
}

export function AdCard({
  imageUrl,
  price,
  beds,
  baths,
  sqft,
  address,
  logoUrl,
}: AdCardProps) {
  return (
    <article className="min-w-[348px] bg-white relative overflow-hidden flex-1 shrink basis-[0%] rounded-xl">
      <div className="absolute z-0 min-h-[387px] w-full max-w-[388px] overflow-hidden font-bold inset-0">
        <div className="w-full overflow-hidden text-xs whitespace-nowrap text-center leading-none flex-1">
          <div className="flex flex-col overflow-hidden relative aspect-[1.597] w-full gap-2 pl-2 pr-[78px] pt-2 pb-[215px] max-md:pr-5 max-md:pb-[100px]">
            <img
              src={imageUrl}
              alt={address}
              className="absolute h-full w-full object-cover inset-0"
            />
            <Badge variant="ad">AD</Badge>
            <Badge variant="foreclosure">FORECLOSURE</Badge>
          </div>
        </div>
        <div className="items-stretch flex w-full flex-col text-sm text-[#222] font-normal leading-5 justify-center gap-2 p-4">
          <div className="w-full gap-1">
            <div className="min-w-[108px] text-lg font-bold leading-6 max-md:max-w-full">
              ${price.toLocaleString()}
            </div>
            <div className="mt-1">
              <PropertyStats beds={beds} baths={baths} sqft={sqft} />
            </div>
            <div className="flex-1 shrink basis-[0%] w-full gap-1 mt-1">
              {address}
            </div>
          </div>
        </div>
        <div className="justify-between flex w-full gap-[40px_100px] text-base text-[#15727A] text-center leading-6">
          <img
            src={logoUrl}
            alt="Company logo"
            className="aspect-[5.46] object-contain w-[104px] shrink-0"
          />
          <div className="flex gap-2">
            <div>View details</div>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/87c856cbfc60482abe6dff9ffae95cea/adc4a0e7ed0f15ca172aa05793b7f40e40ae5ec3?placeholderIfAbsent=true"
              className="aspect-[1] object-contain w-6 shrink-0"
            />
          </div>
        </div>
      </div>
      <div className="z-0 w-full overflow-hidden">
        <div className="rotate-[-0.729727398005422rad] flex min-h-[258px] w-full" />
      </div>
      <div className="z-0 flex min-h-32 w-full gap-2 p-4" />
    </article>
  );
}
