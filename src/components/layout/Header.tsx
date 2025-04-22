import { useState } from "react";

export function Header() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <header className="items-center border-b-[color:var(--color-border-secondary,#D7D7D7)] bg-white flex min-h-[60px] w-full gap-12 flex-wrap px-[var(--spacing-700,28px)] py-2 border-b border-solid">
      <div className="items-center self-stretch flex min-w-60 gap-6 flex-1 shrink basis-[0%] my-auto">
        <div className="max-w-[450px] items-center self-stretch flex min-w-60 w-[450px] gap-2 flex-1 shrink basis-[0%] my-auto">
          <input
            type="text"
            placeholder="City, Address, School, Agent, ZIP"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="text-ellipsis self-stretch flex-1 shrink basis-5 bg-white min-w-60 gap-2 text-base text-[#222222] font-normal leading-6 px-4 py-2 rounded-md"
          />
          <button className="justify-center items-center bg-[#C82021] self-stretch flex w-10 h-10 my-auto px-2.5 rounded-md">
            <img src="https://cdn.builder.io/api/v1/image/assets/87c856cbfc60482abe6dff9ffae95cea/c49d94e2e509e12695801a6b4016c66d7f5c00e6?placeholderIfAbsent=true" className="aspect-[1] object-contain w-5" />
          </button>
        </div>
      </div>
      <nav className="items-center self-stretch flex min-w-60 gap-12 flex-wrap my-auto">
        <div className="self-stretch flex min-w-60 gap-6 text-sm text-[#222] font-normal leading-5 flex-wrap my-auto">
          <button>Buy ▾</button>
          <button>Rent ▾</button>
          <button>Sell ▾</button>
          <button>Redfin Premier</button>
          <button>Mortgage ▾</button>
          <button>Real Estate Agents ▾</button>
          <button>Feed</button>
        </div>
        <div className="self-stretch flex text-sm text-white font-bold leading-6 my-auto">
          <button className="justify-center items-center bg-[#222] flex gap-2 px-4 py-2 rounded-md">
            Join / Sign in
          </button>
        </div>
      </nav>
    </header>
  );
}
