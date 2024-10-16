"use client";

import "next-cloudinary/dist/cld-video-player.css";
import ReactPlayer from "react-player";

export default function SaccoZitujenge() {
  return (
    <div className="container mx-auto p-6 mb-8 bg-gradient-to-r from-slate-50 from-10% via-sky-50 via-30% to-emerald-50 to-90%">
      <div className="bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% rounded-tl-xl rounded-tr-xl p-6 mb-4 text-center font-bold text-2xl text-white">
        {" "}
        Sacco Zitujenge
        <p className="text-sm text-white font-normal">
          Vile sacco zimeweza kusaidia wanaboda{" "}
        </p>
      </div>
      <div className="grid grid-cols-1 gap-12 mt-6 ">
        <div className="lg:col-span-12 col-span-1 space-y-3">
          <div className="overflow-hidden rounded-2xl  border border-gray-28 bg-blend-soft-light bg-white  shadow-sm">
            <ReactPlayer
              url="https://utfs.io/f/msHXJUCYPHtu5c63hd1t5d4q1b02LinFBPEVIfc3DZGlupv8"
              className="react-player"
              width="100%"
              height="100%"
              controls={true}
              playing={false}
              onError={(e) => console.error("Error playing video: ", e)}
            />
          </div>
          <div className="overflow-hidden rounded-2xl  border border-gray-28 bg-blend-soft-light bg-white  shadow-sm">
            <ReactPlayer
              url="https://utfs.io/f/msHXJUCYPHtu3VIE0UfYHRW8FAcqGeiz2M6PKujmBnkpSX1Q"
              className="react-player"
              width="100%"
              height="100%"
              controls={true}
              playing={false}
              onError={(e) => console.error("Error playing video: ", e)}
            />
          </div>
          <div className="overflow-hidden rounded-2xl  border border-gray-28 bg-blend-soft-light bg-white  shadow-sm">
            <ReactPlayer
              url="https://utfs.io/f/msHXJUCYPHtuWjJU55bJBbGXAOw9NYRPU8mZLWld3eDuQM1s"
              className="react-player"
              width="100%"
              height="100%"
              controls={true}
              playing={false}
              onError={(e) => console.error("Error playing video: ", e)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
