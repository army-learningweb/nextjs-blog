"use client";

import { usePagination } from "@/hooks/use-pagination";
import Link from "next/link";

export default function UserPagination({ total }: { total: number }) {
  const { linkPagging, disableNextPage, disablePrevPage, path, page } =
    usePagination(total);

  return (
    <div className="flex items-center gap-2 justify-end">
      <Link
        href={`${path}?page=${page - 1}`}
        className={`${disablePrevPage ? "opacity-50 pointer-events-none" : ""}`}
      >
        Trang trước
      </Link>

      {linkPagging.map((item) => (
        <Link
          key={item}
          href={`${path}?page=${item}`}
          className={`${page == item ? "border" : ""} w-8 h-8 rounded-lg flex items-center justify-center hover:bg-gray-100`}
        >
          {item}
        </Link>
      ))}

      <Link
        href={`${path}?page=${page + 1}`}
        className={`${disableNextPage ? "opacity-50 pointer-events-none" : ""}`}
      >
        Trang sau
      </Link>
    </div>
  );
}
