'use client';

import { User } from '@prisma/client';
import Container from '@/components/Container';
import Logo from './Logo';
import UserMenu from '@/components/navbar/UserMenu';
import { Inter } from 'next/font/google';
import { usePathname } from 'next/navigation';

const inter = Inter({ subsets: ['latin'] });

type NavBarProps = {
  currentUser?: User | null;
};

export const NavBar = ({ currentUser }: NavBarProps) => {
  const pathname = usePathname();

  if (pathname.includes('/login') || pathname.includes('/register')) {
    return <></>;
  }

  return (
    <div className={`fixed w-full bg-white z-10 shadow-sm ${inter.className}`}>
      <div className="py-4 px-6 sm:px-10">
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
