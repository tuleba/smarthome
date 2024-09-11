import Link from "next/link";
import React from "react";

export default function Support() {
  return (
    <div className="absolute top-[41px]  z-10 bg-slate-100 rounded-lg ">
      <div className="flex flex-col  items-start justify-center px-4 py-6 text-[16px] gap-2 font-medium">
        <Link
          className="border-b border-slate-500 py-[2px] hover:text-orange-500 hover:border-orange-500"
          href="/ho-tro/lien-he-truc-tiep"
        >
          Liên hệ trực tiếp
        </Link>
        <Link
          className="border-b border-slate-500 py-[2px] hover:text-orange-500 hover:border-orange-500"
          href="/ho-tro/doi-tac"
        >
          Đối tác
        </Link>

        <Link
          className="border-b border-slate-500 py-[2px] hover:text-orange-500 hover:border-orange-500"
          href="/ho-tro/brandshop"
        >
          BrandShop
        </Link>
      </div>
    </div>
  );
}
