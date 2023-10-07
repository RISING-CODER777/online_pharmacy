"use client"; // Add the "use client" directive at the top

import Link from "next/link";
import { useSearchParams } from "next/navigation"; 
import { Edit, ShoppingBag, History } from "lucide-react";
import { useShoppingCart } from "use-shopping-cart";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MainNav } from "@/components/main-nav";
import { ThemeToggle } from "@/components/theme-toggle";

export function SiteHeader() {
  const searchParams = useSearchParams(); 
  const { cartCount } = useShoppingCart(); 
  const defaultSearchQuery = searchParams?.get("search") ?? "";

  function onSubmit(event: React.SyntheticEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const searchQuery = formData.get("search");
    window.location.href = `/?search=${searchQuery}`;
  }

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between space-x-4 px-6 sm:space-x-0">
        <MainNav />
        <form onSubmit={onSubmit} className="hidden items-center lg:inline-flex">
          <Input
            id="search"
            name="search"
            type="search"
            autoComplete="off"
            placeholder="Search products..."
            className="h-9 lg:w-[300px]"
            defaultValue={defaultSearchQuery}
          />
          <button type="submit" className="ml-2 p-2 bg-blue-500 text-white rounded-md">
            Search
          </button>
        </form>
        <div className="flex items-center space-x-1">
          <Link href="/cart">
            <Button size="sm" variant="ghost">
              <ShoppingBag className="h-5 w-5" />
              <span className="ml-2 text-sm font-bold">{cartCount}</span>
              <span className="sr-only">Cart</span>
            </Button>
          </Link>
          <ThemeToggle />
          {process.env.NODE_ENV == "development" && (
            <>
              <Link href='/studio'>
                <Button size="sm" variant="ghost">
                  <Edit className="h-5 w-5" />
                </Button>
              </Link>
              <Link href='/previous-purchase'> 
                <Button size="sm" variant="ghost">
                  <History className="h-5 w-5" />
                </Button>
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
}