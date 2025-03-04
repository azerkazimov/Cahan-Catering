"use client";

import {
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { NavBarProps } from "@/helpers/interfaces/navbar";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

interface NavItemProps {
  item: NavBarProps;
}

export default function NavMenuItem({ item }: NavItemProps) {
  const path = usePathname();
  const isActive = path.startsWith(`/docs/${item.name.toLowerCase()}`);

  if (!item.items || item.items.length === 0) {
    return (
      <NavigationMenuItem>
        <Link href={item.path || "#"}>
          <span
            className={cn(
              "text-customBlue hover:text-black px-4 py-2 text-sm font-medium bg-transparent rounded-sm hover:bg-accent focus:bg-accent focus:text-accent-foreground",
              isActive && "font-bold bg-slate-500"
            )}
          >
            {item.name}
          </span>
        </Link>
      </NavigationMenuItem>
    );
  }

  return (
    <NavigationMenuItem>
      <NavigationMenuTrigger
        className={cn(
          "bg-transparent hover:bg-accent focus:bg-accent focus:text-accent-foreground text-customBlue",
          isActive && "font-bold bg-slate-500"
        )}
      >
        {item.name}
      </NavigationMenuTrigger>
      <NavigationMenuContent>
        <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
          {item.items.map((component) => (
            <ListItem
              key={component.title}
              title={component.title}
              href={component.href}
            >
              {component.description}
            </ListItem>
          ))}
        </ul>
      </NavigationMenuContent>
    </NavigationMenuItem>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-black focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none text-customBlue">{title}</div>
          <p className="text-customLightBlue line-clamp-2 text-sm leading-snug ">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
