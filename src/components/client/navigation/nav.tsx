'use client'

import { useScroll } from "@/context/ScrollContext";
import NavLink from "./NavLink";

export default function Nav() {
  const {
    topArticle,
    sportArticle,
    ecomicArticle,
    techArticle,
    healthArticle,
    scientArticle,
    scrollIntoView,
  } = useScroll();

  return (
    <nav className="flex items-center gap-6">
      <NavLink name="Trang chủ" onClick={() => scrollIntoView(topArticle)} />
      <NavLink name="Thể thao" onClick={() => scrollIntoView(sportArticle)} />
      <NavLink name="Kinh tế" onClick={() => scrollIntoView(ecomicArticle)} />
      <NavLink name="Công nghệ" onClick={() => scrollIntoView(techArticle)} />
      <NavLink name="Sức khỏe" onClick={() => scrollIntoView(healthArticle)} />
      <NavLink name="Khoa học" onClick={() => scrollIntoView(scientArticle)} />
    </nav>
  );
}
