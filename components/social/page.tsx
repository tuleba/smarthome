"use client";
import Link from "next/link";
import React, { useState } from "react";
import { SiZalo } from "react-icons/si";
import { Tooltip, Button } from "@nextui-org/react";
import { Popover, PopoverTrigger, PopoverContent } from "@nextui-org/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { formZaLoSchema } from "@/schemas";
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
import { useRouter } from "next/navigation";
import { FaPhoneAlt } from "react-icons/fa";
import { createConnectZaLo } from "@/actions/connect-zalo";

export default function SocialConnect() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const form = useForm<z.infer<typeof formZaLoSchema>>({
    resolver: zodResolver(formZaLoSchema),
    defaultValues: {
      name: "",
      phone: "",
    },
  });
  const onSubmit = async (values: z.infer<typeof formZaLoSchema>) => {
    setIsSubmitting(true);
    try {
      await createConnectZaLo(values);
    } catch (error) {
      console.error(error);
      setIsSubmitting(false);
    }
    window.open(`https://zalo.me/0775793978`, "_blank");
  };
  return (
    <div className="fixed z-50 bottom-10 right-6 cursor-pointer flex flex-col gap-3 max-md:bottom-3 max-md:right-3 max-md:gap-3">
      <a
        href="tel:0775793978"
        className="w-12 h-12 bg-green-600 flex items-center justify-center rounded-full animate-bounce"
      >
        <FaPhoneAlt color={"white"} size={"22px"} />
      </a>

      <a
        href="https://zalo.me/0906030030"
        target="blank"
        className="bg-blue-500 flex items-center justify-center w-12 h-12 rounded-full animate-bounce"
      >
        <SiZalo color={"white"} size={"25px"} />
      </a>
      {/* <Popover key="top-end" placement="top-end" color="primary">
        <PopoverTrigger>
          <div className="bg-blue-500 w-12 h-12 flex items-center justify-center rounded-full animate-bounce">
            <SiZalo color={"white"} size={"25px"} />
          </div>
        </PopoverTrigger>
        <PopoverContent className="border-[1px]  bg-blue-500  drop-shadow-lg py-8">
          <div className="w-[250px] h-min text-center  ">
            <div className="flex flex-col gap-6 text-small font-bold">
              <h2 className="text-[23px] font-semibold text-center text-white">
                Chat với tư vấn viên
              </h2>
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-2 px-4"
                >
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            placeholder="Tên của bạn"
                            className="h-[50px] mb-3 text-black"
                            {...field}
                          />
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
                            className="h-[50px] mb-6 text-black"
                            placeholder="Số điện thoại của bạn"
                            {...field}
                          />
                        </FormControl>

                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button type="submit" className="bg-white">
                    Chat ngay
                  </Button>
                </form>
              </Form>
            </div>
          </div>
        </PopoverContent>
      </Popover> */}
    </div>
  );
}
