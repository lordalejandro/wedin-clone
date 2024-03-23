'use client';

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

const RegisterRight = () => {
  return (
    <div className="w-full max-w-lg p-0 lg:p-8 space-y-6 bg-white text-black">
      <p className="text-2xl text-center font-semibold text-primaryTextColor">
        Registrate en 3 minutos y creá tu lista de regalos
      </p>

      <div className="flex flex-col gap-4">
        <div>
          <Label htmlFor="email">Email</Label>
          <Input type="email" id="email" placeholder="example@wedin.app" />
        </div>
        <div>
          <Label htmlFor="password">Creá una contraseña</Label>
          <Input type="password" id="password" placeholder="example@wedin.app" />
        </div>
        <div>
          <Label>Tipo de evento</Label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Selecciona el tipo de evento" />
            </SelectTrigger>
            <SelectContent className='z-10 bg-white'>
              <SelectGroup>
               {/* <SelectLabel>Selecciona el tipo de evento</SelectLabel> */}
                <SelectItem value="wedding" className='cursor-pointer'>Casamiento</SelectItem>
                <SelectItem value="babyShower" className='cursor-pointer'>Baby Shower</SelectItem>
                <SelectItem value="birthday" className='cursor-pointer'>Cumpleanos</SelectItem>
                {/* <SelectItem value="grapes" className='cursor-pointer'>Grapes</SelectItem>
                <SelectItem value="pineapple" className='cursor-pointer'>Pineapple</SelectItem> */}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>

      <Button variant='primaryButton' className='rounded-lg'>
        Registarme
      </Button>

      <div className="flex flex-col items-center justify-between py-2">
        <span className="w-1/2 border-b border" />
      </div>

      <div className="flex flex-col items-center justify-center gap-2">
        <span className="text-secondaryTextColor">O registate con</span>
        <SingInFacebook />
        <SingInGoogle />
      </div>

      <Link
        href="/login"
        className="flex items-center justify-center text-secondaryTextColor"
      >
        Ya tenés una cuenta?&nbsp;
        <span className="text-indigo-600 hover:underline">Ingresá aquí</span>
      </Link>

      {/* <p className="text-center text-secondaryTextColor">
        Ya tenés una cuenta?{' '}
        <a href="#" className="text-indigo-600 hover:underline">
          Ingresá aquí
        </a>
      </p> */}
    </div>
  );
};

export default RegisterRight;
