"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const Logo = () => {
  const router = useRouter();

  return (
    <Image
      alt="logo"
      onClick={() => router.push("/")}
      className="hidden md:block cursor-pointer"
      height="62"
      width="132"
      src="/images/wedin.png"
    />
  );
};

export default Logo;
