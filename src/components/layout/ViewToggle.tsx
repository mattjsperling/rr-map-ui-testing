
import { ChevronDown, List, Map } from "lucide-react";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "@/components/ui/select";

export type ViewMode = "split" | "list" | "map";

interface ViewToggleProps {
  viewMode: ViewMode;
  onViewChange: (mode: ViewMode) => void;
}

export function ViewToggle({ viewMode, onViewChange }: ViewToggleProps) {
  const getLabel = (mode: ViewMode) => 
      mode === "split"
        ? "Split View"
        : mode === "list"
        ? "List View"
        : "Map View";

  return (
    <Select value={viewMode} onValueChange={onViewChange}>
      <SelectTrigger
        className="px-2 py-1 border-0 bg-transparent h-auto min-w-0 text-[#15727A] font-semibold text-sm shadow-none hover:bg-transparent focus:ring-0 focus:ring-offset-0 focus:outline-none"
        style={{
          boxShadow: "none"
        }}
      >
        <div className="flex items-center gap-1 cursor-pointer select-none">
          {getLabel(viewMode)}
          <ChevronDown className="h-4 w-4" />
        </div>
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="split">Split View</SelectItem>
        <SelectItem value="list">
          <List className="h-4 w-4 inline mr-1" />
          List View
        </SelectItem>
        <SelectItem value="map">
          <Map className="h-4 w-4 inline mr-1" />
          Map View
        </SelectItem>
      </SelectContent>
    </Select>
  );
}
