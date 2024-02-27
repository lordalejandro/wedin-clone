import React from "react";
//import Input from "../components/inputs/Input";
//import { FieldValues, useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import SingInFacebook from "../components/SignInFacebook";
import SingInGoogle from "../components/SignInGoogle";
import { getServerSession } from "next-auth";
import { authOptions } from "../utils/auth";
import { redirect } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import SignInForm from "../components/SignInForm";

const SingUpPage = async () => {
  //const [isLoading, setIsLoading] = useState(false);
  const session = await getServerSession(authOptions);

  if (session) {
    redirect("/");
  }

  /* const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: { email: "", password: "" },
  }); */

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-black bg-black">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold">wedin</h1>
        <p className="text-lg">
          Registrate en 1 minuto y crea tu lista de regalos
        </p>

        {/* <form className="space-y-4">
          <Input
            id="email"
            label="Email"
            type="email"
            disabled={isLoading}
            errors={errors}
            register={register}
            required
          />
          <Input
            id="password"
            label="Contraseña"
            type="password"
            disabled={isLoading}
            errors={errors}
            register={register}
            required
          />
        </form> */}

        <SignInForm />

        <div className="flex flex-col items-center justify-between">
          <span className="w-1/2 border-b border" />
        </div>

        <div className="flex flex-col items-center justify-center gap-2">
          <span className="text-gray-500">O registate con</span>
          <SingInFacebook />
          <SingInGoogle />
        </div>

        <p className="text-center">
          Ya tenés una cuenta?{" "}
          <a href="#" className="text-indigo-600 hover:underline">
            Ingresá aquí
          </a>
        </p>
      </div>
    </div>
  );
};

export default SingUpPage;
