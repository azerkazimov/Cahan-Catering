import { CommandGroup, CommandItem } from "@/components/ui/command";
import { CategoryProps } from "@/helpers/interfaces/categories";

interface SearchResultprops {
  results: CategoryProps[];
  onSelect: (product: CategoryProps) => void;
}

export default function SearchResult({ results, onSelect }: SearchResultprops) {
  return (
    <CommandGroup heading="Products">
      {results.map((product) => (
        <CommandItem key={product.id} value={product.name} onSelect={() => onSelect(product)}>
          <span>{product.name}</span>
        </CommandItem>
      ))}
    </CommandGroup>
  );
}
