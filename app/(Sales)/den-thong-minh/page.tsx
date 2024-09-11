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
        <title>Đèn thông minh</title>
        <meta name="description" content="Đèn thông minh tại FPT Smart Home" />
      </Helmet>
      <div className="pt-[120px] max-lg:pt-[70px] max-md:pt-[60px]">
        <div className="bg-[url('/assets/images/product/thumnail/1668574949-den.jpg')] w-full h-[500px] bg-cover bg-no-repeat bg-center max-md:h-[250px]"></div>
      </div>
      <div className="container  max-lg:px-20 max-md:px-0">
        <div className="text-center flex flex-col py-[100px] max-md:py-[50px]">
          <h4 className="text-h5 text-gray-400 font-semibold max-md:text-[20px]">
            Thiết bị FPT Smart Home
          </h4>
          <h2 className=" text-[48px] text-slate-800 font-semibold max-md:text-[30px]">
            Đèn thông minh tại FPT Smart Home
          </h2>
        </div>
        <div className="flex items-center justify-center mb-10 gap-4 flex-wrap">
          <div className="flex flex-col items-center w-[230px] h-[355px] rounded-2xl bg-slate-100 pt-10 gap-4 px-4">
            <Image
              src="/assets/images/product/1669265012-Led-2.png"
              width={170}
              height={100}
              alt="Đèn thông minh tại FPT Smart Home"
            />
            <h3 className="text-center font-semibold">
              Đèn LED Downlight Thông Minh
            </h3>
            <Button className="w-[129px] h-[28px] border-[1px] border-black rounded-lg bg-slate-100 text-black hover:text-white hover:bg-orange-500 text-[13px]">
              <Link href="/den-thong-minh/den-led-downlight">Xem thêm</Link>
            </Button>
          </div>
          <div className="flex flex-col items-center w-[230px] h-[355px] rounded-2xl bg-slate-100 pt-10 gap-4 px-4">
            <Image
              src="/assets/images/product/1692088715-Light-Led-Bulb.png"
              width={170}
              height={100}
              alt="Đèn LED Buld Thông Minh"
            />
            <h3 className="text-center font-semibold">
              Đèn LED Buld Thông Minh
            </h3>
            <Button className="w-[129px] h-[28px] border-[1px] border-black rounded-lg bg-slate-100 text-black hover:text-white hover:bg-orange-500 text-[13px]">
              <Link href="/den-thong-minh/den-led-bulb">Xem thêm</Link>
            </Button>
          </div>
          <div className="flex flex-col items-center w-[230px] h-[355px] rounded-2xl bg-slate-100 pt-10 gap-4 px-4">
            <Image
              src="/assets/images/product/1668509256-PTS-LED-Panel-vuong-2.png"
              width={170}
              height={100}
              alt="Đèn LED Panel Thông Minh"
            />
            <h3 className="text-center font-semibold">
              Đèn LED Panel Thông Minh
            </h3>
            <Button className="w-[129px] h-[28px] border-[1px] border-black rounded-lg bg-slate-100 text-black hover:text-white hover:bg-orange-500 text-[13px]">
              <Link href="/den-thong-minh/den-led-panel">Xem thêm</Link>
            </Button>
          </div>
          <div className="flex flex-col items-center w-[230px] h-[355px] rounded-2xl bg-slate-100 pt-10 gap-4 px-4">
            <Image
              src="/assets/images/product/1669265318-PTS-LightStrip-2.png"
              width={170}
              height={100}
              alt="Đèn LED Dây Thông Minh"
            />
            <h3 className="text-center font-semibold">
              Đèn LED Dây Thông Minh
            </h3>
            <Button className="w-[129px] h-[28px] border-[1px] border-black rounded-lg bg-slate-100 text-black hover:text-white hover:bg-orange-500 text-[13px]">
              <Link href="/den-thong-minh/den-led-day">Xem thêm</Link>
            </Button>
          </div>
          <div className="flex flex-col items-center w-[230px] h-[355px] rounded-2xl bg-slate-100 pt-10 gap-4 px-4">
            <Image
              src="/assets/images/product/1669265162-PTS-LED-tracklight-trang-.png"
              width={170}
              height={100}
              alt="Đèn LED Tracklight Thông Minh"
            />
            <h3 className="text-center font-semibold">
              Đèn LED Tracklight Thông Minh
            </h3>
            <Button className="w-[129px] h-[28px] border-[1px] border-black rounded-lg bg-slate-100 text-black hover:text-white hover:bg-orange-500 text-[13px]">
              <Link href="/den-thong-minh/den-led-tracklight">Xem thêm</Link>
            </Button>
          </div>
        </div>
        <div className="text-center flex flex-col items-center p-10 gap-6 max-md:py-0">
          <p className=" text-[20px] max-md:text-[12px]">
            Đèn thông minh FPT Smart Home - Đèn Led thông minh tự động đổi màu
            theo thời gian. Kết nối Bluetooth Mesh dễ dàng tắt bật từ xa, lắp
            đặt dễ dàng. Mua ngay!
          </p>
          <p className=" text-[20px] max-md:text-[12px]">
            Đèn thông minh FPT Smart Home thiết kế hiện đại, tuổi thọ cao đến
            30.000 giờ. Trang bị Bluetooth Mesh kết nối với Smartphone, bộ điều
            khiển trung tâm. Hệ thống đèn thông minh FPT Smart Home sẽ mang tới
            một không gian sôi động hay thư giãn tuỳ thuộc vào ngữ cảnh mà bạn
            mong muốn.
          </p>
          <p className=" text-[20px] max-md:text-[12px]">
            Đèn Led thông minh với khả năng điều khiển bằng giọng nói Tiếng
            Việt, cùng với đó là thiết lập thời gian, ngữ cảnh yêu thích. Ngoài
            ra còn có thể tùy chỉnh cường độ hay màu sắc ánh sáng theo tâm trạng
            của bạn.
          </p>
          <p className=" text-[20px] max-md:text-[12px]">
            Hoàn toàn có thể điều khiển bằng giọng nói hay qua app · Kho màu sắc
            “khổng lồ” để có thể tuỳ chỉnh mọi lúc
          </p>
          <div className="p-10 flex items-center justify-center gap-6 border-b-[1px] w-full border-black max-md:px-0">
            <div className="flex flex-col items-center gap-4  ">
              <Image
                className="max-md:w-[40px] max-md:h-[40px]"
                src="/assets/images/product/icon/1676456837-Group-1073.png"
                width={70}
                height={70}
                alt="Điều khiển giọng nói"
              />
              <p className="text-[18px] max-md:text-[13px]">
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
              <p className="text-[18px] max-md:text-[13px]">
                Điều khiển giọng nói
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className="text-center flex flex-col py-[30px] mb-10 max-md:mb-0 ">
            <h4 className="text-h5 text-gray-400 font-semibold max-md:text-[20px]">
              Sản phẩm nhà thông minh
            </h4>
            <h2 className=" text-[48px] text-slate-800 font-semibold max-md:text-[35px]">
              Kiến thức về sản phẩm
            </h2>
          </div>
          <div className="flex flex-col items-start gap-4 pb-[100px] max-md:px-4">
            <h1 className="text-[26px] font-semibold max-md:text-[18px]">
              Đèn thông minh là gì?
            </h1>
            <p className="max-md:text-[14px]">
              Đèn thông minh (Smart light) là sản phẩm có cấu tạo cơ bản tượng
              tự như đèn LED thông minh, nhưng được trang bị thêm giao thức điều
              khiển không dây hiện đại Bluetooth Mesh để kết nối dễ dàng với các
              thiết bị điện tử thông minh như Smartphone hay các bộ điều khiển
              trung tâm,… nhằm quản lý đèn thông minh cách dễ dàng nhất.
            </p>
            <p className="max-md:text-[14px]">
              Với thiết kế đơn giản cùng tuổi thọ cao lên đến 30.000 giờ, sản
              phẩm không chỉ giúp không gian trở nên tinh tế mà còn giúp người
              dùng an tâm sử dụng.
            </p>
            <iframe
              className="w-full h-[600px]  max-md:h-[200px]"
              src="https://www.youtube.com/embed/7fmC-i7oTIE?si=cad-IC6zK87avwhK"
              title="YouTube video player"
              allowFullScreen
            ></iframe>
            <h2 className="text-[26px] font-semibold  max-md:text-[18px]">
              Ưu điểm khi dùng đèn thông minh FPT Smart Home
            </h2>
            <p className="max-md:text-[14px]">
              Dù mới ra mắt thị trường vài năm gần đây nhưng đèn thông minh của
              FPT Smart Home đã trở thành thiết bị lý tưởng được nhiều người
              tiêu dùng yêu thích và săn đón khi sở hữu nhiều tính năng ưu việt
              như:
            </p>
            <h3 className="text-[26px] font-semibold  max-md:text-[18px] ">
              Đèn thông minh với thiết kế hiện đại, trang nhã
            </h3>
            <p className="max-md:text-[14px]">
              Đèn thông minh FPT Smart Home có thiết kế đa dạng với nhiều kiểu
              dáng, kích cỡ khác nhau. Khi lắp đặt tại các vị trí thích hợp sẽ
              tô điểm cho không gian kiến trúc thêm sang trọng, đẳng cấp và thời
              thượng.
            </p>
            <h3 className="text-[26px] font-semibold  max-md:text-[18px]">
              Đèn thông minh dễ dàng điều khiển
            </h3>
            <p className="max-md:text-[14px]">
              Khác biệt so với các loại đèn chiếu sáng truyền thống, đèn thông
              minh cho phép người dùng dễ dàng điều khiển nó thông qua
              Smartphone hoặc máy tính bảng. Thay vì phải đến tận nơi để bật/tắt
              thủ công như trước kia, giờ đây chỉ cần một động tác nhỏ bạn cũng
              có thể kiểm soát toàn bộ hệ thống đèn.
            </p>
            <p className="max-md:text-[14px]">
              Thậm chí, đèn thông minh có khả năng điều khiển giọng nói bằng
              tiếng Việt nhờ kết nối với bộ điều khiển trung tâm FPT Smart Home,
              đi kèm với đó là các tính năng nổi bật như: điều chỉnh cường độ
              ánh sáng và độ ấm ánh sáng phù hợp, bật tắt theo nhóm đèn, tự động
              mở khi có người/tự động đóng khi cả nhà ra ngoài, bật tắt đèn theo
              khung giờ cố định.
            </p>
            <p className="max-md:text-[14px]">
              Đặc biệt là sử dụng đèn thông minh cùng với các thiết bị khác
              thuộc hệ sinh thái nhà thông minh FPT Smart Home để tạo ra các ngữ
              cảnh thông minh tùy theo trường hợp.
            </p>
            <h3 className="text-[26px] font-semibold  max-md:text-[18px]">
              Đèn thông minh tiết kiệm năng lượng
            </h3>
            <p className="max-md:text-[14px]">
              Đèn thông minh của FPT Smart Home tiêu thụ ít điện năng hơn các
              loại đèn thông thường. Người dùng có thể tắt đèn dù đã đi ra ngoài
              trên Smartphone, hoặc thiết lập các chế độ bật/tắt tự động theo
              thói quen sinh hoạt nhằm tránh lãng phí, giảm hóa đơn tiền điện
              mỗi hàng cho gia đình.{" "}
            </p>
            <h3 className="text-[26px] font-semibold  max-md:text-[18px]">
              Tối ưu hóa chi phí lắp đặt đèn thông minh tại FPT Smart Home
            </h3>
            <p className="max-md:text-[14px]">
              Lựa chọn đèn thông minh thuộc hệ sinh thái của FPT Smart Home bạn
              sẽ không phải mất nhiều thời gian lắp đặt cũng như chi phí so với
              mua hàng bên ngoài, chúng tôi có đội ngũ thi công tận nhà trên mọi
              tỉnh thành của FPT Telecom sẽ luôn hỗ trợ nhanh chóng. Điều này
              vừa giúp tiết kiệm ngân sách vừa tăng tính thẩm mỹ cho không gian
              sống.
            </p>
            <h2 className="text-[26px] font-semibold  max-md:text-[18px]">
              Top 5 bóng đèn thông minh FPT Smart Home
            </h2>
            <h3 className="text-[26px] font-semibold  max-md:text-[18px]">
              Đèn LED Downlight thông minh
            </h3>
            <p className="max-md:text-[14px]">
              Phù hợp chiếu sáng cho đa dạng các không gian nội thất như phòng
              khách, phòng bếp, phòng ngủ, … Đèn LED Downlight có thể bật/tắt và
              hẹn giờ và điều khiển cường độ ánh sáng linh hoạt ngay trên thiết
              bị Smartphone, máy tính bảng,...
            </p>
            <Image
              className="mx-auto max-md:w-[200px] max-md:h-[200px]"
              src="/assets/images/product/1669265012-Led-2.png"
              width={400}
              height={400}
              alt="Đèn LED Tracklight Thông Minh"
            ></Image>
            <p className="max-md:text-[14px]">Thông số kỹ thuật:</p>
            <ul className="ml-[40px] list-disc max-md:text-[14px]">
              <li>Điện áp: 220V - 50Hz</li>
              <li>Công suất: 7W - 9W</li>
              <li>Nhiệt độ màu: 2700K ÷ 6500K</li>
              <li>Chỉ số hoàn màu: 90</li>
              <li>Tuổi thọ: 30.000h</li>
              <li>Nhiệt độ hoạt động: -10oC ÷ 50oC</li>
              <li>
                Kích thước khoét trần: Đèn Downlight (90/110mm). Đèn xoay góc
                (100mm)
              </li>
            </ul>
            <h3 className="text-[26px] font-semibold  max-md:text-[18px]">
              Đèn LED Bulb Thông Minh
            </h3>
            <p className="max-md:text-[14px]">
              Sở hữu kích thước nhỏ gọn, đèn LED Bulb cho phép lắp đặt dễ dàng
              tại nhiều không gian khác nhau. Sản phẩm cho phép thay đổi màu sắc
              RGB theo ý muốn, tạo ra không gian nghỉ ngơi giải trí thú vị ngay
              tại nhà.
            </p>
            <Image
              className="mx-auto max-md:w-[200px] max-md:h-[200px]"
              src="/assets/images/product/1692088715-Light-Led-Bulb.png"
              width={400}
              height={400}
              alt="Đèn LED Bulb Thông Minh"
            ></Image>
            <p className="max-md:text-[14px]">Thông số kỹ thuật:</p>
            <ul className="ml-[40px] list-disc max-md:text-[14px]">
              <li>Điện áp: 220V - 50Hz</li>
              <li>Công suất: 9W</li>
              <li>Nhiệt độ màu: (3000K ÷ 6500K) + RGB</li>
              <li>Chỉ số hoàn màu: 90</li>

              <li>Nhiệt độ hoạt động: -10oC ÷ 50oC</li>
              <li>Kích thước (DxC): 60 x 110mm</li>
            </ul>
            <h3 className="text-[26px] font-semibold  max-md:text-[18px]">
              Đèn LED Panel Thông Minh
            </h3>
            <p className="max-md:text-[14px]">
              Nếu bạn đang tìm kiếm mẫu bóng đèn thông minh để lắp đặt tại các
              khu vực rộng như: Khách sạn, trường học, bệnh viện,… hoặc đơn giản
              là thay thế các thiết kế đèn phổ thông như LED âm trần, ốp trần
              thì đèn LED panel FPT Smart Home là lựa chọn hàng đầu. Mẫu đèn này
              có thiết kế sang trọng, tinh tế, phân bổ ánh sáng đều, tiết kiệm
              điện năng và không gian chiếu sáng rộng. Tùy vào nhu cầu sử dụng
              mà bạn có thể bật/tắt/hẹn giờ toàn bộ hệ thống đèn hoặc một số
              vùng theo thời gian thực.
            </p>
            <Image
              className="mx-auto max-md:w-[200px] max-md:h-[200px]"
              src="/assets/images/product/1668509256-PTS-LED-Panel-vuong-2.png"
              width={400}
              height={400}
              alt="Đèn LED Panel Thông Minh"
            ></Image>
            <p className="max-md:text-[14px]">Thông số kỹ thuật:</p>
            <ul className="ml-[40px] list-disc max-md:text-[14px]">
              <li>Điện áp: 220V - 50Hz</li>
              <li>Công suất: 9W / 40W</li>
              <li>Nhiệt độ màu: (3000K ÷ 6500K) + RGB</li>
              <li>Chỉ số hoàn màu: 80</li>
              <li>Tuổi thọ: 25.000h</li>
              <li>Nhiệt độ hoạt động: -10oC ÷ 50oC</li>
              <li>Kiểu dáng: Tròn/ Vuông/ Chữ nhật</li>
            </ul>
            <h3 className="text-[26px] font-semibold  max-md:text-[18px]">
              Đèn LED Dây Thông Minh
            </h3>
            <p className="max-md:text-[14px]">
              Mẫu đèn này được ưu tiên lắp đặt tại các khu vực có diện tích chật
              hẹp và hoặc đặt vào phía trong để làm nổi bật 1 mảng tường/ mảng
              trần. Đặc biệt là đèn LED dây thông minh FPT Smart Home có thể
              thay đổi màu sắc và cường độ ánh sáng tạo ra không gian lý tưởng.
            </p>
            <Image
              className="mx-auto max-md:w-[200px] max-md:h-[200px]"
              src="/assets/images/product/1669265318-PTS-LightStrip-2.png"
              width={400}
              height={400}
              alt=" Đèn LED Dây Thông Minh"
            ></Image>
            <p className="max-md:text-[14px]">Thông số kỹ thuật:</p>
            <ul className="ml-[40px] list-disc max-md:text-[14px]">
              <li>Điện áp: 12VDC/220V - 50Hz</li>
              <li>Công suất: 20W / 25W</li>
              <li>Nhiệt độ màu: (2700K ÷ 6500K)</li>
              <li>Chỉ số hoàn màu: 80</li>
              <li>Tuổi thọ: 25.000h</li>
              <li>Nhiệt độ hoạt động: -10oC ÷ 45oC</li>
              <li>Chiếu dài: 5m / 25m</li>
            </ul>
            <h3 className="text-[26px] font-semibold  max-md:text-[18px]">
              Đèn LED Track Light Thông Minh
            </h3>
            <p className="max-md:text-[14px]">
              Sản phẩm đèn LED Track Light có khả năng chiếu sáng tập trung, tạo
              điểm nhấn ấn tượng cho không gian nhà. Ví dụ như các khu vực trưng
              bày vật phẩm quý giá, tranh ảnh đặc biệt,… hoặc tô điểm thêm cho
              không gian phòng khách. Người dùng có thể bật/tắt/hẹn giờ một vùng
              hoặc toàn bộ hệ thống chiếu sáng theo thời gian thực.
            </p>
            <Image
              className="mx-auto max-md:w-[200px] max-md:h-[200px]"
              src="/assets/images/product/1669265162-PTS-LED-tracklight-trang-.png"
              width={400}
              height={400}
              alt="Đèn LED Track Light Thông Minh"
            ></Image>
            <p className="max-md:text-[14px]">Thông số kỹ thuật:</p>
            <ul className="ml-[40px] list-disc max-md:text-[14px]">
              <li>Điện áp: 220V - 50Hz</li>
              <li>Công suất: 20W / 25W</li>
              <li>Nhiệt độ màu: (2700K ÷ 6500K)</li>
              <li>Chỉ số hoàn màu: 80</li>
              <li>Tuổi thọ: 25.000h</li>
              <li>Nhiệt độ hoạt động: -10oC ÷ 50oC</li>
              <li>Kích thước: 20W (170x120mm), 25W (180x140mm)</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
