import { Tooltip } from "@nextui-org/react";
import Link from "next/link";
import React from "react";
import { RiCustomerService2Line } from "react-icons/ri";

export default function Connect() {
  return (
    <div className="fixed z-50 bottom-16 left-[-35px] ">
      <Link
        href="/bao-gia"
        className="bg-red-500 w-[100px] h-10 flex items-center justify-center rotate-[-90deg] text-white text-[18px]  cursor-pointer hover:scale-110 transition-all duration-300 ease-in-out rounded-lg"
      >
        Báo giá
      </Link>
    </div>
  );
}
