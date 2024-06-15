import { MY_PROJECTS } from "@/constants";
import arrowRight from "@/assets/img/icons/arrow-right.svg";
export const MyWorks = () => {
  return (
    <section className="wrapper wrapper-space">
      <div className="container">
        <p className="sec-category">MY PORTFOLIO</p>
        <h2 className="sec-title mb-5 lg:mb-10">Selected Works</h2>
        <p className="text-[#666] para-text">
          I've worked on lots of different projects, leading efforts to understand users and turn that understanding into designs that
          just make sense. I believe in working together to create awesome things.
        </p>

        <div className=" grid grid-cols-1 gap-[30px] mt-[30px] md:grid-cols-2 md:gap-[30px] md:mt-10 lg:gap-[60px]  lg:mt-20">
          {MY_PROJECTS.map((project, index) => (
            <div
              key={`project-${index}`}
              className={`relative rounded-md pt-[30px] h-[548px] lg:pt-[90px] lg:h-[830px] overflow-hidden my-projects ${
                project.textColor === "light" ? "text-white" : "text-black"
              } transition-all ease-in duration-3000`}
              style={{ backgroundColor: `${project.bg}` }}
            >
              <div className="pl-[30px] pr-[10px] lg:px-[60px] relative z-10 case-study-desc">
                <p className="font-medium tracking-widest uppercase mb-3 opacity-70">{project.category}</p>
                <p className="title-secondary tracking-[0.10px] lg:text-[2.125rem] lg:leading-[3.125rem] font-extrabold capitalize mb-[30px]">{project.title}</p>
                <div className="hidden items-center case-study w-full transition-opacity duration-1000 lg:flex">
                  <p className="testimonial-role me-3 font-bold">View Case Study</p>
                  <img src={arrowRight} alt="arrow-right" loading="lazy" />
                </div>
              </div>
              <div className="bg-black w-full h-full absolute top-0 right-0 overlay z-1 transition-opacity duration-1000" />
              <img src={project.img} alt="work" className={`${project.imgClass} absolute bottom-0`} loading="lazy" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
