"use client";

import Login from "@/components/auth/login";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { Image, Link } from "@nextui-org/react";
import { LoginButton } from "@/components/auth/login-button";

export default function App() {
  return (
    <div className="container h-screen flex flex-col gap-4 items-center justify-center  p-2 bg-gradient-to-r from-indigo-50 from-10% via-sky-50 via-30% to-emerald-50 to-90%   ">
      <Image
        isZoomed
        src="/images/home.png"
        alt="welcome"
        height={400}
        className="w-full object-cover"
      />
      <div className="flex flex-col p-4 items-center justify-center   ">
        <h2
          className="text-6xl font-bold p-4 text-bhgreen 
            animate-text"
        >
          BodaHub
        </h2>
        <p className="text-slate-500 text-wrap font-bold text-sm w-[220px] text-center">
          Tujengane kama wanaboda wa Kenya
          <span className="text-sm font-semibold text-bhpink ">
            Tuchanuane, Tuinuane!
          </span>
        </p>
      </div>
      <LoginButton>
        <Button className="bg-bhgreen" size="lg">
          Jiunge sasa
        </Button>
      </LoginButton>
    </div>
  );
}
