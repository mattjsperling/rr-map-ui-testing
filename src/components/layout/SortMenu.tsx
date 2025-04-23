
import { ChevronDown, ArrowDown, ArrowUp } from "lucide-react";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";

export type SortMode = "recommended" | "price" | "newest";

interface SortMenuProps {
  sortMode: SortMode;
  onSortChange: (mode: SortMode) => void;
}

export function SortMenu({ sortMode, onSortChange }: SortMenuProps) {
  function getLabel(mode: SortMode) {
    if (mode === "recommended") return "Recommended";
    if (mode === "price") return "Price";
    if (mode === "newest") return "Newest";
    return mode;
  }

  function getArrow(mode: SortMode) {
    // Only show arrow for "Price" (↓) and "Newest" (↑)
    if (mode === "price") return <ArrowDown className="h-4 w-4 ml-1 inline" />;
    if (mode === "newest") return <ArrowUp className="h-4 w-4 ml-1 inline" />;
    return null;
  }

  return (
    <Select value={sortMode} onValueChange={v => onSortChange(v as SortMode)}>
      <SelectTrigger
        className={cn(
          "bg-transparent border-0 h-auto min-w-0 text-[#15727A] font-semibold text-sm shadow-none hover:bg-transparent focus:ring-0 focus:ring-offset-0 focus:outline-none px-2 py-1",
        )}
        style={{
          boxShadow: "none"
        }}
      >
        <div className="flex items-center gap-1 cursor-pointer select-none">
          <span>{getLabel(sortMode)}</span>
          {getArrow(sortMode)}
          <ChevronDown className="h-4 w-4" />
        </div>
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="recommended">Recommended</SelectItem>
        <SelectItem value="price">
          Price <ArrowDown className="h-4 w-4 inline ml-1" />
        </SelectItem>
        <SelectItem value="newest">
          Newest <ArrowUp className="h-4 w-4 inline ml-1" />
        </SelectItem>
      </SelectContent>
    </Select>
  );
}
