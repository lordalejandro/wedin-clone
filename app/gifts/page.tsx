import React from "react";
import { getCurrentUser } from "@/app/actions/getCurrentUser";
import Container from "@/app/components/Container";
import PredefinedGiftListCard from "@/app/components/modals/gifts/PredefinedGiftListCard";
import EmptyState from "@/app/components/EmptyState";
import { IoGiftOutline } from "react-icons/io5";
import { PiCouchLight } from "react-icons/pi";
import { IoAdd } from "react-icons/io5";
import { redirect } from "next/navigation";
import { getGiftLists } from "@/app/actions/getGiftLists";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const GiftsPage = async () => {
  const currentUser = await getCurrentUser();
  const giftLists = await getGiftLists();

  console.log("Gift Lists:", giftLists);

  if (giftLists?.length === 0) return <EmptyState showReset />;

  return (
    <Container>
      <div className="min-h-screen flex flex-col justify-center">
        <h1 className="text-5xl font-medium text-primaryTextColor px-10 mt-20">
          Créa tu lista de regalos
        </h1>

        <div className="my-10">
          <div className="flex items-center gap-4 border-b border-[#D7D7D7] px-10">
            <button className="flex items-start gap-2 font-medium border-b-[3px] border-black">
              <IoGiftOutline size={20} />
              <span>Listas pre-definidas</span>
            </button>

            <button className="flex items-center gap-2 hover:text-gray-600">
              <PiCouchLight size={20} />
              <span>Todos los productos</span>
            </button>

            <button className="flex items-center gap-2 hover:text-gray-600">
              <IoAdd size={20} />
              <span>Crear regalo</span>
            </button>
          </div>

          <p className="text-gray-500 mt-10 px-10">
            Comenzá con una lista pre-definida, podes personalizarla más
            adelante
          </p>
        </div>

        <Container>
          <div className="px-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {giftLists?.map((giftList) => (
              <PredefinedGiftListCard
                title={giftList.name}
                description={giftList.description}
                img={""}
                price={giftList.totalPrice}
                id={giftList.id}
                items={giftList.quantity}
              />
            ))}
          </div>
        </Container>
      </div>
    </Container>
  );
};

export default GiftsPage;
