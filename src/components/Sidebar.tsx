import React from "react";
import { SidebarItem } from ".";
import Image from "next/image";
import Link from "next/link";
import {
  IoAccessibilitySharp,
  IoBasketOutline,
  IoCalendarOutline,
  IoCheckboxOutline,
  IoCodeSlash,
  IoListOutline,
  IoPersonOutline,
} from "react-icons/io5";
import { getServerSession } from "next-auth";
import { LogoutButton } from "./LogoutButton";
import { authOptions } from "@/app/auth/authOptions";

export interface MenuItem {
  path: string;
  title: string;
  icon: React.ReactNode;
}

const menuItems: MenuItem[] = [
  {
    path: "/dashboard",
    title: "Dashboard",
    icon: <IoCalendarOutline size={20} />,
  },
  {
    path: "/dashboard/rest-todos",
    title: "REST TODOs",
    icon: <IoCheckboxOutline size={20} />,
  },
  {
    path: "/dashboard/server-actions",
    title: "Server Actions",
    icon: <IoListOutline size={20} />,
  },
  {
    path: "/dashboard/cookies",
    title: "Cookies Page",
    icon: <IoCodeSlash size={20} />,
  },
  {
    path: "/dashboard/products",
    title: "Products Page",
    icon: <IoBasketOutline size={20} />,
  },
  {
    path: "/dashboard/profile",
    title: "User Profile",
    icon: <IoPersonOutline size={20} />,
  },
];

export const Sidebar = async () => {
  const session = await getServerSession(authOptions);
  return (
    <aside className="ml-[-100%] fixed z-10 top-0 pb-3 px-6 w-full flex flex-col justify-between h-screen border-r bg-white transition duration-300 md:w-4/12 lg:ml-0 lg:w-[25%] xl:w-[20%] 2xl:w-[15%]">
      <div>
        <div className="-mx-6 px-6 py-4">
          <Link href="/dashboard" title="home">
            <Image
              src="https://tailus.io/sources/blocks/stats-cards/preview/images/logo.svg"
              className="w-32"
              width={100}
              height={100}
              alt="tailus logo"
            />
          </Link>
        </div>

        <div className="mt-8 text-center">
          <Image
            src={
              session?.user?.image ??
              "https://tailus.io/sources/blocks/stats-cards/preview/images/second_user.webp"
            }
            alt=""
            width={50}
            height={50}
            className="w-10 h-10 m-auto rounded-full object-cover lg:w-28 lg:h-28"
          />
          <h5 className="hidden mt-4 text-xl font-semibold text-gray-600 lg:block">
            {session?.user?.name ?? "usuario"}
          </h5>
          <span className="hidden text-gray-400 lg:block">
            {session?.user?.roles?.join(" ")}
          </span>
        </div>

        <ul className="space-y-2 tracking-wide mt-8">
          {menuItems.map((item) => (
            <SidebarItem key={item.path} {...item} />
          ))}
        </ul>
      </div>

      <div className="px-6 -mx-6 pt-4 flex justify-between items-center border-t">
        <LogoutButton />
      </div>
    </aside>
  );
};
