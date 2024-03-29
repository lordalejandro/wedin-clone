import { getCategory } from '@/actions/gift/getCategory';
import { getGift, GiftParams } from '@/actions/gift/getGift';
import { getGiftLists } from '@/actions/giftLists/getGiftLists';
import GiftCard from '@/components/cards/gifts/GiftCard';
import PredefinedGiftListCard from '@/components/cards/gifts/PredefinedGiftListCard';
import Container from '@/components/Container';
import EmptyState from '@/components/EmptyState';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { IoAdd, IoGiftOutline } from 'react-icons/io5';
import { PiCouchLight } from 'react-icons/pi';
import Categories from './Categories';

const GiftsPage = async ({ searchParams }: { searchParams: GiftParams }) => {
  const giftLists = await getGiftLists();
  const gifts = await getGift({ searchParams });
  const categories = await getCategory();

  if (giftLists?.length === 0) return <EmptyState showReset />;
  if (gifts?.length === 0) return <EmptyState showReset />;

  return (
    <Container>
      <div className="min-h-screen flex flex-col justify-center">
        <h1 className="text-4xl sm:text-5xl font-medium text-primaryTextColor px-10 mt-12 sm:mt-16">
          Créa tu lista de regalos
        </h1>

        <Tabs defaultValue="predefinedGift" className="">
          <TabsList className="flex items-center justify-start gap-4 my-6 sm:my-10 border-b border-[#D7D7D7] px-10 overflow-x-auto overflow-y-hidden">
            <TabsTrigger
              value="predefinedGift"
              className="flex gap-2 items-center"
            >
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
            <p className="text-secondaryTextColor text-lg sm:text-xl mb-6 sm:mb-10 px-10">
              Comenzá con una lista pre-definida, podes personalizarla más
              adelante
            </p>
            <div className="flex justify-center items-center">
              <div className="px-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 3xl:grid-cols-6 gap-8">
                {giftLists?.map(giftList => (
                  <PredefinedGiftListCard
                    key={giftList.id}
                    giftList={giftList}
                  />
                ))}
              </div>
            </div>
          </TabsContent>
          <TabsContent value="allGifts">
            <p className="text-secondaryTextColor text-lg sm:text-xl mb-6 sm:mb-8 px-10">
              Elegí los productos que más te gusten y empezá a armar tu lista
            </p>

            <Categories categories={categories} />

            <div className="flex justify-center items-center">
              <div className="px-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 3xl:grid-cols-5 gap-8">
                {gifts?.map(gift => <GiftCard key={gift.id} gift={gift} />)}
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </Container>
  );
};

export default GiftsPage;
