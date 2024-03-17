//import Input from "../components/inputs/Input";
// import { Button } from "@/components/ui/button";
// import { getServerSession } from "next-auth";
// import { authOptions } from "../utils/auth";
// import { redirect } from "next/navigation";
import Logo from './Logo';
import RegisterRight from './RegisterRight';
import RegisterLeft from './RegisterLeft';

const SingUpPage = async () => {
  //const [isLoading, setIsLoading] = useState(false);
  // const session = await getServerSession(authOptions);

  // if (session) {
  //   redirect("/");
  // }

  /* const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: { email: "", password: "" },
  }); */

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-black gap-16 px-10">
      <div>
        <Logo />
      </div>

      <div className="flex-col lg:flex-row flex items-center justify-center w-full gap-4">
        <div className="w-3/5 hidden lg:flex items-center justify-center">
          <RegisterLeft />
        </div>
        <div className="w-full lg:w-2/5 flex items-center justify-center">
          <RegisterRight />
        </div>
      </div>
    </div>
  );
};

export default SingUpPage;
