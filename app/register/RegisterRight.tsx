'use client';

import { useState } from 'react';
import SingInFacebook from '@/components/signin/SignInFacebook';
import SingInGoogle from '@/components/signin/SignInGoogle';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Link from 'next/link';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { IoIosHeartEmpty } from 'react-icons/io';
import { IoGiftOutline, IoEyeOffOutline, IoEyeOutline } from 'react-icons/io5';
import { LuPartyPopper } from 'react-icons/lu';
import { toast } from '@/components/ui/use-toast';
import { MdErrorOutline } from 'react-icons/md';
import { useRouter } from 'next/navigation';
import { signIn } from 'next-auth/react';
// import { getCurrentUser } from '@/actions/getCurrentUser';

const RegisterRight = () => {
  // const currentUser = await getCurrentUser();
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    const response = await fetch('/api/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password,
        userType: 'COUPLE',
      }),
    });

    const data = await response.json();
    if (response.ok) {
      const loginResponse = await signIn('credentials', {
        redirect: false,
        email,
        password,
      });
      if (loginResponse?.ok) {
        console.log(loginResponse);
        router.push('/onboarding');
      } else {
        toast({
          variant: 'destructive',
          title: 'Error al iniciar sesion',
          description: 'Por favor intente de nuevo.',
          action: <MdErrorOutline fontSize={'52px'} />,
        });
      }
    } else {
      if (data.error === 'Email already in use') {
        toast({
          variant: 'destructive',
          title: 'Uh oh!',
          description: 'Este email ya esta registrado.',
          action: <MdErrorOutline fontSize={'52px'} />,
        });
      } else {
        toast({
          variant: 'destructive',
          title: 'Uh oh! Ocurrio un error',
          description: 'Ocurrio un error al crear tu cuenta, intenta de vuelta',
          action: <MdErrorOutline />,
        });
      }
    }
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newPassword = event.target.value;
    setPassword(newPassword);

    const inputElement = event.target as HTMLInputElement;

    if (newPassword.length > 0 && newPassword.length < 8) {
      inputElement.setCustomValidity(
        'La contraseña debe tener al menos 8 caracteres.'
      );
    } else {
      inputElement.setCustomValidity('');
    }
  };

  return (
    <div className="w-full max-w-lg p-0 lg:p-8 bg-white text-black">
      <form onSubmit={handleSubmit} className=" flex flex-col gap-8">
        <p className="text-2xl sm:text-3xl text-center font-semibold text-primaryTextColor">
          Registrate en 3 minutos y creá tu lista de regalos
        </p>

        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <Label htmlFor="email" className="font-normal">
              Email
            </Label>
            <Input
              required
              type="email"
              id="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="example@wedin.app"
            />
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="password" className="font-normal">
              Creá una contraseña
            </Label>
            <div className="flex">
              <Input
                required
                type={isPasswordVisible ? 'text' : 'password'}
                id="password"
                value={password}
                onChange={handlePasswordChange}
                placeholder="Wedin!538461$"
                minLength={8}
                onInvalid={(event: React.InvalidEvent<HTMLInputElement>) =>
                  event.target.setCustomValidity(
                    'La contraseña debe tener al menos 8 caracteres.'
                  )
                }
                onInput={(event: React.FormEvent<HTMLInputElement>) =>
                  event.currentTarget.setCustomValidity('')
                }
              />
              <button
                type="button"
                onClick={() => setIsPasswordVisible(!isPasswordVisible)}
                className="ml-[-32px]"
              >
                {isPasswordVisible ? (
                  <IoEyeOffOutline size={20} />
                ) : (
                  <IoEyeOutline size={20} />
                )}
              </button>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <Label>Tipo de evento</Label>
            <Select disabled>
              <SelectTrigger>
                <SelectValue placeholder="Selecciona el tipo de evento" />
              </SelectTrigger>
              <SelectContent className="z-10 bg-white">
                <SelectGroup>
                  <SelectItem
                    value="wedding"
                    className="border-b-[1px]"
                    defaultChecked
                  >
                    <div className="flex items-center gap-2 cursor-pointer">
                      <IoIosHeartEmpty fontSize={'18px'} />
                      <span>Boda</span>
                    </div>
                  </SelectItem>
                  <SelectItem value="birthday" className="border-b-[1px]">
                    <div className="flex items-center gap-2 cursor-pointer">
                      <IoGiftOutline fontSize={'18px'} />
                      <span>Cumpleaños</span>
                    </div>
                  </SelectItem>
                  <SelectItem value="other">
                    <div className="flex items-center gap-2 cursor-pointer">
                      <LuPartyPopper fontSize={'18px'} />
                      <span>Otros</span>
                    </div>
                  </SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>

        <Button type="submit" variant="primaryButton" className="rounded-lg">
          Registarme
        </Button>
      </form>

      <div className="flex flex-col items-center justify-between py-8">
        <span className="w-1/2 border-b border" />
      </div>

      <div className="flex flex-col items-center justify-center gap-2">
        <span className="text-secondaryTextColor">O registate con</span>
        <SingInFacebook />
        <SingInGoogle />
      </div>

      <Link
        href="/login"
        className="flex items-center justify-center text-secondaryTextColor mt-6"
      >
        Ya tenés una cuenta?&nbsp;
        <span className="text-indigo-600 hover:underline">Ingresá aquí</span>
      </Link>
    </div>
  );
};

export default RegisterRight;
