import Container from "../components/Container";
import { getCurrentUser } from "@/actions/getCurrentUser";
import { IoGiftOutline } from "react-icons/io5";
import { PiCouchLight } from "react-icons/pi";
import { IoAdd } from "react-icons/io5";

export default async function Home() {
  const currentUser = await getCurrentUser();

  return (
    <Container>
      <div className="min-h-screen flex flex-col justify-center">
        landing page
      </div>
    </Container>
  );
}
