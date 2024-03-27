import { getCurrentUser } from '@/actions/getCurrentUser';
import { redirect } from 'next/navigation';
import { CiImageOn } from "react-icons/ci";
import Logo from './Logo';
import OnboardingForm from './OnboardingForm';

const OnboardingPage = async () => {
  const currentUser = await getCurrentUser();
  console.log(currentUser);
  /* if (!currentUser) {
    redirect('/login');
  } */
  return (
    <div className="flex-col lg:flex-row flex items-center justify-center w-full gap-4 px-10 min-h-[82vh]">
        <div className="w-2/5 hidden lg:flex items-center justify-center">
          <div className='bg-[#F3F4F6] w-full h-[600px] flex items-center justify-center rounded-xl'><CiImageOn fontSize={'54px'} color='#A1A1AA' /></div>
        </div>
        <div className="w-full lg:w-3/5 flex items-center justify-center">
          <div className='flex flex-col gap-8 items-center jsutify-center'>
            <Logo />
            <p className='text-3xl text-primaryTextColor text-center font-medium'>Antes de empezar, necesitamos unos datos </p>
          </div>

          {/* <OnboardingForm /> */}
        </div>
      </div>
  );
};

export default OnboardingPage;
