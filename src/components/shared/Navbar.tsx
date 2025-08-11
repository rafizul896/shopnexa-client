"use client";
import { Button } from "../ui/button";
import { Heart, LogOut, ShoppingBag } from "lucide-react";
import Logo from "@assets/shop-nexa.png";
import Image from "next/image";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { logout } from "@/services/Auth";
import { useUser } from "@/context/UserContext";
import { usePathname, useRouter } from "next/navigation";
import { protedRoutes } from "@/constants";

export default function Navbar() {
  const pathName = usePathname();
  const router = useRouter();
  const { user, setIsloading } = useUser();

  const handleLogOut = () => {
    logout();
    setIsloading(true);

    if (protedRoutes.some((route) => pathName.match(route))) {
      router.push("/");
    }
  };

  return (
    <header className="border-b bg-background w-full sticky top-0 z-10">
      <div className="container flex gap-2 justify-between items-center mx-auto h-16 px-3">
        <Image className="w-full max-w-[160px] h-auto" src={Logo} alt="Logo" />

        <div className="max-w-md flex-grow hidden md:block">
          <input
            type="text"
            placeholder="Search for products"
            className="w-full max-w-6xl border border-gray-300 rounded-full py-2 px-5"
          />
        </div>
        <nav className="flex gap-2">
          <Button
            variant="outline"
            className="rounded-full p-0 size-10 hidden md:block"
          >
            <Heart />
          </Button>
          <Button variant="outline" className="rounded-full p-0 size-10">
            <ShoppingBag />
          </Button>
          {!user ? (
            <Link href={"/login"}>
              <Button className="rounded-full cursor-pointer" variant="outline">
                Login
              </Button>
            </Link>
          ) : (
            <>
              {!user?.hasShop && (
                <Link href={"/create-shop"}>
                  <Button className="rounded-full cursor-pointer">
                    Create Shop
                  </Button>
                </Link>
              )}

              <DropdownMenu>
                <DropdownMenuTrigger>
                  <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>User</AvatarFallback>
                  </Avatar>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Profile</DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link href={`${user?.role}/dashboard`}>Dashboard</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>My Shop</DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem
                    className="bg-red-500 text-white cursor-pointer"
                    onClick={handleLogOut}
                  >
                    <LogOut />
                    <span>Log Out</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </>
          )}
        </nav>
      </div>
    </header>
  );
}
