"use client";
import React, { useEffect, useState } from "react";
import Nav from "./nav/page";
import Bottom_Nav from "./bottom-nav/page";
import MobileNav from "./mobile-nav/page";

export default function Header() {
  // const [windowWidth, setWindowWidth] = useState(
  //   typeof window !== "undefined" ? window.innerWidth : 0
  // );

  // useEffect(() => {
  //   if (typeof window !== "undefined") {
  //     const handleResize = () => setWindowWidth(window.innerWidth);
  //     window.addEventListener("resize", handleResize);

  //     // Clean up event listener on component unmount
  //     return () => window.removeEventListener("resize", handleResize);
  //   }
  // }, []);

  return (
    <div className="fixed z-50 top-0 w-full ">
      <Nav />
      <Bottom_Nav />
      <MobileNav />
    </div>
  );
}
