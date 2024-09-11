"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React, { useRef, useState } from "react";
import { Helmet } from "react-helmet";

export default function Page() {
  return (
    <div>
      <Helmet>
        <title>Bộ điều khiển trung tâm</title>
        <meta
          name="description"
          content="Bộ điều khiển trung tâm FPT Play Box S"
        />
      </Helmet>
      <div>
        <div className="bg-[url('/assets/images/product/thumnail/1686639474-TrangChuWebsite-box1920x680-copy-1.jpg')] w-full h-[500px] bg-cover bg-no-repeat bg-center max-md:h-[250px]"></div>
      </div>
      <div className="container  max-lg:px-20 max-md:px-10">
        <div className="text-center flex flex-col py-[100px] max-md:py-12">
          <h4 className="text-h5 text-gray-400 font-semibold max-md:text-[20px]">
            Thiết bị FPT Smart Home
          </h4>
          <h2 className=" text-[48px] text-slate-800 font-semibold max-md:text-[30px]">
            Bộ điều khiển trung tâm FPT Play Box S
          </h2>
        </div>
        <div className="flex items-center justify-center mb-10 gap-6">
          <div className="flex flex-col items-center w-[230px] h-[355px] rounded-2xl bg-slate-100 pt-10 gap-4 px-4">
            <Image
              src="/assets/images/product/bo-dieu-khien-trung-tam.png"
              width={170}
              height={100}
              alt="Bộ điều khiển trung tâm FPT Play Box S"
            />
            <h3 className="text-center font-semibold">FPT Play Box S</h3>
            <Button className="w-[129px] h-[28px] border-[1px] border-black rounded-lg bg-slate-100 text-black hover:text-white hover:bg-orange-500 text-[13px]">
              <Link href="/bo-dieu-khien/fpt-play-box">Xem thêm</Link>
            </Button>
          </div>
        </div>
        <div className="text-center flex flex-col items-center p-10 gap-6 max-md:p-0">
          <div className="p-10 flex items-center justify-center gap-6  w-full ">
            <div className="flex flex-col items-center gap-4 ">
              <Image
                className="w-[70px] h-[70px] max-md:w-[40px] max-md:h-[40px]"
                src="/assets/images/product/icon/1676456837-Group-1073.png"
                width={70}
                height={70}
                alt="Điều khiển giọng nói"
              />
              <p className="text-[18px] max-md:text-[12px]">
                Điều khiển giọng nói
              </p>
            </div>
            <div className="flex flex-col items-center gap-4">
              <Image
                className="w-[70px] h-[70px] max-md:w-[40px] max-md:h-[40px]"
                src="/assets/images/product/icon/1676456645-Group-1072.png"
                width={70}
                height={70}
                alt="Điều khiển giọng nói"
              />
              <p className="text-[18px] max-md:text-[12px]">
                Điều khiển giọng nói
              </p>
            </div>
            <div className="flex flex-col items-center gap-4">
              <Image
                className="w-[70px] h-[70px] max-md:w-[40px] max-md:h-[40px]"
                src="/assets/images/product/icon/1676456652-Group-1071.png"
                width={70}
                height={70}
                alt="Kết nối Zigbee"
              />
              <p className="text-[18px] max-md:text-[12px]">Kết nối Zigbee</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
