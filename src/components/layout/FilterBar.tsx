interface FilterOption {
  label: string;
  value: string;
}

interface FilterBarProps {
  onFilterChange?: (filter: string, value: string) => void;
}

export function FilterBar({ onFilterChange }: FilterBarProps) {
  return (
    <div className="flex min-w-60 gap-2 text-sm text-[#222] leading-6 flex-wrap my-auto max-md:max-w-full">
      <div className="items-center bg-white flex gap-2 rounded-md px-3 py-2">
        <div className="text-ellipsis self-stretch my-auto">For sale</div>
        <img src="https://cdn.builder.io/api/v1/image/assets/87c856cbfc60482abe6dff9ffae95cea/5380518bf093cb166bf2673aaae9f54775617bcc?placeholderIfAbsent=true" className="aspect-[1] object-contain w-6" />
      </div>
      <div className="items-center bg-white flex gap-2 whitespace-nowrap rounded-md px-3 py-2">
        <div className="text-ellipsis self-stretch my-auto">Price</div>
        <img src="https://cdn.builder.io/api/v1/image/assets/87c856cbfc60482abe6dff9ffae95cea/5380518bf093cb166bf2673aaae9f54775617bcc?placeholderIfAbsent=true" className="aspect-[1] object-contain w-6" />
      </div>
      <div className="items-center bg-white flex gap-2 whitespace-nowrap rounded-md px-3 py-2">
        <div className="text-ellipsis self-stretch my-auto">Beds/baths</div>
        <img src="https://cdn.builder.io/api/v1/image/assets/87c856cbfc60482abe6dff9ffae95cea/5380518bf093cb166bf2673aaae9f54775617bcc?placeholderIfAbsent=true" className="aspect-[1] object-contain w-6" />
      </div>
      <div className="items-center bg-white flex gap-2 rounded-md px-3 py-2">
        <div className="text-ellipsis self-stretch my-auto">Home type</div>
        <img src="https://cdn.builder.io/api/v1/image/assets/87c856cbfc60482abe6dff9ffae95cea/5380518bf093cb166bf2673aaae9f54775617bcc?placeholderIfAbsent=true" className="aspect-[1] object-contain w-6" />
      </div>
      <div className="flex text-sm text-[#131313] leading-5">
        <button className="justify-center items-center bg-white flex gap-2 px-3 py-2 rounded-md">
          <img src="https://cdn.builder.io/api/v1/image/assets/87c856cbfc60482abe6dff9ffae95cea/772bdebd3f34a692fdef56782641a9626af7862b?placeholderIfAbsent=true" className="aspect-[1] object-contain w-5" />
          <span>All filters</span>
        </button>
      </div>
      <div className="text-sm text-white font-bold leading-5 pl-2">
        <button className="justify-center items-center bg-[#C82021] flex gap-2 px-4 py-2 rounded-md">
          Save search
        </button>
      </div>
    </div>
  );
}
