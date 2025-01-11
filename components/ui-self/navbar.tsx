import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { AlignJustify, ChevronDown } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

interface MenuItem {
  name: string;
  url: string;
}

interface MenuEntry {
  name: string;
  url?: string;
  dropdown?: boolean;
  items?: MenuItem[];
}

const menuConfig: MenuEntry[] = [
  {
    name: "Home",
    url: "/",
    dropdown: false,
  },
  {
    name: "About",
    dropdown: true,
    items: [
      { name: "Sonbeel: The Treasure", url: "/about/sonbeel" },
      { name: "Assam University", url: "/about/aus" },
    ],
  },
  // {
  //   name: "Message",
  //   dropdown: true,
  //   items: [
  //     { name: "VC's message", url: "/message#vc" },
  //     { name: "Director's message", url: "/message#director" },
  //     { name: "Registrar's message", url: "/message#registrar" },
  //     { name: "Convener's message", url: "/message#convener" },
  //     { name: "News & Info ", url:"/news"},
  //   ],
  // },
  // {
  //   name: "Committee",
  //   dropdown: true,
  //   items: [
  //     { name: "Organising Core Committee", url: "/committee#corecommittee" },
  //     { name: "Organising Sub Committee", url: "/committee#subcommittee" },
  //     { name: "Task Force", url: "/committee#taskforce" },
  //   ],
  // },
  {
    name: "Sonbeel Utsav",
    url: "/about/sonbeelutsav",
    dropdown: false,
  },
  // {
  //   name: "News & Info",
  //   url: "/news",
  //   dropdown: false,
  // },
  {
    name: "Events",
    dropdown: true,
    items: [
      { name: "Photography Contest", url: "/contest/photography" },
      { name: "Folk Song and Folk Dance Contest", url: "/contest/folk" },
      { name: "Art Contest", url: "/contest/art" },
      { name: "Sonbeel Utsav 2024", url: "https://www.sonbeelutsav.in/" },
    ],
  },
  {
    name: "Gallery",
    url: "/gallery",
    dropdown: false,
  },
  {
    name: "Home Stay",
    dropdown: true,
    items: [
      { name: "SHREYANSH HOMESTAY", url: "/homestay/homestay1" },
      // { name: "Homestay 2", url: "/homestay/homestay2" },
    ],
  },
  {
    name: "Contact",
    url: "/contact",
    dropdown: false,
  },
];

const DropdownLink = ({ name, url }: MenuItem) => (
  <DropdownMenuItem>
    <Link href={url}>{name}</Link>
  </DropdownMenuItem>
);

export function Navbar() {
  return (
    <div className="sticky top-0 z-10 flex items-center justify-between rounded-sm bg-white/40 px-5 py-5 shadow-md backdrop-blur-lg md:px-10">
      <Link className="flex items-center gap-5 md:gap-6" href="/">
        <Image
          src="/images/son-beel-utsav-logo.png"
          alt="logo"
          width={200}
          height={200}
          className="w-14 cursor-pointer"
        />
        <Image
          src="/images/sonbeel-utsav-2024-logo.jpeg"
          alt="logo"
          width={2000}
          height={2000}
          className="hidden w-[20rem] cursor-pointer rounded-xl 2xl:inline"
        />
      </Link>
      <div className="hidden gap-10 xl:flex">
        {menuConfig.map((menu) => (
          <DropdownMenu key={menu.name}>
            <DropdownMenuTrigger
              className={`flex items-center gap-1 ${menu.dropdown ? "" : ""}`}
            >
              {menu.dropdown ? (
                <>
                  {menu.name}
                  <ChevronDown size={20} />
                </>
              ) : menu.url ? (
                <Link
                  href={menu.url || "#"}
                  target={
                    menu.url.split(".").pop() === "pdf" ? "_blank" : "_self"
                  }
                >
                  {menu.name}
                </Link>
              ) : (
                <></>
              )}
            </DropdownMenuTrigger>
            {menu.dropdown && menu.items && (
              <DropdownMenuContent>
                {menu.items.map((item) => (
                  <Link key={item.name} href={item.url}>
                    <DropdownLink name={item.name} url={item.url} />
                  </Link>
                ))}
              </DropdownMenuContent>
            )}
          </DropdownMenu>
        ))}
      </div>
      
      <div className="flex xl:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <AlignJustify className="cursor-pointer" />
          </SheetTrigger>
          <SheetContent>
            <ul>
              {menuConfig.map((item) => {
                if (!item.items)
                  return (
                    item.url && (
                      <Link key={item.name} href={item.url}>
                        <SheetTitle>{item.name}</SheetTitle>
                      </Link>
                    )
                  );

                return (
                  <Collapsible key={item.name}>
                    <CollapsibleTrigger className="flex items-center text-lg font-semibold text-foreground ">
                      {item.name} <ChevronDown size={15} />
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                      <ul className="pl-5">
                        {item.items.map((item) => {
                          return (
                            <Link key={item.name} href={item.url}>
                              <li className="hover:text-primary">
                                {item.name}
                              </li>
                            </Link>
                          );
                        })}
                      </ul>
                    </CollapsibleContent>
                  </Collapsible>
                );
              })}
            </ul>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
}
