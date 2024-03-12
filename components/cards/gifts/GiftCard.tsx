"use client";

import React from "react";
import Button from "@/components/Button";
import { IoAdd } from "react-icons/io5";
import { FaCheck } from "react-icons/fa";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import { Switch } from "@/components/ui/switch";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useToast } from "@/components/ui/use-toast";

type GiftCard = {
  img: string;
  title: string;
  description: string;
  price: string;
  id: string;
};

const GiftCard = ({ title, description, price }: GiftCard) => {
  const { toast } = useToast();

  const addGiftToWishList = () => {
    toast({
      title: "Regalo añadido",
      description: "El regalo ha sido añadido a tu lista de deseos.",
      action: <FaCheck color="green" fontSize={"36px"} />,
      className: "!bg-white",
      //position: "top",
    });
  };

  return (
    <div className="border-2 rounded-xl py-6 px-4 flex flex-col gap-5 max-w-[435px]">
      <div>
        <div className="h-[212px] w-full bg-borderColor rounded-xl flex items-start justify-end"></div>
      </div>

      <div className="flex flex-col gap-1 w-full">
        <h1 className="text-primaryTitleColor font-medium text-lg">{title}</h1>

        <p className="text-secondaryTextColor">{description}</p>
        <span className="text-secondaryTitleColor text-xl">Gs. {price}</span>
      </div>

      <Dialog>
        <DialogTrigger className="flex h-full items-end">
          <Button label="Añadir a mi lista" icon={IoAdd} />
        </DialogTrigger>
        <DialogContent className="bg-white !rounded-2xl">
          <div className="flex flex-col lg:flex-row items-center justify-center w-full gap-4 sm:gap-8 pt-6 lg:pt-0">
            <div className="w-full lg:w-1/2">
              <Carousel>
                <CarouselContent>
                  <CarouselItem>
                    <div className="border rounded-2xl w-full h-[298px] sm:h-[358px] bg-secondaryBackgroundColor"></div>
                  </CarouselItem>
                  <CarouselItem>
                    <div className="border rounded-2xl w-full h-[298px] sm:h-[358px] bg-secondaryBackgroundColor"></div>
                  </CarouselItem>
                  <CarouselItem>
                    <div className="border rounded-2xl w-full h-[298px] sm:h-[358px] bg-secondaryBackgroundColor"></div>
                  </CarouselItem>
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </div>
            <div className="w-full lg:w-1/2 flex flex-col h-full justify-evenly gap-6 lg:gap-0">
              <div>
                <h1 className="text-primaryTextColor text-3xl font-medium">
                  {title}
                </h1>
                <p className="text-secondaryTextColor text-lg">{description}</p>
              </div>

              <div className="flex flex-col text-primaryTextColor text-lg gap-3">
                <div className="flex items-center justify-between space-x-2">
                  <p>Marcar como el que más queremos ⭐️</p>
                  <Switch id="favorite-gift" />
                </div>
                <div className="flex items-center justify-between space-x-2">
                  <p>Regalo grupal</p>
                  <Switch id="group-gift" />
                </div>
                <span className="text-3xl text-secondaryTitleColor font-medium">
                  {" "}
                  Gs. {price}
                </span>
              </div>

              <DialogClose asChild>
                <Button
                  label="Añadir a mi lista"
                  icon={IoAdd}
                  onClick={addGiftToWishList}
                />
              </DialogClose>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default GiftCard;
