"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

const formSchema = z.object({
  username: z.string().min(2).max(50),
})

const OnboardingForm = () => {
 

  return (
    <div>
        hello world!
    </div>
  );
};

export default OnboardingForm;
