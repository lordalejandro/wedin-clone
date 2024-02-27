"use client";

import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react";

export default function SingInGoogle() {
  return (
    <Button
      onClick={() =>
        signIn("google", {
          callbackUrl: `${window.location.origin}`,
        })
      }
      className="secondary bg-black text-white py-1.5 px-6 rounded-lg"
    >
      Google
    </Button>
  );
}
