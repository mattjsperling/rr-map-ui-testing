
import { useState } from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Check, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export interface FilterOption {
  label: string;
  value: string;
}

const FOR_SALE_OPTIONS: FilterOption[] = [
  { label: "For sale", value: "for-sale" },
  { label: "For rent", value: "for-rent" },
  { label: "Sold", value: "sold" },
];

const PRICE_OPTIONS: FilterOption[] = [
  { label: "Any price", value: "any" },
  { label: "Under $300k", value: "<300000" },
  { label: "$300k-$500k", value: "300000-500000" },
  { label: "$500k-$750k", value: "500000-750000" },
  { label: "$750k-$1M", value: "750000-1000000" },
  { label: "$1M+", value: ">1000000" },
];

const BEDS_OPTIONS: FilterOption[] = [
  { label: "Any beds", value: "any" },
  { label: "1+ beds", value: ">0" },
  { label: "2+ beds", value: ">1" },
  { label: "3+ beds", value: ">2" },
  { label: "4+ beds", value: ">3" },
  { label: "5+ beds", value: ">4" },
];

const HOME_TYPE_OPTIONS: FilterOption[] = [
  { label: "Any home", value: "any" },
  { label: "House", value: "house" },
  { label: "Apartment", value: "apartment" },
  { label: "Condo", value: "condo" },
  { label: "Townhouse", value: "townhouse" },
];

interface FilterBarProps {
  onFilterChange?: (filters: Record<string, string>) => void;
}

export function FilterBar({ onFilterChange }: FilterBarProps) {
  const [filters, setFilters] = useState({
    forSale: "for-sale",
    price: "any",
    beds: "any",
    homeType: "any",
  });

  const handleFilterChange = (filterType: string, value: string) => {
    const newFilters = { ...filters, [filterType]: value };
    setFilters(newFilters);
    onFilterChange?.(newFilters);
  };

  return (
    <div className="flex min-w-60 gap-2 text-sm text-[#222] leading-6 flex-wrap my-auto">
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline" className="items-center bg-white flex gap-2 rounded-md px-3 py-2">
            <div className="text-ellipsis self-stretch my-auto">
              {FOR_SALE_OPTIONS.find(opt => opt.value === filters.forSale)?.label || "For sale"}
            </div>
            <ChevronDown className="h-4 w-4" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[200px] p-0" align="start">
          <div className="flex flex-col">
            {FOR_SALE_OPTIONS.map((option) => (
              <Button
                key={option.value}
                variant="ghost"
                className="justify-start rounded-none h-auto py-2"
                onClick={() => handleFilterChange("forSale", option.value)}
              >
                <Check 
                  className={cn(
                    "mr-2 h-4 w-4",
                    filters.forSale === option.value ? "opacity-100" : "opacity-0"
                  )} 
                />
                {option.label}
              </Button>
            ))}
          </div>
        </PopoverContent>
      </Popover>

      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline" className="items-center bg-white flex gap-2 whitespace-nowrap rounded-md px-3 py-2">
            <div className="text-ellipsis self-stretch my-auto">
              {PRICE_OPTIONS.find(opt => opt.value === filters.price)?.label || "Price"}
            </div>
            <ChevronDown className="h-4 w-4" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[200px] p-0" align="start">
          <div className="flex flex-col">
            {PRICE_OPTIONS.map((option) => (
              <Button
                key={option.value}
                variant="ghost"
                className="justify-start rounded-none h-auto py-2"
                onClick={() => handleFilterChange("price", option.value)}
              >
                <Check 
                  className={cn(
                    "mr-2 h-4 w-4",
                    filters.price === option.value ? "opacity-100" : "opacity-0"
                  )} 
                />
                {option.label}
              </Button>
            ))}
          </div>
        </PopoverContent>
      </Popover>

      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline" className="items-center bg-white flex gap-2 whitespace-nowrap rounded-md px-3 py-2">
            <div className="text-ellipsis self-stretch my-auto">
              {BEDS_OPTIONS.find(opt => opt.value === filters.beds)?.label || "Beds/baths"}
            </div>
            <ChevronDown className="h-4 w-4" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[200px] p-0" align="start">
          <div className="flex flex-col">
            {BEDS_OPTIONS.map((option) => (
              <Button
                key={option.value}
                variant="ghost"
                className="justify-start rounded-none h-auto py-2"
                onClick={() => handleFilterChange("beds", option.value)}
              >
                <Check 
                  className={cn(
                    "mr-2 h-4 w-4",
                    filters.beds === option.value ? "opacity-100" : "opacity-0"
                  )} 
                />
                {option.label}
              </Button>
            ))}
          </div>
        </PopoverContent>
      </Popover>

      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline" className="items-center bg-white flex gap-2 rounded-md px-3 py-2">
            <div className="text-ellipsis self-stretch my-auto">
              {HOME_TYPE_OPTIONS.find(opt => opt.value === filters.homeType)?.label || "Home type"}
            </div>
            <ChevronDown className="h-4 w-4" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[200px] p-0" align="start">
          <div className="flex flex-col">
            {HOME_TYPE_OPTIONS.map((option) => (
              <Button
                key={option.value}
                variant="ghost"
                className="justify-start rounded-none h-auto py-2"
                onClick={() => handleFilterChange("homeType", option.value)}
              >
                <Check 
                  className={cn(
                    "mr-2 h-4 w-4",
                    filters.homeType === option.value ? "opacity-100" : "opacity-0"
                  )} 
                />
                {option.label}
              </Button>
            ))}
          </div>
        </PopoverContent>
      </Popover>

      <div className="flex text-sm text-[#131313] leading-5">
        <Button variant="outline" className="justify-center items-center bg-white flex gap-2 px-3 py-2 rounded-md">
          <img src="https://cdn.builder.io/api/v1/image/assets/87c856cbfc60482abe6dff9ffae95cea/772bdebd3f34a692fdef56782641a9626af7862b?placeholderIfAbsent=true" className="aspect-[1] object-contain w-5" />
          <span>All filters</span>
        </Button>
      </div>
      
      <div className="text-sm text-white font-bold leading-5 pl-2">
        <Button className="justify-center items-center bg-[#C82021] flex gap-2 px-4 py-2 rounded-md">
          Save search
        </Button>
      </div>
    </div>
  );
}
