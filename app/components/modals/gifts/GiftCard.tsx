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

      <div>
        <h1 className="text-primaryTitleColor font-medium text-lg">{title}</h1>

        <p className="text-sm">{description}</p>
        <span className="text-black text-xl">Gs. {price}</span>
      </div>

      <div>
        <Button label="Añadir a mi lista" icon={IoAdd} />
      </div>
    </div>
  );
};

export default GiftCard;
