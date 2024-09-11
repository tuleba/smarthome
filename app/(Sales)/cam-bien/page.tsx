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
        <title>Cảm biến thông minh FPT Smart Home</title>
        <meta
          name="description"
          content="Các thiết bị Cảm biến FPT Smart Home"
        />
      </Helmet>
      <div className="pt-[120px] max-lg:pt-[70px] max-md:pt-[60px]">
        <div className="bg-[url('/assets/images/product/thumnail/1668574961-cam-bien.jpg')] w-full h-[500px] bg-cover bg-no-repeat bg-center max-md:h-[250px]"></div>
      </div>
      <div className="container  max-lg:px-20 max-md:px-10">
        <div className="text-center flex flex-col py-[100px] max-md:py-[50px]">
          <h4 className="text-h5 text-gray-400 font-semibold max-md:text-[20px]">
            Thiết bị FPT Smart Home
          </h4>
          <h2 className=" text-[48px] text-slate-800 font-semibold max-md:text-[30px]">
            Các thiết bị Cảm biến
          </h2>
        </div>
        <div className="flex items-center justify-center mb-10 gap-4 flex-wrap">
          <div className="flex flex-col items-center w-[230px] h-[355px] rounded-2xl bg-slate-100 pt-10 gap-4 px-4">
            <Image
              src="/assets/images/product/1669193715-1669171553-Cam-Bien-Cua.png"
              width={170}
              height={100}
              alt="Cảm Biến Cửa"
            />
            <h3 className="text-center font-semibold">Cảm Biến Cửa</h3>
            <Button className="w-[129px] h-[28px] border-[1px] border-black rounded-lg bg-slate-100 text-black hover:text-white hover:bg-orange-500 text-[13px]">
              <Link href="/cam-bien/cam-bien-cua">Xem thêm</Link>
            </Button>
          </div>
          <div className="flex flex-col items-center w-[230px] h-[355px] rounded-2xl bg-slate-100 pt-10 gap-4 px-4">
            <Image
              src="/assets/images/product/1669265268-Cam-Bien-Chuyen-Dong1.png"
              width={170}
              height={100}
              alt="Cảm Biến Chuyển Động"
            />
            <h3 className="text-center font-semibold">Cảm Biến Chuyển Động</h3>
            <Button className="w-[129px] h-[28px] border-[1px] border-black rounded-lg bg-slate-100 text-black hover:text-white hover:bg-orange-500 text-[13px]">
              <Link href="/cam-bien/cam-bien-chuyen-dong">Xem thêm</Link>
            </Button>
          </div>
          <div className="flex flex-col items-center w-[230px] h-[355px] rounded-2xl bg-slate-100 pt-10 gap-4 px-4">
            <Image
              src="/assets/images/product/1697613777-Cam-bien-Khoi2.png"
              width={170}
              height={100}
              alt="Cảm Biến Khói"
            />
            <h3 className="text-center font-semibold">Cảm Biến Khói</h3>
            <Button className="w-[129px] h-[28px] border-[1px] border-black rounded-lg bg-slate-100 text-black hover:text-white hover:bg-orange-500 text-[13px]">
              <Link href="/cam-bien/cam-bien-khoi">Xem thêm</Link>
            </Button>
          </div>
          <div className="flex flex-col items-center w-[230px] h-[355px] rounded-2xl bg-slate-100 pt-10 gap-4 px-4">
            <Image
              src="/assets/images/product/1687942243-ava.png"
              width={170}
              height={100}
              alt="Cảm Biến Chuyển Động Âm Trần"
            />
            <h3 className="text-center font-semibold">
              Cảm Biến Chuyển Động Âm Trần
            </h3>
            <Button className="w-[129px] h-[28px] border-[1px] border-black rounded-lg bg-slate-100 text-black hover:text-white hover:bg-orange-500 text-[13px]">
              <Link href="/cam-bien/cam-bien-chuyen-dong-am-tran">
                Xem thêm
              </Link>
            </Button>
          </div>
        </div>
        <div className="text-center flex flex-col items-center p-10 gap-6 max-md:p-0">
          <p className="text-[20px] max-md:text-[15px]">
            Nhận dạng các chuyển động và bất thường xảy ra ngay tại nhà để tự
            điều chỉnh và kịp thời gửi thông báo tới bạn ·
          </p>
          <p className="text-[20px] px-12 max-md:text-[15px]">
            Kết nối cảm biến cửa với thiết bị thông minh khác để khi cửa mở
            chúng sẽ tự hoạt động · Kết nối cảm biến chuyển động với đèn, để khi
            di chuyển đèn sẽ tự sáng hoặc tắt
          </p>
          <div className="p-10 flex items-center justify-center gap-6 border-b-[1px] w-full border-black max-md:px-0">
            <div className="flex flex-col items-center gap-4">
              <Image
                className="max-md:w-[40px] max-md:h-[40px] "
                src="/assets/images/product/icon/1676456837-Group-1073.png"
                width={70}
                height={70}
                alt=" Điều khiển giọng nói"
              />
              <p className="text-[18px] max-md:text-[12px]">
                Điều khiển giọng nói
              </p>
            </div>
            <div className="flex flex-col items-center gap-4">
              <Image
                className="max-md:w-[40px] max-md:h-[40px] "
                src="/assets/images/product/icon/1676456645-Group-1072.png"
                width={70}
                height={70}
                alt="Điều khiển giọng nói"
              />
              <p className="text-[18px]  max-md:text-[12px]">
                Điều khiển giọng nói
              </p>
            </div>
            <div className="flex flex-col items-center gap-4">
              <Image
                className="max-md:w-[40px] max-md:h-[40px] "
                src="/assets/images/product/icon/1676456652-Group-1071.png"
                width={70}
                height={70}
                alt="Kết nối Zigbee"
              />
              <p className="text-[18px]  max-md:text-[12px]">Kết nối Zigbee</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
