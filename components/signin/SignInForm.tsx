'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/components/ui/use-toast';

import { signIn } from 'next-auth/react';
import { useState } from 'react';

export default function SignInForm() {
  const [Email, setEmail] = useState<null | string>(null);
  const { toast } = useToast();

  async function SignInEmail() {
    const signInResult = await signIn('email', {
      email: Email,
      callbackUrl: `${window.location.origin}/gifts`,
      redirect: false,
    });

    if (!signInResult?.ok) {
      return toast({
        title: 'well dis did not work',
        description: 'somewthing went wrong, its on you homeboy',
        variant: 'destructive',
      });
    }

    return toast({
      title: 'Verifica tu email',
      description: 'Un link de ingreso fue enviado a tu email',
      className: 'bg-white',
    });
  }

  return (
    <form className="flex flex-col gap-4" action={SignInEmail}>
      <div className="grid w-full items-center gap-3">
        <Label htmlFor="email" className="pl-1 text-secondaryTextColor">
          Email
        </Label>
        <Input
          onChange={e => setEmail(e.target.value)}
          name="email"
          type="email"
          id="email"
          placeholder="example@wedin.app"
          className="border"
        />
      </div>

      <Button
        type="submit"
        className="bg-primaryBackgroundColor w-full text-white py-2.5 rounded-lg hover:shadow-lg transition-all shadow-black"
      >
        Iniciar sesión
      </Button>
    </form>
  );
}
