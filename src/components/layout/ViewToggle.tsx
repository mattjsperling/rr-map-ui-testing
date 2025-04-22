
import { ChevronDown } from "lucide-react";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "@/components/ui/select";

type ViewMode = "split" | "list" | "map";

interface ViewToggleProps {
  viewMode: ViewMode;
  onViewChange: (mode: ViewMode) => void;
}

export function ViewToggle({ viewMode, onViewChange }: ViewToggleProps) {
  return (
    <div className="relative">
      <Select value={viewMode} onValueChange={onViewChange}>
        <SelectTrigger
          className="px-0 py-0 border-0 bg-transparent h-auto min-w-0 text-[#15727A] font-semibold text-sm shadow-none hover:bg-transparent focus:ring-0 focus:ring-offset-0 focus:outline-none"
          style={{
            boxShadow: "none"
          }}
        >
          <div className="flex items-center gap-1 cursor-pointer select-none">
            <span>
              {viewMode === "split"
                ? "Split View"
                : viewMode === "list"
                ? "List View"
                : "Map View"}
            </span>
            <ChevronDown className="h-4 w-4" />
          </div>
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="split">Split View</SelectItem>
          <SelectItem value="list">List View</SelectItem>
          <SelectItem value="map">Map View</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}
