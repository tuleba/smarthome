"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React, { useRef, useState } from "react";
import { Helmet } from "react-helmet";

export default function Page() {
  return (
    <>
      <Helmet>
        <title>Thiết bị an ninh thông minh</title>
        <meta
          name="description"
          content="Thiết bị giám sát an ninh Thông Minh FPT Smart Home"
        />
      </Helmet>
      <div className="pt-[120px] max-lg:pt-[70px] max-md:pt-[60px]">
        <div className="bg-[url('/assets/images/product/thumnail/1668575026-an-ninh.jpg')] w-full h-[500px] bg-cover bg-no-repeat bg-center max-md:h-[250px]"></div>
      </div>
      <div className="container  max-lg:px-20 max-md:px-10">
        <div className="text-center flex flex-col py-[100px] max-md:py-[50px]">
          <h4 className="text-h5 text-gray-400 font-semibold max-md:text-[20px]">
            Thiết bị FPT Smart Home
          </h4>
          <h2 className=" text-[48px] text-slate-800 font-semibold max-md:text-[30px]">
            Camera an ninh thông minh FPT
          </h2>
        </div>
        <div className="flex items-center justify-center mb-10 gap-6">
          <div className="flex flex-col items-center w-[230px] h-[355px] rounded-2xl bg-slate-100 pt-10 gap-4 px-4">
            <Image
              src="/assets/images/product/1684224845-cam-SE-x-XM.1.png"
              width={170}
              height={100}
              alt="Thiết bị an ninh thông minh Camera SE FPT"
            />
            <h3 className="text-center font-semibold">Camera SE FPT</h3>
            <Button className="w-[129px] h-[28px] border-[1px] border-black rounded-lg bg-slate-100 text-black hover:text-white hover:bg-orange-500 text-[13px]">
              <Link href="/thiet-bi-an-ninh-thong-minh/camera-se-fpt">
                Xem thêm
              </Link>
            </Button>
          </div>
        </div>
        <div className="text-center flex flex-col items-center p-10 gap-6 max-md:p-0 max-md:gap-2 max-md:pb-[50px]">
          <p className="text-[20px] max-md:text-[15px]">
            Thiết bị an ninh thông minh FPT Smart Home với hệ thống camera giám
            sát - Bảo vệ an ninh mọi gia đình - Giúp bạn an theo dõi mọi nơi, an
            tâm mọi lúc
          </p>
          <p className="text-[20px] px-20 max-md:px-12 max-md:text-[15px]">
            An toàn và bảo mật dữ liệu
          </p>
          <p className="text-[20px] max-md:px-12 max-md:text-[15px]">
            Cảnh báo thông minh
          </p>
          <p className="text-[20px] max-md:px-12 max-md:text-[15px]">
            Hình ảnh sắc nét, trung thực
          </p>
        </div>
      </div>
    </>
  );
}
