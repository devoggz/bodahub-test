import StoryFour from "@/components/ads/StoryFour";
import StoryOne from "@/components/ads/StoryOne";
import StoryThree from "@/components/ads/StoryThree";
import StoryTwo from "@/components/ads/StoryTwo";
import React from "react";

const page = () => {
  return (
    <div className="container-fluid mx-auto h-screen p-6 mb-16 bg-gradient-to-r from-slate-50 from-10% via-sky-50 via-30% to-emerald-50 to-90%">
      <div className="bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% rounded-tl-xl rounded-tr-xl p-6 mb-6 text-center font-bold text-2xl text-white">
        {" "}
        Vifaa na Mapambo
        <p className="text-sm text-white font-normal">
          ambavyo bike yako inahitaji
        </p>
      </div>
      <div className="flex flex-col gap-6 mb-12 ">
        <StoryFour />
      </div>
    </div>
  );
};

export default page;
