import React from "react";
import Button from "../../Button";
import { IoAdd } from "react-icons/io5";

const GiftCard = () => {
  return (
    <div className="flex flex-col gap-10">
      <div className="flex items-center gap-4">
        <div className="bg-primaryBackgroundColor text-white rounded-full py-1 px-3">Todos</div>
        <div className="border border-backgroundTextColor text-primaryTextColor py-1 px-3 rounded-full">Luna de miel</div>
        <div className="border border-backgroundTextColor text-primaryTextColor py-1 px-3 rounded-full">Casa</div>
        <div className="border border-backgroundTextColor text-primaryTextColor py-1 px-3 rounded-full">Construccion y reformas</div>
      </div>
      <div className="border-2 rounded-xl py-6 px-4 flex flex-col gap-5 max-w-[435px]">
        <div>
          <div className="h-[212px] w-full bg-borderColor rounded-xl flex items-start justify-end">
          </div>
        </div>

        <div>
          <h1 className="text-primaryTitleColor font-medium text-lg">
            Cena romantica
          </h1>

          <p className="text-sm">Precio</p>
          <span className="text-black text-xl">Gs. 1.000.000</span>
        </div>

        <div>
          <Button label="Añadir a mi lista" icon={IoAdd} />
        </div>
      </div>
    </div>
  );
};

export default GiftCard;
