import Link from "next/link";
import * as React from "react";

import NavMenuItem from "@/components/shared/nav-item";
import ProfileButton from "@/components/shared/profile-button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

import { cn } from "@/lib/utils";

import { NavBarProps } from "../../../helpers/interfaces/navbar";

import { SearchDialog } from "../../shared/search-dialog/search-dialog";
import { Sidebar } from "../../shared/sidebar/sidebar";

export default async function NavBar() {
  const response = await fetch(`${process.env.API_HOST}/products`);
  if (!response.ok) {
    throw new Error(`Failed to fetch products: ${response.statusText}`);
  }
  const products = await response.json();

  return (
    <div className="border-b border-b-white/50 py-4 fixed w-full top-0 z-10 backdrop-blur-lg bg-white/50">
      <div className="container flex items-center justify-between ">
        <div className="flex items-center gap-4">
          <Link href="/" className="text-lg font-bold">
            Catering
          </Link>
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                  Catering
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                    <li className="row-span-3">
                      <NavigationMenuLink asChild>
                        <Link
                          className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                          href="/"
                        >
                          <div className="mb-2 mt-4 text-lg font-medium">
                            Catering
                          </div>
                          <p className="text-sm leading-tight text-muted-foreground">
                            An open source e-commerce skateshop build with
                            ecerything new un Next.js.
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <ListItem href="/docs" title="Product">
                      All the product we have to offer.
                    </ListItem>
                    <ListItem href="/docs/installation" title="Build your own">
                      Build your own menu.
                    </ListItem>
                    <ListItem href="/docs/primitives/typography" title="Blog">
                      Read our latest blog posts.
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {products.map((navItem: NavBarProps) => (
                <NavMenuItem  key={navItem.id} item={navItem} />
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <div className="flex items-center gap-4">
          <SearchDialog />
          <Sidebar />
          <ProfileButton />
        </div>
      </div>
    </div>
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
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
