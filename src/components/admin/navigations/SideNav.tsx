'use client'

import Logo from "@/components/ui/logo";
import {
  LayoutGridCircles,
  UserRound,
  ChartBarStacked,
  Newspaper,
} from "lucide-react";
import NavLink from "./NavLink";
import { usePathname } from "next/navigation";

export default function SideNav() {

  const path = usePathname();

  return (
    <div>
      <div className="ms-1.75">
        <Logo route="/admin/dashboard" />
        <p className="text-gray-500">Trang quản trị</p>
      </div>

      <nav className="mt-3">
        <NavLink
          active={path === "/admin/dashboard"}
          route="/admin/dashboard"
          name="Dashboard"
          icon={<LayoutGridCircles size={14} />}
        />
        <NavLink
          active={path === "/admin/users"}
          route="/admin/users"
          name="Thành viên"
          icon={<UserRound size={14} />}
        />

        <NavLink
          active={path === "/admin/categories"}
          route="/admin/categories"
          name="Danh mục tin tức"
          icon={<ChartBarStacked size={14} />}
        />

        <NavLink
          active={path === "/admin/news"}
          route="/admin/news"
          name="Tin tức"
          icon={<Newspaper size={14} />}
        />
      </nav>
    </div>
  );
}
