import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import dribbleShotOne from "@/assets/img/dribble/dribble-shot-1.png";
import dribbleShotTwo from "@/assets/img/dribble/dribble-shot-2.png";
import dribbleShotThree from "@/assets/img/dribble/dribble-shot-3.png";
import dribbleShotFour from "@/assets/img/dribble/dribble-shot-4.png";
import dribbleShotFive from "@/assets/img/dribble/dribble-shot-5.png";
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
              <img src={shareIcon} alt="share-icon" className="ml-4 w-[26px] h-[26px] md:w-9 md:h-9" />
            </a>
          </div>
        </div>
        <Swiper
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: true,
            pauseOnMouseEnter: true,
          }}
          speed={2000}
          breakpoints={{
            0: {
              spaceBetween: 16,
              slidesPerView: 1,
            },
            640: {
              spaceBetween: 16,
              slidesPerView: 2,
            },
            1024: {
              spaceBetween: 32,
              slidesPerView: 2,
            },
            1280: {
              slidesPerView: 3,
              spaceBetween: 70,
            },
          }}
          modules={[Pagination, Navigation, Autoplay]}
        >
          <SwiperSlide>
            <div className="dribble-image-cover">
              <img
                src={dribbleShotOne}
                alt="dribble-shot-1"
                loading="lazy"
                className="dribble-images"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="dribble-image-cover">
              <img
                src={dribbleShotTwo}
                alt="dribble-shot-2"
                loading="lazy"
                className="dribble-images"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="dribble-image-cover">
              <img
                src={dribbleShotThree}
                alt="dribble-shot-3"
                loading="lazy"
                className="dribble-images"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="dribble-image-cover">
              <img
                src={dribbleShotFour}
                alt="dribble-shot-4"
                loading="lazy"
                className="dribble-images"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="dribble-image-cover">
              <img
                src={dribbleShotFive}
                alt="dribble-shot-5"
                loading="lazy"
                className="dribble-images"
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};
