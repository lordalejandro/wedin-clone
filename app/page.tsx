import { getServerSession } from "next-auth";
import Link from 'next/link';
import { authOptions } from "./utils/auth";
import LogoutButton from "./components/LogoutButton";
import Container from "@/app/components/Container";
import { getCurrentUser } from "./actions/getCurrentUser";
import EmptyState from "@/app/components/EmptyState";

export default async function Home() {
  const currentUser = await getCurrentUser();

  return (
    <div className="flex items-center justify-center flex-col h-[100vh] gap-4">
      <h1>landing page</h1>
      {currentUser ? (
        <div className="flex flex-col items-center justify-center gap-2">
          <h1 className="font-bold">you are logged in as {currentUser?.user_types}</h1>
          <div className="flex items-center justify-center gap-3">
            <LogoutButton />
            <button className="bg-black text-white py-1.5 px-6 rounded-lg">go to {currentUser?.user_types} dashboard</button>
          </div>
        </div>
      ) : (
        <Link href="/signup" className="bg-black text-white px-6 py-1.5 rounded-lg">sign in</Link>
      )}
    </div>
  );
}
