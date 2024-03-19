'use client';

import useLoginModal from '@/app/hooks/useLoginModal';
import useOutsideClick from '@/app/hooks/useOutsideClick';
import useRegisterModal from '@/app/hooks/useRegisterModal';
import { User } from '@prisma/client';
import { signOut } from 'next-auth/react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useCallback, useRef, useState } from 'react';
import { IoIosArrowDown } from 'react-icons/io';

import Avatar from '../Avatar';
import MenuItem from '../MenuItem';

type UserMenuProps = {
  currentUser?: User | null;
};

const UserMenu: React.FC<UserMenuProps> = ({ currentUser }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const toggleOpen = useCallback(() => {
    setIsOpen(!isOpen);
  }, [isOpen]);

  const router = useRouter();
  const registerModal = useRegisterModal();
  const loginModal = useLoginModal();

  useOutsideClick(dropdownRef, () => setIsOpen(false), isOpen);

  const handleLoginModal = useCallback(() => {
    loginModal.open();
    toggleOpen();
  }, [toggleOpen, loginModal]);

  const handleRegisterModal = useCallback(() => {
    registerModal.open();
    toggleOpen();
  }, [toggleOpen, registerModal]);

  const handleClick = (url: string) => {
    router.push(url);
    setIsOpen(false);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      {currentUser ? (
        <div className="flex flex-row items-center gap-4">
          <div className="hidden md:block text-sm">
            {currentUser?.name ? `Hola ${currentUser?.name}` : ''}
          </div>
          <div
            className="p-4 md:py-1 md:px-2 border-[1px] border-neutral-200 flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition"
            onClick={toggleOpen}
          >
            <div className="hidden md:block">
              <Avatar src={currentUser?.image} />
            </div>
            <IoIosArrowDown size={18} />
          </div>
        </div>
      ) : (
        <Link
          href="/signup"
          className="bg-primaryBackgroundColor text-white py-2 rounded-full px-5 hover:shadow-lg transition-all shadow-black"
        >
          Registrarme
        </Link>
      )}

      {isOpen && (
        <div className="absolute rounded-xl shadow-md w-[40vw] md:w-3/4 bg-white overflow-hidden right-0 top-12 text-sm">
          <div className="flex flex-col cursor-pointer">
            {currentUser ? (
              <>
                <MenuItem
                  onClick={() => handleClick('/trips')}
                  label="Mis regalos"
                />
                <MenuItem
                  onClick={() => handleClick('/favourites')}
                  label="Mis invitados"
                />
                <MenuItem
                  onClick={() => handleClick('/reservations')}
                  label="My Reservtions"
                />
                <MenuItem
                  onClick={() => handleClick('/properties')}
                  label="My properties"
                />
                <hr />
                <MenuItem onClick={() => signOut()} label="Logout" />
              </>
            ) : (
              <>
                <MenuItem onClick={handleLoginModal} label="Ingresar" />
                <MenuItem onClick={handleRegisterModal} label="Register" />
              </>
            )}
            {/* <MenuItem onClick={() => handleClick("/")} label="Listings" /> */}
          </div>
        </div>
      )}
    </div>
  );
};

export default UserMenu;
