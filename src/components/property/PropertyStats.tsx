interface PropertyStatsProps {
  beds: number;
  baths: number;
  sqft: number;
}

export function PropertyStats({ beds, baths, sqft }: PropertyStatsProps) {
  return (
    <div className="items-center content-center flex-wrap flex w-full gap-[4px_16px] text-[14px] leading-[20px]">
      <div className="items-center self-stretch flex gap-1 whitespace-nowrap my-auto">
        <div className="self-stretch my-auto">{beds}</div>
        <div className="self-stretch my-auto">beds</div>
      </div>
      <div className="items-center self-stretch flex gap-1 whitespace-nowrap my-auto">
        <div className="self-stretch my-auto">{baths}</div>
        <div className="self-stretch my-auto">baths</div>
      </div>
      <div className="items-center self-stretch flex gap-1 my-auto">
        <div className="self-stretch my-auto">{sqft.toLocaleString()}</div>
        <div className="self-stretch my-auto">sq. ft.</div>
      </div>
    </div>
  );
}
