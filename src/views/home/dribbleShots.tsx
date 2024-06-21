import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import dribbleShotOne from "@/assets/img/dribble/dribble-shot-1.png";
import dribbleShotTwo from "@/assets/img/dribble/dribble-shot-2.png";
import dribbleShotThree from "@/assets/img/dribble/dribble-shot-3.png";
import shareIcon from "@/assets/img/icons/share.svg";

export const DribbleShots = () => {
  return (
    <section className="wrapper wrapper-space">
      <div className="container">
        <div className="titleSec">
          <p className="sec-category">WHAT’S THE LATEST?</p>
          <div className="flex items-baseline">
            <h2 className="sec-title">Dribbble Shots</h2>
            <a href="https://dribbble.com/ashiksahan" target="_blank">
              <img
                src={shareIcon}
                alt="share-icon"
                className="ml-4 w-[26px] h-[26px] md:w-9 md:h-9"
              />
            </a>
          </div>
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
        {/* <div className="w-full float-left flex justify-between gap-[70px]">
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