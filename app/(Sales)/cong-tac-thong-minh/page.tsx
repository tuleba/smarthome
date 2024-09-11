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
        <title>Công tắc thông minh FPT Smart Home</title>
        <meta
          name="description"
          content="Công tắc điều khiển cảm ứng không dây"
        />
      </Helmet>
      <div className="pt-[120px] max-lg:pt-[70px] max-md:pt-[60px]">
        <div className="bg-[url('/assets/images/product/thumnail/1668574989-Group-211.jpg')] w-full h-[500px] bg-cover bg-no-repeat bg-center max-md:h-[250px]"></div>
      </div>
      <div className="container  max-lg:px-20 max-md:px-10">
        <div className="text-center flex flex-col py-[100px] max-md:py-[50px]">
          <h4 className="text-h5 text-gray-400 font-semibold max-md:text-[20px]">
            Thiết bị FPT Smart Home
          </h4>
          <h2 className=" text-[48px] text-slate-800 font-semibold max-md:text-[30px]">
            Các thiết bị Công tắc thông minh
          </h2>
        </div>
        <div className="flex items-center justify-center mb-10 gap-6 max-md:flex-wrap">
          <div className="flex flex-col items-center w-[230px] h-[355px] rounded-2xl bg-slate-100 pt-10 gap-4 px-4">
            <Image
              src="/assets/images/product/1693886144-CTCU-Athena-Vuong9.png"
              width={170}
              height={100}
              alt="Công Tắc Cảm Ứng Athena"
            />
            <h3 className="text-center font-semibold">
              Công Tắc Cảm Ứng Athena
            </h3>
            <Button className="w-[129px] h-[28px] border-[1px] border-black rounded-lg bg-slate-100 text-black hover:text-white hover:bg-orange-500 text-[13px]">
              <Link href="/cong-tac-thong-minh/cong-tac-cam-ung-athena">
                Xem thêm
              </Link>
            </Button>
          </div>
          <div className="flex flex-col items-center w-[230px] h-[355px] rounded-2xl bg-slate-100 pt-10 gap-4 px-4">
            <Image
              src="/assets/images/product/1692089592-Nut-Bam-ngu-canh-2.png"
              width={170}
              height={100}
              alt="Công Tắc Cảm Ứng Athena"
            />
            <h3 className="text-center font-semibold">
              Nút Bấm Ngữ Cảnh Không Dây
            </h3>
            <Button className="w-[129px] h-[28px] border-[1px] border-black rounded-lg bg-slate-100 text-black hover:text-white hover:bg-orange-500 text-[13px]">
              <Link href="/cong-tac-thong-minh/nut-bam-ngu-canh-khong-day">
                Xem thêm
              </Link>
            </Button>
          </div>
          <div className="flex flex-col items-center w-[230px] h-[355px] rounded-2xl bg-slate-100 pt-10 gap-4 px-4">
            <Image
              src="/assets/images/product/1672037200-Black-Brown-4-Nut-vuong-ava.png"
              width={170}
              height={100}
              alt="Công Tắc Cảm Ứng Athena vuông 4 nút"
            />
            <h3 className="text-center font-semibold">
              Công Tắc Cảm Ứng Thông Minh Hera
            </h3>
            <Button className="w-[129px] h-[28px] border-[1px] border-black rounded-lg bg-slate-100 text-black hover:text-white hover:bg-orange-500 text-[13px]">
              <Link href="/cong-tac-thong-minh/cong-tac-cam-ung-hera">
                Xem thêm
              </Link>
            </Button>
          </div>
          <div className="flex flex-col items-center w-[230px] h-[355px] rounded-2xl bg-slate-100 pt-10 gap-4 px-4">
            <Image
              src="/assets/images/product/1704445993-Vuong-Den-Rem.png"
              width={170}
              height={100}
              alt="Công Tắc Cảm Ứng Athena đen"
            />
            <h3 className="text-center font-semibold">
              Công Tắc Cửa Cuốn Thông Minh Athena
            </h3>
            <Button className="w-[129px] h-[28px] border-[1px] border-black rounded-lg bg-slate-100 text-black hover:text-white hover:bg-orange-500 text-[13px]">
              <Link href="/cong-tac-thong-minh/cong-tac-cua-cuon-thong-minh-athena">
                Xem thêm
              </Link>
            </Button>
          </div>
        </div>
        <div className="text-center flex flex-col items-center p-10 gap-6 max-md:px-0">
          <p className="text-[20px] max-md:text-[12px]">
            Công tắc thông minh FPT Smart Home với tính năng cảm ứng hoặc nút
            bấm với độ bền cao, thiết kế sang trọng mang lại cảm giác mới mẻ
            trong mỗi lần chạm
          </p>
          <p className="text-[20px] px-12 max-md:text-[12px]">
            Điều khiển bật tắt bằng giọng nói
          </p>
          <p className="text-[20px] px-12 max-md:text-[12px]">
            Kết nối được thông qua Bluetooth hoặc ZigBee
          </p>
          <p className="text-[20px] px-12 max-md:text-[12px]">
            Số lượng nút từ 1 đến 6 nút tuỳ theo nhu cầu sử dụng
          </p>
          <div className="p-10 flex items-center justify-center gap-6 border-b-[1px] w-full border-black max-md:px-0">
            <div className="flex flex-col items-center gap-4">
              <Image
                className="max-md:w-[40px] max-md:h-[40px]"
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
                className="max-md:w-[40px] max-md:h-[40px]"
                src="/assets/images/product/icon/1676456645-Group-1072.png"
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
                className="max-md:w-[40px] max-md:h-[40px]"
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
