"use client";

import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { register } from "swiper/element/bundle";
import CardProject from "./cardProject";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
register();

const Carousel = () => {
    return (
        <div className="w-full ">
            <Swiper
                pagination={{ clickable: true }}
                modules={[Pagination]}
                spaceBetween={100}
                slidesPerView="auto"
                slidesPerGroup={1}
                className=" h-[300px]"
            >
                <SwiperSlide>
                    <CardProject />
                </SwiperSlide>

                <SwiperSlide>
                    <CardProject />
                </SwiperSlide>
                <SwiperSlide>
                    <CardProject />
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Carousel;
