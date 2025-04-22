import { FilterBar } from "./FilterBar";

export function MapView() {
  return (
    <div className="grow overflow-hidden font-normal w-full">
      <div className="flex flex-col relative min-h-[1020px] w-full overflow-hidden pb-[716px] max-md:pb-[100px]">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/87c856cbfc60482abe6dff9ffae95cea/f33792c09aeb6363363aabc96db6a46c1ef5d9e3?placeholderIfAbsent=true"
          className="absolute h-full w-full object-cover inset-0"
          alt="Map view"
        />
        <div className="relative justify-between items-stretch z-10 flex w-full gap-[40px_100px] flex-wrap px-[28px] py-3">
          <FilterBar />
          <div className="flex min-w-60 items-center gap-8 text-base text-[#222] whitespace-nowrap text-center h-full w-[290px]">
            <div className="items-center self-stretch flex min-w-60 w-[290px] gap-2 my-auto">
              <div className="bg-white self-stretch flex min-w-60 w-[290px] gap-0.5 overflow-hidden my-auto p-0.5 rounded-lg">
                <button className="self-stretch gap-1 overflow-hidden flex-1 shrink basis-[0%] p-2 rounded-md">
                  List
                </button>
                <button className="self-stretch bg-[#268C95] gap-1 overflow-hidden text-white font-bold flex-1 shrink basis-[0%] p-2 rounded-md">
                  Split
                </button>
                <button className="self-stretch gap-1 overflow-hidden flex-1 shrink basis-[0%] p-2 rounded-md">
                  Map
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="relative items-center flex mt-[-52px] mb-[-143px] w-12 flex-col text-[10px] text-[#131313] whitespace-nowrap leading-[1.6] gap-4">
          <div className="w-full gap-4">
            <button className="justify-center items-center shadow-[0px_4px_16px_0px_rgba(0,0,0,0.12),0px_1px_4px_0px_rgba(0,0,0,0.08)] bg-[#FEFEFE] flex min-h-12 w-full flex-col h-12 rounded-md">
              <img src="https://cdn.builder.io/api/v1/image/assets/87c856cbfc60482abe6dff9ffae95cea/3dad50c5bcfd7422ea7e634e2fec296b2e91faa1?placeholderIfAbsent=true" className="aspect-[1] object-contain w-6" />
              <div>Draw</div>
            </button>
            <button className="justify-center items-center shadow-[0px_4px_16px_0px_rgba(0,0,0,0.12),0px_1px_4px_0px_rgba(0,0,0,0.08)] bg-[#FEFEFE] flex min-h-12 w-full flex-col h-12 mt-4 rounded-md">
              <img src="https://cdn.builder.io/api/v1/image/assets/87c856cbfc60482abe6dff9ffae95cea/72f38436ca31ba28a90979b535b2e96f5b71e078?placeholderIfAbsent=true" className="aspect-[1] object-contain w-6" />
              <div>Options</div>
            </button>
            <button className="justify-center items-center shadow-[0px_4px_16px_0px_rgba(0,0,0,0.12),0px_1px_4px_0px_rgba(0,0,0,0.08)] bg-[#FEFEFE] flex min-h-12 w-full flex-col h-12 mt-4 rounded-md">
              <img src="https://cdn.builder.io/api/v1/image/assets/87c856cbfc60482abe6dff9ffae95cea/23a4fa22adda2a00a2f7826c3a54301ec34ec4af?placeholderIfAbsent=true" className="aspect-[1] object-contain w-6" />
              <div>Map</div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
