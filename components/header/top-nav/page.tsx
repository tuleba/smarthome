import Image from "next/image";
import Link from "next/link";
import React from "react";

const links = [
  {
    web: "https://www.facebook.com/",
    src: "/assets/icon/facebook.png",
    alt: "facebook",
    id: 1,
  },
  {
    web: "https://www.linkedin.com/",
    src: "/assets/icon/linkedin.png",
    alt: "linkedin",
    id: 2,
  },
  {
    web: "twitter.com",
    src: "/assets/icon/twitter.png",
    alt: "twitter",
    id: 3,
  },
  {
    web: "https://mail.google.com",
    src: "/assets/icon/mail.png",
    alt: "mail",
    id: 4,
  },
];
export default function Top_Nav() {
  return (
    <div className=" bg-black">
      <div className=" container text-white w-full h-[48px] flex items-center justify-between">
        <div className="flex gap-2">
          {links.map((link) => (
            <div key={link.id}>
              <Link href={link.web}>
                <Image
                  className="scale-200"
                  src={link.src}
                  alt={link.alt}
                  width={16}
                  height={16}
                />
              </Link>
            </div>
          ))}
        </div>
        <div className="">
          <ul className=" flex gap-4 text-btn_medium list-disc ">
            <li>Introduce</li>
            <li>Partner Incentives</li>
            <li>Promotion</li>
            <li>Contact</li>
            <li>Frequently asked questions</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
