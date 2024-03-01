"use client";

import SingInFacebook from "../components/SignInFacebook";
import SingInGoogle from "../components/SignInGoogle";
import SignInForm from "../components/SignInForm";

const RegisterRight = () => {
  return (
    <div className="w-full max-w-md p-8 space-y-6 bg-white text-black">
      <p className="text-2xl text-center font-semibold text-primaryTextColor">
        Registrate en 1 minuto y creá tu lista de regalos
      </p>

      <SignInForm />

      <div className="flex flex-col items-center justify-between">
        <span className="w-1/2 border-b border" />
      </div>

      <div className="flex flex-col items-center justify-center gap-2">
        <span className="text-secondaryTextColor">O registate con</span>
        <SingInFacebook />
        <SingInGoogle />
      </div>

      <p className="text-center text-secondaryTextColor">
        Ya tenés una cuenta?{" "}
        <a href="#" className="text-indigo-600 hover:underline">
          Ingresá aquí
        </a>
      </p>
    </div>
  );
};

export default RegisterRight;
