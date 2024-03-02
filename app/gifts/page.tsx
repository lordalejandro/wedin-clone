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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const GiftsPage = async () => {
  const currentUser = await getCurrentUser();
  const giftLists = await getGiftLists();

  /* console.log("Gift Lists:", giftLists); */

  if (giftLists?.length === 0) return <EmptyState showReset />;

  return (
    <Container>
      <div className="min-h-screen flex flex-col justify-center">
        <h1 className="text-4xl sm:text-5xl font-medium text-primaryTextColor px-10 mt-20">
          Créa tu lista de regalos
        </h1>

        <Tabs defaultValue="predefinedGift" className="">
          <TabsList className="flex items-center justify-start gap-4 my-10 border-b border-[#D7D7D7] px-10 overflow-x-auto overflow-y-hidden">
            <TabsTrigger value="predefinedGift" className="flex gap-2 items-center">
              <IoGiftOutline size={24} className="mb-[2.5px]" />
              <span>Listas pré-definidas</span>
            </TabsTrigger>
            <TabsTrigger value="allGifts" className="flex gap-2 items-end">
              <PiCouchLight size={24} className="mb-[2.5px]" />
              <span>Todos los productos</span>
            </TabsTrigger>
            <TabsTrigger value="createGift" className="flex gap-2 items-center">
              <IoAdd size={24} />
              <span>Crear regalo</span>
            </TabsTrigger>
          </TabsList>
          <TabsContent value="predefinedGift">
            <p className="text-secondaryTextColor text-xl mb-10 px-10">
              Comenzá con una lista pre-definida, podes personalizarla más
              adelante
            </p>
            <div className="flex justify-center items-center">
              <div className="px-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 3xl:grid-cols-6 gap-8">
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
            </div>
          </TabsContent>
          <TabsContent value="allGifts">
            <p className="text-gray-500 mb-10 px-10">
              Elegí los productos que más te gusten y empezá a armar tu lista
            </p>
            <div className="px-10">all gifts</div>
          </TabsContent>
        </Tabs>
      </div>
    </Container>
  );
};

export default GiftsPage;
