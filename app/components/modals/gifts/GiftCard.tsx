import Button from '../../Button';
import { GoArrowRight } from "react-icons/go";

const GiftCard = () => {
  return (
    <div className='border-2 rounded-xl py-6 px-4 flex flex-col gap-5 max-w-[304px]'>
        <div>
            <div className='h-[202px] w-[268px] bg-borderColor rounded-xl'></div>
        </div>

        <div>
            <h1 className='text-primaryTitleColor font-medium text-lg'>Luna de miel grande</h1>

            <p className='text-sm'>Total de la lista</p>
            <span className='text-black text-xl'>Gs. 56.713.000</span>
        </div>

        <div>
            <Button label='Ver lista' icon={GoArrowRight}/>
        </div>
    </div>
  )
}

export default GiftCard
