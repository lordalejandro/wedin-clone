import Container from "@/app/components/Container";
import { getCurrentUser } from "./actions/getCurrentUser";
import EmptyState from "@/app/components/EmptyState";
import GiftCard from "./components/modals/gifts/GiftCard";
import { IoGiftOutline } from "react-icons/io5";
import { PiCouchLight } from "react-icons/pi";
import { IoAdd } from "react-icons/io5";



export default async function Home() {
  const currentUser = await getCurrentUser();

  return (
    <Container>
      <div className="min-h-screen flex flex-col justify-center">

        <h1 className="text-5xl font-medium text-primaryTextColor px-10">Créa tu lista de regalos</h1>
      
        <div className="my-10">

          <div className="flex items-center gap-4 border-b border-[#D7D7D7] px-10">
            <button className="flex items-start gap-2 font-medium border-b-[3px] border-black">
              <IoGiftOutline size={20} />
              <span>
                Listas pre-definidas
              </span>
            </button>

            <button className="flex items-center gap-2 hover:text-gray-800">
              <PiCouchLight size={20} />
              <span>
                Todos los productos
              </span>
            </button>

            <button className="flex items-center gap-2 hover:text-gray-800">
              <IoAdd size={20} />
              <span>
                Crear regalo
              </span>
            </button>
          </div>

          <p className="text-gray-500 mt-10 px-10">
            Comenzá con una lista pre-definida, podes personalizarla más adelante
          </p>
        </div>

        <div className="px-10">
          <GiftCard />
        </div>
      </div>
    </Container>
  );
}
