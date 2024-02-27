import { getServerSession } from "next-auth";
import Image from "next/image";
import Link from 'next/link';
import { authOptions } from "./utils/auth";
import LogoutButton from "./components/LogoutButton";

export default async function Home() {
  const session = await getServerSession(authOptions);

  return (
    <div className="flex items-center justify-center flex-col h-[100vh] gap-4">
      <h1>landing page</h1>
      {session ? (
        <div className="flex flex-col items-center justify-center gap-2">
          <h1 className="font-bold">you are logged in</h1>
          <LogoutButton />
        </div>
      ) : (
        <Link href="/signup" className="bg-black text-white px-6 py-1.5 rounded-lg">sign in</Link>
      )}
    </div>
  );
}
