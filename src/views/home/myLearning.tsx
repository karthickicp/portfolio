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

        <div className="flex items-center gap-[140px]">
          <div className="divide-y divide-[#6465674D] flex-1">
            {CERTIFICATIONS.map((certificate, index) => (
              <div key={`certificate-${index}`} className="py-6">
                <p className="text-[34px] leading-[49.98px] mb-[10px] text-black font-bold">
                  {certificate.title}
                </p>
                <p className="text-paragraph tracking-wide">
                  {certificate.date}
                </p>
              </div>
            ))}
          </div>
          <Swiper
            ref={sliderRef}
            slidesPerView={1}
            spaceBetween={24}
            loop={true}
            autoplay={true}
            modules={[Pagination, Navigation, Autoplay]}
            className="mySwiper flex-1"
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
