"use client";
import React, { useState } from "react";
import { CiGift } from "react-icons/ci";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { FaRegUserCircle } from "react-icons/fa";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { FaWrench } from "react-icons/fa";
import { FaCogs } from "react-icons/fa";
import { FaBook } from "react-icons/fa";
import { FaDeaf } from "react-icons/fa";
import { FaLightbulb } from "react-icons/fa";
import { FaBell } from "react-icons/fa";
import { FaExclamationTriangle } from "react-icons/fa";
import { FaShieldAlt } from "react-icons/fa";
import { IoLogoUsd } from "react-icons/io5";
import Image from "next/image";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { formOutsourceSchema } from "@/schemas";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useToast } from "@/components/ui/use-toast";
import { createItOutsource } from "@/actions/it-outsource";
export default function Page() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formOutsourceSchema>>({
    resolver: zodResolver(formOutsourceSchema),
    defaultValues: {
      name: "",
      phone: "",
      address: "",
      type: "IT BASIS",
      time: "6 month",
    },
  });
  const handleSubmit = () => {
    toast({
      title: "Bạn đã đăng kí thành công",
      description: "Chúng tôi sẽ phản hồi bạn sớm nhất có thể",
    });
  };
  const handleFail = () => {
    toast({
      title: "Bạn cần 60s để gửi lại ",
      description: "Vui lòng thử lại sau",
    });
  };
  const onSubmit = async (values: z.infer<typeof formOutsourceSchema>) => {
    console.log(values);
    setIsSubmitting(true);
    try {
      await createItOutsource(values);
      handleSubmit();
      setTimeout(() => setIsSubmitting(false), 60000);
    } catch (error) {
      console.error(error);
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <div className=" pt-[123px] pb-[10px] max-lg:pt-[72px] max-md:pt-[60px]">
        <div className="bg-[url('/assets/images/outsource/Banner-Website.png')] w-full h-[600px] bg-cover bg-no-repeat bg-center max-lg:h-[400px] max-md:h-[200px] "></div>
        <div className="container">
          <h1 className="text-[35px] text-center py-4 font-medium text-orange-500 max-lg:px-4 max-md:text-[20px]">
            IT OUTSOURCE FPT – IT HELPDESK FPT – DỊCH VỤ THUÊ IT FPT
          </h1>
        </div>
      </div>
      <div className="container">
        <div className=" pb-[10px] flex flex-col gap-6 border-b-[1px] border-black max-lg:px-4 max-md:px-0">
          <h2 className="text-[22px] flex items-center gap-2 text-green-500 pb-[10px] border-b-[1px] border-black max-lg:px-4 max-md:text-[18px] max-md:px-0">
            <CiGift color="green" fontSize="35px" />
            LỢI ÍT KHI SỬ DỤNG DỊCH VỤ IT OUTSOURCE CỦA FPT
          </h2>
          <div className="flex flex-col gap-4 ">
            <h3 className="text-[23px] font-medium  text-blue-800">
              1. Tiết kiệm chi phí thuê IT!
            </h3>
            <ul className="list-disc px-4 flex flex-col gap-3 text-[16px] text-gray-700">
              <li>
                Khi gặp sự cố về IT như mất mạng nội bộ, lỗi máy tính máy in,
                sever… nhưng không biết kêu ai? Thuê riêng IT để trực thì quá
                tốn kém, nhưng gặp tình huống khó thì có chắc là họ xử lý được
                không? Nhưng lương ít nhất phải mất trên 10 triệu một tháng…
              </li>
              <li>
                Nhưng chỉ với 990.000đ/tháng khách hàng được sở hữu riêng một
                phòng IT chất lượng cao của FPT sẽ xử lý toàn bộ sự cố phát sinh
                trong quá trình sử dụng của khách hàng bao gồm ( PC, Laptop, Hệ
                thống mạng nội bộ, Wifi, Máy in scan, Sửa lỗi và cài đặt window,
                Quản trị mail, Sever…)
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-4 ">
            <h3 className="text-[23px] font-medium  text-blue-800">
              2. Đội ngũ chuyên gia IT hùng hậu!
            </h3>
            <ul className="list-disc px-4 flex flex-col gap-3 text-[16px] text-gray-700">
              <li>
                FPT là một ông lớn trong ngành CNTT Việt Nam. Nên sở hữu lực
                lượng IT có kinh nghiệm và năng lực nhất hiện nay! Có thể xử lý
                mọi xự cố cho khách hàng một cách nhanh chóng nhất!
              </li>
              <li>
                Với phương châm ở đâu có internet FPT ở đó có IT phục vụ tận nơi
                cho khách hàng yên tâm sử dụng và làm việc hiệu quả nhất. Vì vậy
                nếu quý khách có nhu cầu thuê IT, FPT sẽ cung cấp dịch vụ toàn
                quốc bất cứ nơi nào khách hàng cần.
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-4 ">
            <h3 className="text-[23px] font-medium  text-blue-800">
              3. FPT luôn hỗ trợ 24/7 kể cả lễ Tết!
            </h3>
            <ul className="list-disc px-4 flex flex-col gap-3 text-[16px] text-gray-700">
              <li>
                Thuê IT thì chắc chắn phải có ngày nghỉ nhưng IT Outsource FPT
                luôn đồng hành cùng bạn!
              </li>
              <li>
                FPT cam kết phục vụ 24/7 kể cả lễ Tết. Bất cứ khi nào khách hàng
                cần đều có FPT bên bạn cùng xử lý.
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-4 ">
            <h3 className="text-[23px] font-medium  text-blue-800">
              4. Cam kết bảo mật tuyệt đối thông tin khách hàng!
            </h3>
            <ul className="list-disc px-4 flex flex-col gap-3 text-[16px] text-gray-700">
              <li>
                Thông tin dữ liệu khách hàng là tài sản quý nhất của công ty!
                Nên giao tài sàn này cho FPT thì khách hàng sẽ yên tâm về vấn đề
                này. Nếu có vấn đề về bảo mật FPT sẽ đề xuất và cùng khách hàng
                xử lý.
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-4 ">
            <h3 className="text-[23px] font-medium  text-blue-800">
              5. Miễn phí đề xuất, tư vấn nâng cấp thiết bị!
            </h3>
            <ul className="list-disc px-4 flex flex-col gap-3 text-[16px] text-gray-700">
              <li>
                Trong quá trình bảo dưỡng hệ thống FPT phát hiện nguyên nhân vấn
                đề FPT sẽ đề xuất nâng cấp hoặc thay thế thiết bị hoàn toàn miễn
                phí!
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-4 ">
            <h3 className="text-[23px] font-medium  text-blue-800">
              6. Bảo trì định kỳ tất cả các thiết bị IT!
            </h3>
            <ul className="list-disc px-4 flex flex-col gap-3 text-[16px] text-gray-700">
              <li>
                FPT sẽ kiểm tra định kỳ toàn bộ thiết bị của khách hàng ít nhất
                01 lần trên tháng đồng thời vệ sinh thiết bị nếu cần thiết! Để
                thiết bị luôn trong tình trạng hoạt động hoàn hảo.
              </li>
            </ul>
          </div>
          <h2 className="text-[22px] flex items-center gap-2 text-green-500 max-md:text-[18px]">
            <CiGift color="green" fontSize="35px" />
            GÓI DỊCH VỤ IT OUTSOURCE FPT
          </h2>
        </div>
        <div className="pt-[30px]  pb-[10px]  max-lg:px-2 max-md:px-8">
          <Carousel>
            <CarouselContent>
              <CarouselItem className="basis-1/3 max-md:basis-full">
                <div className="w-full h-min border-[2px] border-blue-900 rounded-[30px] p-4 flex flex-col gap-4 ">
                  <Image
                    className="w-[300px] mx-auto"
                    src="/assets/images/outsource/IT-BASIC-GIF.gif"
                    alt=" GÓI DỊCH VỤ IT OUTSOURCE FPT"
                    width={500}
                    height={300}
                  />
                  <h2 className="text-[40px] text-red-500 font-bold text-center max-lg:text-[30px]">
                    990.000 VNĐ
                  </h2>
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-2 border-b-[1px] border-slate-300 pb-2">
                      <FaRegUserCircle color="blue" />
                      <p className="font-medium text-orange-500">
                        {" "}
                        Quy mô dưới 30 user
                      </p>
                    </div>
                    <div className="flex items-center gap-2 border-b-[1px] border-slate-300 pb-2">
                      <FaPhoneSquareAlt color="blue" />
                      <p className="font-medium text-orange-500">
                        Hỗ trợ từ xa và tận nơi HOT
                      </p>
                    </div>
                    <div className="flex items-center gap-2 border-b-[1px] border-slate-300 pb-2">
                      <FaWrench color="blue" />
                      <p> Bảo trì định kỳ không hỗ trợ</p>
                    </div>
                    <div className="flex items-center gap-2 border-b-[1px] border-slate-300 pb-2">
                      <FaCogs color="blue" />
                      <p>Trực định kỳ theo yêu cầu không hỗ trợ</p>
                    </div>
                    <div className="flex items-center gap-2 border-b-[1px] border-slate-300 pb-2">
                      <FaBook color="blue" />
                      <p>Báo cáo dịch vụ định kỳ không hỗ trợ</p>
                    </div>
                    <div className="flex items-center gap-2 border-b-[1px] border-slate-300 pb-2">
                      <FaDeaf color="blue" />
                      <p className="font-medium text-orange-500">
                        Hỗ trợ và quản lý hạ tầng mạng
                      </p>
                    </div>
                    <div className="flex items-center gap-2 border-b-[1px] border-slate-300 pb-2">
                      <FaLightbulb color="blue" />
                      <p className="font-medium text-orange-500">
                        Tư vấn khuyến cáo công nghệ
                      </p>
                    </div>
                    <div className="flex items-center gap-2 border-b-[1px] border-slate-300 pb-2">
                      <FaBell color="blue" />
                      <p className="font-medium text-orange-500">
                        {" "}
                        Tiếp nhận phản hồi yêu cầu 24/7
                      </p>
                    </div>
                    <div className="flex items-center gap-2 border-b-[1px] border-slate-300 pb-2">
                      <FaExclamationTriangle color="blue" />
                      <p className="font-medium text-orange-500">
                        {" "}
                        Xử lý sự cố tận nơi trong 120 phút HOT
                      </p>
                    </div>
                    <div className="flex items-center gap-2 border-b-[1px] border-slate-300 pb-2">
                      <FaShieldAlt color="blue" />
                      <p className="font-medium text-orange-500">
                        CAM KẾT BẢO MẬT THÔNG TIN
                      </p>
                    </div>
                    <div className="flex items-center gap-2  ">
                      <IoLogoUsd color="blue" />
                      <p className="font-medium text-black">
                        Giá cước đã bao gồm 10% thuế VAT!
                      </p>
                    </div>
                  </div>
                  <Button
                    className="bg-blue-700 text-white font-semibold"
                    onPress={onOpen}
                  >
                    {" "}
                    Đăng kí ngay
                  </Button>
                </div>
              </CarouselItem>
              <CarouselItem className="basis-1/3 max-md:basis-full">
                <div className="w-full h-min border-[2px] border-orange-400 rounded-[30px] p-4 flex flex-col gap-4">
                  <Image
                    className="w-[250px] mx-auto"
                    src="/assets/images/outsource/IT-PRO-GIF.gif"
                    alt=" GÓI DỊCH VỤ IT OUTSOURCE FPT"
                    width={500}
                    height={300}
                  />
                  <h2 className="text-[40px] text-red-500 font-bold text-center max-lg:text-[30px]">
                    1.990.000 VNĐ
                  </h2>
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-2 border-b-[1px] border-slate-300 pb-2">
                      <FaRegUserCircle color="orange" />
                      <p className="font-medium text-orange-500">
                        {" "}
                        Quy mô dưới 50 user
                      </p>
                    </div>
                    <div className="flex items-center gap-2 border-b-[1px] border-slate-300 pb-2">
                      <FaPhoneSquareAlt color="orange" />
                      <p className="font-medium text-orange-500">
                        Hỗ trợ từ xa và tận nơi HOT
                      </p>
                    </div>
                    <div className="flex items-center gap-2 border-b-[1px] border-slate-300 pb-2">
                      <FaWrench color="orange" />
                      <p className="font-medium text-orange-500">
                        Bảo trì định kỳ 01 lần/Tháng HOT
                      </p>
                    </div>
                    <div className="flex items-center gap-2 border-b-[1px] border-slate-300 pb-2">
                      <FaCogs color="orange" />
                      <p>Trực định kỳ theo yêu cầu không hỗ trợ</p>
                    </div>
                    <div className="flex items-center gap-2 border-b-[1px] border-slate-300 pb-2">
                      <FaBook color="orange" />
                      <p className="font-medium text-orange-500">
                        Báo cáo dịch vụ định kỳ
                      </p>
                    </div>
                    <div className="flex items-center gap-2 border-b-[1px] border-slate-300 pb-2">
                      <FaDeaf color="orange" />
                      <p className="font-medium text-orange-500">
                        Hỗ trợ và quản lý hạ tầng mạng
                      </p>
                    </div>
                    <div className="flex items-center gap-2 border-b-[1px] border-slate-300 pb-2">
                      <FaLightbulb color="orange" />
                      <p className="font-medium text-orange-500">
                        Tư vấn khuyến cáo công nghệ
                      </p>
                    </div>
                    <div className="flex items-center gap-2 border-b-[1px] border-slate-300 pb-2">
                      <FaBell color="orange" />
                      <p className="font-medium text-orange-500">
                        {" "}
                        Tiếp nhận phản hồi yêu cầu 24/7
                      </p>
                    </div>
                    <div className="flex items-center gap-2 border-b-[1px] border-slate-300 pb-2">
                      <FaExclamationTriangle color="orange" />
                      <p className="font-medium text-orange-500">
                        {" "}
                        Xử lý sự cố tận nơi trong 90 phút HOT
                      </p>
                    </div>
                    <div className="flex items-center gap-2 border-b-[1px] border-slate-300 pb-2">
                      <FaShieldAlt color="orange" />
                      <p className="font-medium text-orange-500">
                        CAM KẾT BẢO MẬT THÔNG TIN
                      </p>
                    </div>
                    <div className="flex items-center gap-2  ">
                      <IoLogoUsd color="orange" />
                      <p className="font-medium text-black">
                        Giá cước đã bao gồm 10% thuế VAT!
                      </p>
                    </div>
                  </div>
                  <Button
                    className="bg-orange-500 text-white font-semibold"
                    onPress={onOpen}
                  >
                    {" "}
                    Đăng kí ngay
                  </Button>
                </div>
              </CarouselItem>
              <CarouselItem className="basis-1/3 max-md:basis-full">
                <div className="w-full h-min border-[2px] border-green-400 rounded-[30px] p-4 flex flex-col gap-4">
                  <Image
                    className="w-[250px] mx-auto"
                    src="/assets/images/outsource/IT-VIP-GIF.gif"
                    alt=" GÓI DỊCH VỤ IT OUTSOURCE FPT"
                    width={500}
                    height={300}
                  />
                  <h2 className="text-[36px] text-red-500 font-bold text-center max-lg:text-[30px]">
                    Khảo sát báo giá
                  </h2>
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-2 border-b-[1px] border-slate-300 pb-2">
                      <FaRegUserCircle color="green" />
                      <p className="font-medium text-orange-500">
                        {" "}
                        Quy mô dưới 50 user
                      </p>
                    </div>
                    <div className="flex items-center gap-2 border-b-[1px] border-slate-300 pb-2">
                      <FaPhoneSquareAlt color="green" />
                      <p className="font-medium text-orange-500">
                        Hỗ trợ từ xa và tận nơi HOT
                      </p>
                    </div>
                    <div className="flex items-center gap-2 border-b-[1px] border-slate-300 pb-2">
                      <FaWrench color="green" />
                      <p className="font-medium text-orange-500">
                        {" "}
                        B Bảo trì định kỳ 01 lần/Tháng HOT
                      </p>
                    </div>
                    <div className="flex items-center gap-2 border-b-[1px] border-slate-300 pb-2">
                      <FaCogs color="green" />
                      <p className="font-medium text-orange-500">
                        Trực định kỳ theo yêu cầu 01 lần/Tháng
                      </p>
                    </div>
                    <div className="flex items-center gap-2 border-b-[1px] border-slate-300 pb-2">
                      <FaBook color="green" />
                      <p className="font-medium text-orange-500">
                        {" "}
                        Báo cáo dịch vụ định kỳ
                      </p>
                    </div>
                    <div className="flex items-center gap-2 border-b-[1px] border-slate-300 pb-2">
                      <FaDeaf color="green" />
                      <p className="font-medium text-orange-500">
                        Hỗ trợ và quản lý hạ tầng mạng
                      </p>
                    </div>
                    <div className="flex items-center gap-2 border-b-[1px] border-slate-300 pb-2">
                      <FaLightbulb color="green" />
                      <p className="font-medium text-orange-500">
                        Tư vấn khuyến cáo công nghệ
                      </p>
                    </div>
                    <div className="flex items-center gap-2 border-b-[1px] border-slate-300 pb-2">
                      <FaBell color="green" />
                      <p className="font-medium text-orange-500">
                        {" "}
                        Tiếp nhận phản hồi yêu cầu 24/7
                      </p>
                    </div>
                    <div className="flex items-center gap-2 border-b-[1px] border-slate-300 pb-2">
                      <FaExclamationTriangle color="green" />
                      <p className="font-medium text-orange-500">
                        {" "}
                        Xử lý sự cố tận nơi trong 60 phút HOT
                      </p>
                    </div>
                    <div className="flex items-center gap-2 border-b-[1px] border-slate-300 pb-2">
                      <FaShieldAlt color="green" />
                      <p className="font-medium text-orange-500">
                        CAM KẾT BẢO MẬT THÔNG TIN
                      </p>
                    </div>
                    <div className="flex items-center gap-2  ">
                      <IoLogoUsd color="green" />
                      <p className="font-medium text-black">
                        Giá cước đã bao gồm 10% thuế VAT!
                      </p>
                    </div>
                  </div>
                  <Button
                    className="bg-green-500 text-white font-semibold"
                    onPress={onOpen}
                  >
                    {" "}
                    Đăng kí ngay
                  </Button>
                </div>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
          <Modal
            backdrop="opaque"
            isOpen={isOpen}
            onOpenChange={onOpenChange}
            classNames={{
              backdrop:
                "bg-gradient-to-t from-zinc-900 to-zinc-900/10 backdrop-opacity-20",
            }}
            size="2xl"
          >
            <ModalContent className="">
              {(onClose) => (
                <>
                  <ModalHeader className="text-center text-[25px] text-green-500 font-semibold">
                    Yêu cầu tư vấn dịch vụ IT Outsource
                  </ModalHeader>
                  <ModalBody>
                    <Form {...form}>
                      <form
                        onSubmit={form.handleSubmit(onSubmit)}
                        className="space-y-8"
                      >
                        <FormField
                          control={form.control}
                          name="name"
                          render={({ field }) => (
                            <FormItem>
                              <FormControl>
                                <Input placeholder="Tên của bạn*" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="phone"
                          render={({ field }) => (
                            <FormItem>
                              <FormControl>
                                <Input
                                  placeholder="Số điện thoại*"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="address"
                          render={({ field }) => (
                            <FormItem>
                              <FormControl>
                                <Input
                                  placeholder="Địa chỉ đăng kí*"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="type"
                          render={({ field }) => (
                            <FormItem className="space-y-3">
                              <FormLabel>Lựa chọn gói cước</FormLabel>
                              <FormControl>
                                <RadioGroup
                                  onValueChange={field.onChange}
                                  defaultValue={field.value}
                                  className="flex items-center space-y-1"
                                >
                                  <FormItem className="flex items-center space-x-3 space-y-0">
                                    <FormControl>
                                      <RadioGroupItem value="IT BASIS" />
                                    </FormControl>
                                    <FormLabel className="font-normal">
                                      IT BASIS
                                    </FormLabel>
                                  </FormItem>
                                  <FormItem className="flex items-center space-x-3 space-y-0">
                                    <FormControl>
                                      <RadioGroupItem value="IT PRO" />
                                    </FormControl>
                                    <FormLabel className="font-normal">
                                      IT PRO
                                    </FormLabel>
                                  </FormItem>
                                  <FormItem className="flex items-center space-x-3 space-y-0">
                                    <FormControl>
                                      <RadioGroupItem value="IT VIP" />
                                    </FormControl>
                                    <FormLabel className="font-normal">
                                      IT VIP
                                    </FormLabel>
                                  </FormItem>
                                </RadioGroup>
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="time"
                          render={({ field }) => (
                            <FormItem className="space-y-3">
                              <FormLabel>Hình thức đăng kí</FormLabel>
                              <FormControl>
                                <RadioGroup
                                  onValueChange={field.onChange}
                                  defaultValue={field.value}
                                  className="flex items-center space-y-1"
                                >
                                  <FormItem className="flex items-center space-x-3 space-y-0">
                                    <FormControl>
                                      <RadioGroupItem value="6 month" />
                                    </FormControl>
                                    <FormLabel className="font-normal">
                                      Gói 6 tháng
                                    </FormLabel>
                                  </FormItem>
                                  <FormItem className="flex items-center space-x-3 space-y-0">
                                    <FormControl>
                                      <RadioGroupItem value="12 month" />
                                    </FormControl>
                                    <FormLabel className="font-normal">
                                      Gói 12 tháng
                                    </FormLabel>
                                  </FormItem>
                                  <FormItem className="flex items-center space-x-3 space-y-0">
                                    <FormControl>
                                      <RadioGroupItem value="Khác" />
                                    </FormControl>
                                    <FormLabel className="font-normal">
                                      Khác
                                    </FormLabel>
                                  </FormItem>
                                </RadioGroup>
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <ModalFooter>
                          <Button
                            color="danger"
                            variant="light"
                            onPress={onClose}
                          >
                            Huỷ
                          </Button>
                          {/* onPress={close} nếu gửi values thành công */}
                          {isSubmitting ? (
                            <Button type="reset" onClick={handleFail}>
                              Đăng ki
                            </Button>
                          ) : (
                            <Button type="submit" color="primary">
                              Đăng kí
                            </Button>
                          )}
                        </ModalFooter>
                      </form>
                    </Form>
                  </ModalBody>
                </>
              )}
            </ModalContent>
          </Modal>
        </div>
        <div className="pb-[30px] max-lg:px-4 max-md:px-0">
          <h2 className="text-[22px] flex items-center gap-2 text-green-500 mt-10 max-lg:px-4 max-md:px-0 border-b-[1px] border-black pb-3 mb-5 max-md:text-[18px]">
            <CiGift color="green" fontSize="35px" />
            PHẠM VI CÔNG VIỆC
          </h2>
          <ul className="flex flex-col gap-6 list-disc px-4 text-gray-600 text-[16px]">
            <li>
              <span className="font-semibold"> Bảo trì các thiết bị </span> của{" "}
              {""}
              <span className="text-orange-500">
                hệ thống mạng, wifi, camera, server, IP Phone, máy chấm công,
                máy in…. backup, cấu hình, xử lý lỗi window.
              </span>
            </li>
            <li>
              <span className="font-semibold">Đảm bảo các kết nối</span> trong
              hệ thống mạng nội bộ.
            </li>
            <li>
              <span className="font-semibold">
                {" "}
                Hỗ trợ người dùng về cách sử dụng các ứng dụng
              </span>
              , email, hệ điều hành, máy tính và thiết bị văn phòng khác.
            </li>
            <li>
              <span className="font-semibold">
                Hỗ trợ cài đặt và cấu hình phần mềm, ứng dụng
              </span>
              , máy tính cá nhân, máy tính xách tay và các thiết bị văn phòng
              khác.
            </li>
            <li>
              <span className="font-semibold">
                {" "}
                Hỗ trợ cầu hình và sửa chữa hệ thống
              </span>{" "}
              Internet, kết nối Wi-Fi, VPN, và các vấn đề liên quan đến
              Internet.ỗ trợ người dùng trong việc quản lý và tổ chức dữ liệu
              trên máy tính hoặc trong hệ thống lưu trữ của tổ chức.
            </li>
            <li>
              <span className="font-semibold">
                {" "}
                Tư vấn, đề xuất & báo giá nâng cấp thiết bị{" "}
              </span>
              máy tính, laptop, & các thiết bị văn phòng khác.
            </li>
            <li>
              {" "}
              <span className="font-semibold">Kiểm tra và loại trừ Virus</span>,
              update chương trình diệt Virus.
            </li>
          </ul>
        </div>
        <div className="pb-[50px] max-lg:px-4 max-md:px-0">
          <h2 className="text-[22px] flex items-center gap-2 text-green-500 border-b-[1px] border-black pb-[10px] mb-[30px] max-md:text-[18px]">
            <CiGift color="green" fontSize="35px" />
            QUYỀN LỢI KHI SỬ DỤNG DỊCH VỤ IT OUTSOURCE FPT
          </h2>
          <ul className="flex flex-col gap-6 list-disc px-4 text-gray-600 text-[16px]">
            <li>
              <span className="font-semibold">
                {" "}
                Đảm bảo công ty được hoạt động
              </span>{" "}
              và vận hành một cách ổn định cho tất cả các thiết bị và phần mêm
              CNTT.
            </li>
            <li>
              <span className="font-semibold">Được kiểm tra</span>, đánh giá và
              báo cáo sức khỏe định kỳ hệ thống CNTT.
            </li>
            <li>
              <span className="font-semibold"> Đề xuất nâng cấp thiết bị</span>,
              hệ thống để đảm bảo công việc.
            </li>
            <li>
              <span className="font-semibold">
                Sử dụng dịch vụ chất lượng nhất
              </span>{" "}
              với chi phí thấp nhất.
            </li>
            <li className="font-semibold">Được bảo mật thông tin dữ liệu.</li>
            <li>
              <span className="font-semibold">
                Được hỗ trợ xử lý xự cố từ xa 24/7
              </span>{" "}
              và tận nơi theo đúng thời gian cam kết của gói IT. {""}
              <span className="text-orange-500 font-bold">
                (không giới hạn số lần hỗ trợ)
              </span>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
