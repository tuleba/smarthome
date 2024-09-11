import Image from "next/image";
import React from "react";
import { Metadata } from "next";
import Link from "next/link";
export const metadata: Metadata = {
  title: "Sản phầm",
  description: "Sản phầm thông minh của FPT Smart Home",
};
export default function Product() {
  return (
    <div className="container pb-[80px] pt-[170px] max-lg:pt-[150px] max-md:pt-[100px]">
      <div className="flex flex-col text-center">
        <h3 className="text-h5 font-medium text-gray-500 mb-2">
          Thiết bị thông minh
        </h3>
        <h1 className="text-h3 text-slate-700 font-bold">
          Các thiết bị thông minh của FPT Smart Home
        </h1>
      </div>
      <div className="flex items-center justify-around gap-10 pt-10">
        <Link href="/bo-dieu-khien" className="max-w-[420px]">
          <h3 className="text-h5 font-bold mb-4">Bộ điều khiển trung tâm</h3>
          <p>
            Bộ điều khiển trung tâm | Sử dụng giọng nói | Có thể điều khiển qua
            App
          </p>
        </Link>
        <Link href="/bo-dieu-khien">
          <Image
            src="/assets/images/product/bo-dieu-khien-trung-tam.png"
            width={600}
            height={600}
            alt="Bộ điều khiển trung tâm fpt smart home"
          />
        </Link>
      </div>
      <div className="flex items-center justify-around gap-10 pt-10">
        <Link href="/den-thong-minh">
          <Image
            src="/assets/images/product/1692088715-Light-Led-Bulb.png"
            width={450}
            height={450}
            alt="đèn led bulb fpt smart home"
          />
        </Link>
        <Link href="/den-thong-minh" className="max-w-[420px]">
          <h3 className="text-h5 font-bold mb-4">Đèn thông minh</h3>
          <p>
            Hơn 15 triệu màu sắc khác nhau | Điều khiển bằng giọng nói, qua App
            | Giao thức Bluetooth, ZigBee
          </p>
        </Link>
      </div>
      <div className="flex items-center justify-around gap-10 pt-10">
        <Link href="/cam-bien" className="max-w-[420px]">
          <h3 className="text-h5 font-bold mb-4">Cảm biến</h3>
          <p>
            Nhận dạng chuyển động | Cảnh báo bất thường | Giao thức Bluetooth
            Mesh, ZigBee
          </p>
        </Link>
        <Link href="/cam-bien">
          {" "}
          <Image
            src="/assets/images/product/1692090463-Cam-bien-chuyen-dong.png"
            width={450}
            height={450}
            alt="cảm biến chuyển động fpt smart home"
          />
        </Link>
      </div>
      <div className="flex items-center justify-around gap-10 pt-10">
        <Link href="/cong-tac-thong-minh">
          <Image
            src="/assets/images/product/1692151116-cong-tac-thong-minh-page-thiet-bi.png"
            width={450}
            height={450}
            alt="công tắc thông minh fpt smart home"
          />
        </Link>

        <Link href="/cong-tac-thong-minh" className="max-w-[420px]">
          <h3 className="text-h5 font-bold mb-4">Công tắc thông minh</h3>
          <p>
            Kiểu dáng tinh tế | Độ bền cao | Thiết lập theo ngữ cảnh tùy thích
          </p>
        </Link>
      </div>
      <div className="flex items-center justify-around gap-10 pt-10">
        <Link href="/bo-rem-cua" className="max-w-[420px]">
          <h3 className="text-h5 font-bold mb-4">Bộ rèm cửa</h3>
          <p>
            Điều khiển bằng giọng nói, qua App | Cài đặt theo khung giờ tùy chọn
          </p>
        </Link>
        <Link href="/bo-rem-cua">
          {" "}
          <Image
            src="/assets/images/product/1692088539-Bo-Dieu-Khien-Rem.png"
            width={450}
            height={450}
            alt="bộ điều khiển rèm cửa fpt smart home"
          />
        </Link>
      </div>
      <div className="flex items-center justify-around gap-10 pt-10">
        <Link href="/phu-kien">
          {" "}
          <Image
            src="/assets/images/product/1692151096-o-cam-thong-minh-page-thiet-bi.png"
            width={450}
            height={450}
            alt="ổ cắm thông minh fpt smart home"
          />
        </Link>

        <Link href="/phu-kien" className="max-w-[420px]">
          <h3 className="text-h5 font-bold mb-4">Phụ kiện</h3>
          <p>
            Đóng, mở nguồn điện qua giọng nói | Thiết lập các ngữ cảnh yêu thích
          </p>
        </Link>
      </div>
      <div className="flex items-center justify-around gap-10 pt-10">
        <Link href="/thiet-bi-an-ninh-thong-minh" className="max-w-[420px]">
          <h3 className="text-h5 font-bold mb-4">
            Thiết bị an ninh thông minh
          </h3>
          <p>
            An toàn và bảo mật dữ liệu | Cảnh báo thông minh | Hình ảnh sắc nét,
            trung thực
          </p>
        </Link>
        <Link href="/thiet-bi-an-ninh-thong-minh">
          {" "}
          <Image
            src="/assets/images/product/1692088779-Camera-SE.png"
            width={450}
            height={450}
            alt="Camera an ninh fpt smart home"
          />
        </Link>
      </div>
      <div className="flex items-center justify-around gap-10 pt-10">
        <Link href="/khoa-cua-thong-minh">
          {" "}
          <Image
            src="/assets/images/product/1692088791-Khoa-YAle.png"
            width={450}
            height={450}
            alt="khoá cửa thông minh fpt smart home"
          />
        </Link>

        <Link href="/khoa-cua-thong-minh" className="max-w-[420px]">
          <h3 className="text-h5 font-bold mb-4">Khóa cửa thông minh</h3>
          <p>
            Mở khoá bằng vân tay, mật mã, thẻ từ, chìa cơ | Độ bảo mật cao | Kết
            nối mở rộng Zigbee
          </p>
        </Link>
      </div>
    </div>
  );
}
