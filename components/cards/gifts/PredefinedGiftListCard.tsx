import Link from "next/link";
import Button from "../../Button";
import { GoArrowRight } from "react-icons/go";

type GiftListCard = {
  img: string;
  title: string;
  description: string;
  price: string;
  id: string;
  items: string;
};

const PredefinedGiftListCard = ({
  title,
  description,
  price,
  items,
  id,
}: GiftListCard) => {
  return (
    <div className="border-2 rounded-xl py-6 px-4 flex flex-col gap-5 max-w-[320px]">
      <div>
        <div className="h-[212px] w-full bg-borderColor rounded-xl flex items-start justify-end">
          <div className="bg-white rounded-full px-5 py-1.5 flex items-center justify-center mt-4 mr-4">
            {items} regalos
          </div>
        </div>
      </div>

      <div>
        <h1 className="text-primaryTitleColor font-medium text-lg">{title}</h1>

        <p className="text-sm">{description}</p>
        <span className="text-black text-xl">Gs. {price}</span>
      </div>

      <Link href={`/lists/${id}`}>
        <Button label="Ver lista" icon={GoArrowRight} />
      </Link>
    </div>
  );
};

export default PredefinedGiftListCard;
