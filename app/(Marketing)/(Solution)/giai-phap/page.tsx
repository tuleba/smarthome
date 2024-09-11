import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Solution() {
  return (
    <>
      <div className="container pb-[100px] pt-[170px]">
        <div className="flex flex-col text-center mb-20">
          <h3 className="text-h5 font-semibold  text-gray-400">
            Giải Pháp Nhà Thông Minh
          </h3>
          <h2 className="text-[40px] font-semibold text-gray-800">
            Những giải pháp dành riêng cho bạn
          </h2>
        </div>
        <div className="flex flex-col items-center  justify-between ">
          <Link
            href="/giai-phap/giai-phap-dieu-khien"
            className="flex items-center  gap-[200px]"
          >
            <Image
              src="/assets/images/solution/1693974974-Asset-3.png"
              width={550}
              height={550}
              alt="Giải Pháp Điều Khiển"
            />
            <div className="text-left flex flex-col">
              <h3 className="text-h4 font-semibold mb-4">
                Giải Pháp Điều Khiển
              </h3>
              <p className="text-[15px] ">Tự Động Hoá Ngôi Nhà Theo Ý Bạn</p>
            </div>
          </Link>
          <Link
            href="/giai-phap/giai-phap-chieu-sang"
            className="flex flex-row-reverse items-center  gap-[200px] mt-[-50px] ml-[-100px]"
          >
            <Image
              src="/assets/images/solution/1693974986-Asset-4.png"
              width={550}
              height={550}
              alt="Giải Pháp Chiếu Sáng"
            />
            <div className="text-right flex flex-col">
              <h3 className="text-h4 font-semibold mb-4">
                Giải Pháp Chiếu Sáng
              </h3>
              <p className="text-[15px] ">
                Ánh Sáng Ngôi Nhà Hoà Theo Ngữ Cảnh
              </p>
            </div>
          </Link>
          <Link
            href="/giai-phap/giai-phap-an-ninh"
            className="flex items-center  gap-[200px]  mt-[-50px] mr-[-10px]"
          >
            <Image
              src="/assets/images/solution/1668575279-Group-677.png"
              width={550}
              height={550}
              alt="Giải Pháp An Ninh"
            />
            <div className="text-left flex flex-col">
              <h3 className="text-h4 font-semibold mb-4">Giải Pháp An Ninh</h3>
              <p className="text-[15px] ">An Tâm Mọi Lúc Mọi Nơi</p>
            </div>
          </Link>
          <Link
            href="/giai-phap/giai-phap-truyen-hinh"
            className="flex flex-row-reverse items-center  gap-[200px]  mt-[-50px] ml-[-100px]"
          >
            <Image
              src="/assets/images/solution/1668575336-Group-678.png"
              width={550}
              height={550}
              alt="Giải Pháp Truyền Hình"
            />
            <div className="text-right flex flex-col">
              <h3 className="text-h4 font-semibold mb-4">
                Giải Pháp Truyền Hình
              </h3>
              <p className="text-[15px] ">
                Giải Trí Không Giới Hạn Bằng Giọng Nói Tiếng Việt
              </p>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}
