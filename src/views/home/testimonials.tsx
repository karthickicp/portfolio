import { Swiper, SwiperSlide } from "swiper/react";

import testimonialOne from "@/assets/img/testimonial/testimonial-1.png";
import testimonialTwo from "@/assets/img/testimonial/testimonial-2.png";
import testimonialThree from "@/assets/img/testimonial/testimonial-3.png";
import testimonialFour from "@/assets/img/testimonial/testimonial-4.png";

import { Autoplay, Navigation, Pagination } from "swiper/modules";

export const Testimonials = () => {
  return (
    <section className="wrapper wrapper-space">
      <div className="container">
        <div className="titleSec">
          <p className="sec-category">TESTIMONIALS</p>
          <h2 className="sec-title">Experts About Me</h2>
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
            768: {
              spaceBetween: 16,
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
          }}
          modules={[Pagination, Navigation, Autoplay]}
        >
          <SwiperSlide className="h-auto">
            <div className="testimonial-card">
              <p className="testimonial-desc">
                I’ve had the pleasure of working with Mansoor Ashik for the past few years at VictorThemes, and I can confidently say
                he’s an exceptional UI/UX designer. His ability to understand user needs and translate them into intuitive and visually
                appealing interfaces is truly remarkable. He’s consistently goes above and beyond, always willing to put in the extra
                effort to ensure our projects are successful. He’s a valuable asset to any team and I highly recommend him to anyone
                seeking a talented and dedicated UI/UX designer.
              </p>
              <div className="profile">
                <img src={testimonialOne} alt="testimonial-one" loading="lazy" />
                <div>
                  <p className="testimonial-name">Altaf Rahman</p>
                  <p className="testimonial-role">Co-Founder, Victor Themes</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="h-auto">
            <div className="testimonial-card">
              <p className="testimonial-desc">
                Having had the opportunity to collaborate with Mansoor Ashik for several years now, I can wholeheartedly vouch for his
                expertise as a UI/UX designer. His talent for combining user-centric design principles with a keen eye for aesthetics
                consistently elevates our projects. He’s dedication and collaborative spirit are truly commendable. He readily embraces
                feedback and works seamlessly with other team members to achieve the best possible outcome. I highly recommend Ashik to
                any company seeking a top-notch UI/UX designer who can effectively translate vision into reality.
              </p>
              <div className="profile">
                <img src={testimonialTwo} alt="testimonial-two" loading="lazy" />
                <div>
                  <p className="testimonial-name">Ansif</p>
                  <p className="testimonial-role">Co-Founder, Victor Themes</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="h-auto">
            <div className="testimonial-card">
              <p className="testimonial-desc">
                Mansoor Ashik has been a fantastic UI/UX designer for our company. He's hardworking, creative, and always friendly. His
                dedication to his work is commendable, and we highly recommend Ashik for his <br /> outstanding contributions and professional
                excellence.
              </p>
              <div className="profile">
                <img src={testimonialThree} alt="testimonial-two" loading="lazy" />
                <div>
                  <p className="testimonial-name">Raj Kumar R</p>
                  <p className="testimonial-role">Co-Founder & COO, YOUNG GLOBES</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="h-auto">
            <div className="testimonial-card">
              <p className="testimonial-desc">
                I have had the pleasure of working closely with Mansoor. He is an exceptional professional who consistently
                demonstrates remarkable expertise and dedication in his field. I wholeheartedly recommend Mansoor to any organization
                or individual seeking a highly skilled professional with exceptional dedication, a collaborative spirit, and a passion
                for excellence. His contributions have consistently exceeded expectations, and I have no doubt he will continue to <br />
                thrive and make significant contributions wherever he is.
              </p>
              <div className="profile">
                <img src={testimonialFour} alt="testimonial-two" loading="lazy" className="w-20 h-20 rounded-full" />
                <div>
                  <p className="testimonial-name">Shubham</p>
                  <p className="testimonial-role">Founder & Managing Director, PAS Ventures Pvt Ltd</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};
