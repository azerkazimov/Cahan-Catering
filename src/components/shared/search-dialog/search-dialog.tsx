"use client";

import * as React from "react";
import { IoSearchOutline } from "react-icons/io5";

import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandInput,
  CommandList,
} from "@/components/ui/command";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { useRouter } from "next/navigation";
import { ProductProps } from "@/helpers/interfaces/products";
import { searchProducts } from "@/utils/actions/search-product";
import SearchResult from "./search-result";
import SearchSuggestion from "./search-suggestion";

export function SearchDialog() {
  const router = useRouter();
  const [open, setOpen] = React.useState(false);
  const [searchQuery, setSearchQuery] = React.useState("");
  const [searchResults, setSearchResults] = React.useState<ProductProps[]>([]);

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.ctrlKey || e.metaKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  // Search handler with debounce
  React.useEffect(() => {
    const timerId = setTimeout(async () => {
      if (searchQuery) {
        try {
          const result = await searchProducts(searchQuery);
          setSearchResults(result);
        } catch (error) {
          console.error("Search failed:", error);
          setSearchResults([]);
        }
      } else {
        setSearchResults([]);
      }
    }, 250);
    return () => clearTimeout(timerId);
  }, [searchQuery]);

  const handleProductSelect = (product: ProductProps) => {
    router.push(product.path);
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" className="bg-white/30 ">
          <div className="flex items-center gap-2">
            <IoSearchOutline className="h-4 w-4" />
            <span>Search products...</span>
          </div>
          <kbd className="pointer-events-none h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100 flex">
            <span className="text-xs">Ctrl K</span>
          </kbd>
        </Button>
      </DialogTrigger>
      <DialogContent className="p-0">
        <DialogTitle className="sr-only">Search products</DialogTitle>
        <Command>
          <CommandInput
            placeholder="Type a command or search..."
            value={searchQuery}
            onValueChange={setSearchQuery}
          />
          <CommandList>
            {searchQuery.trim() === "" ? (
              <SearchSuggestion />
            ) : searchResults.length > 0 ? (
              <SearchResult
                results={searchResults}
                onSelect={handleProductSelect}
              />
            ) : (
              <CommandEmpty>No results found.</CommandEmpty>
            )}
          </CommandList>
        </Command>
      </DialogContent>
    </Dialog>
  );
}
