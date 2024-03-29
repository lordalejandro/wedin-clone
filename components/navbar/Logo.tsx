"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

const Logo = () => {
  const router = useRouter();

  return (
    <Image
      alt="logo"
      onClick={() => router.push("/")}
      className="cursor-pointer"
      height="39"
      width="90"
      src="/images/wedin.png"
    />
  );
};

export default Logo;
