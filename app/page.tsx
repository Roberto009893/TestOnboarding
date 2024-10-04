"use client";

import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import { DoubleArrowRightIcon } from "@radix-ui/react-icons";

export default function Home() {
  const router = useRouter();

  const handleStartOnboarding = () => {
    router.push("/onboarding");
  }

  return (
    <div className="w-full h-screen flex justify-center items-center">
      <Button className="min-w-[20rem] w-auto bg-blue-500 text-2xl text-center font-bold border border-blue-500 p-8 hover:bg-white hover:text-blue-500"
        onClick={handleStartOnboarding}>
        Baserow Onboarding
        <span className="text-[2rem] ml-6 inline-block">
          <DoubleArrowRightIcon />
        </span>
      </Button>
    </div>
  );
}
