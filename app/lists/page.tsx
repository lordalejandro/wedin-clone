import { getCurrentUser } from "@/app/actions/getCurrentUser";
import Container from "@/app/components/Container";
import PredefinedGiftListCard from "@/app/components/modals/gifts/PredefinedGiftListCard";
import EmptyState from "@/app/components/EmptyState";
import { IoGiftOutline } from "react-icons/io5";
import { PiCouchLight } from "react-icons/pi";
import { IoAdd } from "react-icons/io5";
import { redirect } from "next/navigation";

export default async function PredefinedGiftsPage() {
  return (
    <Container>
      <div className="px-10">
        <PredefinedGiftListCard title={"Luna de miel grande"} description={"Total de la lista"} img={""} price={"56.713.000"} id={0} items={"35"} />
      </div>
    </Container>
  );
}
