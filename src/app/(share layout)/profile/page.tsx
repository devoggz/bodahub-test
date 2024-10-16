"use client";

import { Chip, Image, Link } from "@nextui-org/react";
import { Button } from "@/components/ui/button";

import { DotFilledIcon } from "@radix-ui/react-icons";
import RegionalChampions from "@/components/RegionalChampions";

import { logout } from "../../../../actions/auth";
import { useCurrentUser } from "@/hooks/use-current-user";
import StageMap from "@/components/StageMap";
import Leaderboard from "@/components/Leaderboard";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { useState } from "react";
import AddMemberForm from "@/components/add-stage/AddMemberForm";

const Profile = () => {
  const [open, setOpen] = useState(false);

  const user = useCurrentUser();

  return (
    <div className="container-fluid mx-auto p-3 space-y-6  mb-12 ">
      <div className=" flex flex-col mt-6 items-center justify-center min-h-72 mb-6 rounded-xl ">
        <div className="border-2 border-emerald-500 p-1 mb-4 rounded-full ">
          <Image
            src={user?.image || "/images/avatar.png"}
            alt="avatar"
            height={100}
            width={100}
            className="rounded-full object-cover"
          />
        </div>
        <p className="mt-4 text-xl text-slate-900 font-bold ">{user?.name}</p>
        {/* <p className="text-sm text-slate-500 mb-4">{session?.user?.riderType}</p> */}
        <Chip
          startContent={<DotFilledIcon className="text-emerald-500 h-8 w-8" />}
          className="bg-emerald-100 font-semibold text-emerald-700  mt-4"
        >
          Active Member
        </Chip>
        {/* <p className="text-sm">10 days remaining</p> */}

        <div className="w-full grid grid-cols-2 gap-6 mt-6  mb-3">
          <div className="bg-white shadow-sm border border-emerald-100  flex flex-row p-4 rounded-xl gap-4 items-center justify-center">
            <Image src="/images/trophy.png" alt="icon" width={50} height={50} />
            <div className="flex flex-col items-start justify-start">
              <p className="text-sm font-semibold ">Points</p>
              <p
                className="text-xl font-bold text-transparent rounded-lg bg-clip-text bg-gradient-to-r    
            from-orange-300 from-10% via-sky-500 via-30% to-emerald-500 to-90% 
            animate-text"
              >
                5{/* {user?.points} */}
              </p>
            </div>
          </div>

          <div className="bg-white shadow-sm flex flex-row border border-emerald-100 p-4 rounded-xl gap-4 items-center justify-center">
            <Image src="/images/medal.png" alt="icon" width={50} height={50} />
            <div className="flex flex-col items-start justify-start">
              <p className="text-sm font-semibold ">Level</p>
              <p
                className="text-lg font-bold text-transparent rounded-lg bg-clip-text bg-gradient-to-r    
            from-sky-300 from-10% via-sky-500 via-30% to-emerald-500 to-90% 
            animate-text"
              >
                Novice
                {/* {user?.level} */}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4 mb-12">
        <Link
          className="bg-[#006fee] flex flex-wrap p-2 text-center justify-center text-white text-sm rounded-lg"
          href="https://whatsapp.com/channel/0029VaphVzyKLaHuuL3S8k1J"
        >
          Join Our WhatsApp
        </Link>
        <Link
          className="bg-[#006fee] flex flex-wrap p-2 text-center justify-center text-white text-sm rounded-lg"
          href="/stage"
        >
          Add Stage
        </Link>
      </div>
      <div className="mt-3 mb-3">
        <Drawer open={open} onOpenChange={setOpen}>
          <DrawerTrigger asChild>
            <Button variant="outline" className=" w-full">
              Add Stage Members
            </Button>
          </DrawerTrigger>
          <DrawerContent>
            <DrawerHeader className="text-left">
              <DrawerTitle>Add Stage Members</DrawerTitle>
            </DrawerHeader>
            <div className="p-4">
              <AddMemberForm />
            </div>
            <DrawerFooter className="pt-2">
              <DrawerClose asChild>
                <Button variant="outline">Exit</Button>
              </DrawerClose>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </div>
      <div className="w-full">
        {/* <RegionalChampions />
        <Leaderboard /> */}
      </div>

      <StageMap />

      <Button
        className="w-full mt-12 mb-12 bg-destructive/15 text-red-600 hover:bg-destructive/20"
        onClick={() => logout()}
      >
        Logout
      </Button>
    </div>
  );
};

export default Profile;
