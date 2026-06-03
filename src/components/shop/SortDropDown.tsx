import { ArrowUpDown } from "lucide-react";

export type SortKey = "featured" | "price-asc" | "price-desc" | "name-asc";

interface SortDropdownProps {
  value: SortKey;
  onChange: (v: SortKey) => void;
}

export function SortDropdown({ value, onChange }: SortDropdownProps) {
  return (
    <label className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm shadow-sm">
      <ArrowUpDown className="h-4 w-4 text-muted-foreground" />
      <span className="hidden text-muted-foreground sm:inline">Sort</span>
      <select
        aria-label="Sort products"
        value={value}
        onChange={(e) => onChange(e.target.value as SortKey)}
        className="cursor-pointer bg-transparent font-medium text-foreground outline-none"
      >
        <option value="featured">Featured</option>
        <option value="price-asc">Price: Low to High</option>
        <option value="price-desc">Price: High to Low</option>
        <option value="name-asc">Name: A–Z</option>
      </select>
    </label>
  );
}
