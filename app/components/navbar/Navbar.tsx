"use client"

import { User } from "@prisma/client";
import { FC } from "react";
import { Inter } from "next/font/google";
import Container from "../Container";
import Logo from "./Logo";
import UserMenu from "./UserMenu";
import { usePathname } from 'next/navigation';

const inter = Inter({ subsets: ["latin"] });

type NavBarProps = {
  currentUser?: User | null;
};

export const NavBar: FC<NavBarProps> = ({ currentUser }) => {
  const pathname = usePathname();

  if (pathname.includes('/signup')) {
    return <></>
  }
 
  return (
    <div className={`fixed w-full bg-white z-10 shadow-sm ${inter.className}`}>
      <div className="py-3 border-b-[1px] px-10">
        <Container>
          <div className="flex flex-row items-center justify-between gap-3 md:gap-0">
            <Logo />
            <UserMenu currentUser={currentUser} />
          </div>
        </Container>
      </div>
    </div>
  );
};

export default NavBar;
