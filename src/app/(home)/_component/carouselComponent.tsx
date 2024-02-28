import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { register } from "swiper/element/bundle";
import CardProject from "./cardProject";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { db } from "@/app/_lib/prisma";
register();

const Carousel = async () => {
    const projects = await db.project.findMany({});

    return (
        <div className="w-full flex">
            {projects.map((project: any) => (
                <CardProject cardProject={project} key={project} />
            ))}
        </div>
    );
};

export default Carousel;
