"use client";

import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react";

export default function SingInGoogle() {
  return (
    <Button
      onClick={() =>
        signIn("google", {
          callbackUrl: `${window.location.origin}/gifts`,
        })
      }
      className="bg-secondaryBackgroundColor text-tertiaryTextColor py-1.5 px-6 rounded-lg w-[208px] hover:shadow-md transition-all shadow-black"
    >
      Google
    </Button>
  );
}
