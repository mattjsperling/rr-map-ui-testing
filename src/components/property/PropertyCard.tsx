
import { Badge } from "@/components/ui/badge";
import { PropertyStats } from "./PropertyStats";

interface PropertyCardProps {
  imageUrl: string;
  price: number;
  beds: number;
  baths: number;
  sqft: number;
  address: string;
  agent: string;
  isHot?: boolean;
}

export function PropertyCard({
  imageUrl,
  price,
  beds,
  baths,
  sqft,
  address,
  agent,
  isHot = false,
}: PropertyCardProps) {
  return (
    <article className="min-w-[348px] bg-white overflow-hidden flex-1 shrink basis-[0%] rounded-xl">
      <div className="flex flex-col overflow-hidden relative aspect-[1.498] w-full">
        <img
          src={imageUrl}
          alt={address}
          className="absolute h-full w-full object-cover inset-0"
        />
        {isHot && (
          <div className="absolute items-center content-center flex-wrap z-0 flex w-full max-w-[372px] gap-2 top-2 inset-x-2">
            <Badge className="bg-[#BF3400] text-white font-bold">HOT HOME</Badge>
          </div>
        )}
        <div className="relative z-0 w-full overflow-hidden">
          <div className="rotate-[-0.729727398005422rad] flex min-h-[259px] w-full" />
        </div>
      </div>
      <div className="w-full text-[#222] font-normal gap-2 p-4">
        <div className="items-center content-center flex-wrap flex w-full gap-6 text-lg font-bold leading-6">
          <div className="min-w-[108px] self-stretch flex-1 shrink basis-[0%] my-auto">
            ${price.toLocaleString()}
          </div>
        </div>
        <div className="w-full mt-2">
          <PropertyStats beds={beds} baths={baths} sqft={sqft} />
          <div className="flex-1 shrink basis-[0%] w-full gap-1 text-xs leading-none mt-2">
            {address}
          </div>
        </div>
        <div className="flex-1 shrink basis-[0%] w-full gap-2 text-xs text-[#676767] leading-none mt-2">
          {agent}
        </div>
      </div>
    </article>
  );
}
