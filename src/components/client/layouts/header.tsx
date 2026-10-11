"use client";

import { Button } from "@/components/ui/button";
import Nav from "../navigation/nav";
import Logo from "@/components/ui/logo";
import { ArrowUpRight } from "lucide-react";
import { useBlurHeader } from "@/hooks/use-blurHeader";

type HeaderProps = {
  className?: string;
};

export default function Header({ className }: HeaderProps) {
  const { visibleStickyHeader } = useBlurHeader();

  return (
    <header
      className={`fixed top-0 ${visibleStickyHeader ? "bg-black/15 backdrop-blur-sm" : "bg-white"} left-0 w-full z-50 py-5 font-medium tracking-tight transition-all duration-250 ease-in-out ${className}`}
    >
      <div className="max-w-7xl w-full mx-auto flex items-center justify-between ">
        <div className="flex items-center gap-10">
          <Logo />
          <Nav />
        </div>

        <div className="flex gap-2 items-center">
          <Button variant="link">
            <span>Đăng ký theo dõi</span>
            <ArrowUpRight size={15} />
          </Button>

          <Button>
            <span>Đăng nhập</span>
          </Button>
        </div>
      </div>
    </header>
  );
}
