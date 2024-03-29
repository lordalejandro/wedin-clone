'use client';

import Button from '@/components/Button';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Switch } from '@/components/ui/switch';
import { useToast } from '@/components/ui/use-toast';
import { Gift } from '@prisma/client';
import { FaCheck } from 'react-icons/fa';
import { IoAdd } from 'react-icons/io5';

type GiftCardProps = {
  gift: Gift;
};

const GiftCard = ({ gift }: GiftCardProps) => {
  const { toast } = useToast();
  const { name, description, price, id, wishListId } = gift;

  const addGiftToWishListHandler = async () => {
    try {
      const response = await fetch(`/api/wishList/${wishListId}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          giftId: id,
        }),
      });

      if (response.ok) {
        toast({
          title: 'Success',
          description: 'Gift added to your wishlist.',
          action: <FaCheck color="green" fontSize={'36px'} />,
        });
      } else {
        throw new Error('Failed to add gift to wishlist'); // Handle non-2xx responses
      }
    } catch (error) {
      console.error(error);
      toast({
        title: 'Error',
        description: 'Failed to add gift to wishlist.',
        action: <FaCheck color="red" fontSize={'36px'} />,
        className: 'bg-white',
      });
    }
  };

  return (
    <div className="border-2 rounded-xl py-6 px-4 flex flex-col gap-5 max-w-[435px]">
      <div>
        <div className="h-[212px] w-full bg-borderColor rounded-xl flex items-start justify-end"></div>
      </div>

      <div className="flex flex-col gap-1 w-full">
        <h1 className="text-primaryTitleColor font-medium text-lg">{name}</h1>

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
                  {name}
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
                  {' '}
                  Gs. {price}
                </span>
              </div>

              <DialogClose asChild>
                <Button
                  label="Añadir a mi lista"
                  icon={IoAdd}
                  onClick={addGiftToWishListHandler}
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
