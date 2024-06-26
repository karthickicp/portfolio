import { CERTIFICATIONS } from "@/constants";

import { Pagination, Navigation, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import certificateOne from "@/assets/img/certificate/certificate-1.png";
import certificateTwo from "@/assets/img/certificate/certificate-2.png";
import certificateThree from "@/assets/img/certificate/certificate-3.png";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useRef } from "react";

export const MyLearning = () => {
  const sliderRef = useRef(null);
  return (
    <section className="wrapper wrapper-space">
      <div className="container">
        <div className="titleSec">
          <p className="sec-category">MY LEARNING</p>
          <h2 className="sec-title ">Course Certifications</h2>
        </div>

        <div className="w-full flex flex-col-reverse items-center gap-[30px] lg:gap-[140px] lg:flex-row">
          <div className="w-full divide-y divide-[#6465674D] flex-1">
            {CERTIFICATIONS.map((certificate, index) => (
              <div key={`certificate-${index}`} className="py-4 lg:py-6">
                <p className="title-secondary mb-2 text-black font-bold tracking-space-2 lg:text-[34px] lg:leading-[49.98px] lg:mb-[10px]">
                  {certificate.title}
                </p>
                <p className="text-paragraph tracking-space-2">{certificate.date}</p>
              </div>
            ))}
          </div>
          <Swiper
            ref={sliderRef}
            slidesPerView={1}
            spaceBetween={24}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: true,
              pauseOnMouseEnter: true,
            }}
            speed={2000}
            modules={[Pagination, Navigation, Autoplay]}
            className="mySwiper flex-1 w-full max-w-[520px]"
          >
            <SwiperSlide>
              <img src={certificateOne} alt="certificate-1" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={certificateTwo} alt="certificate-2" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={certificateThree} alt="certificate-3" />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
};
