"use client";

import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css/pagination";
import "swiper/css";

// import required modules
import { Pagination } from "swiper/modules";

const HomeCategoryBlock = () => {
  const router = useRouter();
  return (
    <main className=" sticky">
      <Swiper
        slidesPerView={1.5}
        spaceBetween={20}
        modules={[Pagination]}
        className="w-full mb-4"
      >
        <SwiperSlide>
          <Card shadow="sm">
            <CardBody className="overflow-visible p-0">
              <Image
                isZoomed
                shadow="sm"
                radius="lg"
                width="100%"
                alt="cat"
                className="w-full object-cover h-[120px]"
                src="/images/tushirikiane.jpg"
              />
            </CardBody>
            <CardFooter className="cursor-pointer text-small justify-between">
              <div
                onClick={() => router.push("/tushirikiane-tufaulu")}
                className="text-sm font-semibold"
              >
                Tushirikiane Tufaulu
              </div>
            </CardFooter>
          </Card>
        </SwiperSlide>
        <SwiperSlide>
          <Card shadow="sm">
            <CardBody className="overflow-visible p-0">
              <Image
                isZoomed
                shadow="sm"
                radius="lg"
                width="100%"
                alt="cat"
                className="w-full object-cover h-[120px]"
                src="/images/sacco.jpg"
              />
            </CardBody>
            <CardFooter className="cursor-pointer text-small justify-between">
              <div
                onClick={() => router.push("/sacco-zitujenge")}
                className="text-sm font-semibold"
              >
                Sacco Zitujenge
              </div>
            </CardFooter>
          </Card>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <Card shadow="sm">
            <CardBody className="overflow-visible p-0">
              <Image
                isZoomed
                shadow="sm"
                radius="lg"
                width="100%"
                alt="cat"
                className="w-full object-cover h-[120px]"
                src="/images/bikeyangu.jpg"
              />
            </CardBody>
            <CardFooter className="cursor-pointer text-small justify-between">
              <div
                onClick={() => router.push("/bike-yangu")}
                className="text-sm font-semibold"
              >
                Yaani Bike Yangu Inanibamba
              </div>
            </CardFooter>
          </Card>
        </SwiperSlide>
      </Swiper>
    </main>
  );
};

export default HomeCategoryBlock;
