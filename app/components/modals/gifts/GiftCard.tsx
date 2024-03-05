import React from "react";
import Button from "../../Button";
import { IoAdd } from "react-icons/io5";

type GiftCard = {
  img: string;
  title: string;
  description: string;
  price: string;
  id: string;
};

const GiftCard = ({ title, description, price }: GiftCard) => {
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

      <div className="flex h-full items-end">
        <Button label="Añadir a mi lista" icon={IoAdd} />
      </div>
    </div>
  );
};

export default GiftCard;
