import dribbleShotOne from "@/assets/img/dribble/dribble-shot-1.png";
import dribbleShotTwo from "@/assets/img/dribble/dribble-shot-2.png";
import dribbleShotThree from "@/assets/img/dribble/dribble-shot-3.png";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export const DribbleShots = () => {
  return (
    <section className="wrapper wrapper-space">
      <div className="container">
        <div className="titleSec">
          <p className="sec-category">WHAT’S THE LATEST?</p>
          <h2 className="sec-title">Dribbble Shots</h2>
        </div>
        <Swiper
          loop={true}
          autoplay={{
            disableOnInteraction: true,
            pauseOnMouseEnter: true,
          }}
          breakpoints={{
            0: {
              spaceBetween: 0,
              slidesPerView: 1,
            },
            640: {
              spaceBetween: 16,
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 70,
            },
          }}
          modules={[Pagination, Navigation, Autoplay]}
        >
          <SwiperSlide>
          <div className="dribble-image-cover bg-[#E8ECED]">
            <img
              src={dribbleShotOne}
              alt="dribble-shot-1"
              loading="lazy"
              className="dribble-images"
            />
          </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className="dribble-image-cover bg-[#F1F1F1]">
            <img
              src={dribbleShotTwo}
              alt="dribble-shot-2"
              loading="lazy"
              className="dribble-images"
            />
          </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className="dribble-image-cover bg-[#E2E4F0]">
            <img
              src={dribbleShotThree}
              alt="dribble-shot-3"
              loading="lazy"
              className="dribble-images"
            />
          </div>
          </SwiperSlide>
        </Swiper>
        {/* <div className="w-full float-start flex justify-between gap-[70px]">
          <div className="dribble-image-cover bg-[#E8ECED]">
            <img
              src={dribbleShotOne}
              alt="dribble-shot-1"
              loading="lazy"
              className="dribble-images"
            />
          </div>
          <div className="dribble-image-cover bg-[#F1F1F1]">
            <img
              src={dribbleShotTwo}
              alt="dribble-shot-2"
              loading="lazy"
              className="dribble-images"
            />
          </div>
          <div className="dribble-image-cover bg-[#E2E4F0]">
            <img
              src={dribbleShotThree}
              alt="dribble-shot-3"
              loading="lazy"
              className="dribble-images"
            />
          </div>
        </div> */}
      </div>
    </section>
  );
};
