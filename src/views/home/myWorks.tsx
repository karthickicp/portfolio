import { isMobile } from "react-device-detect";

import { MY_PROJECTS } from "@/constants";
import arrowRight from "@/assets/img/icons/arrow-right.svg";

export const MyWorks = () => {
  

const isMobileView = isMobile;

console.log(isMobile,navigator.userAgent, "isMobile")

const navigateProjectLink = (url: string)=> {
  if(isMobileView){
    window.open(url, '_blank')?.focus();
  }
}
  return (
    <section className="wrapper wrapper-space">
      <div className="container">
        <p className="sec-category">MY PORTFOLIO</p>
        <h2 className="sec-title mb-5 lg:mb-10">Selected Works</h2>
        <p className=" text-category para-text">
          I've worked on lots of different projects, leading efforts to understand users and turn that understanding into designs that
          just make sense. I believe in working together to create awesome things.
        </p>

        <div className=" grid grid-cols-1 gap-[30px] mt-[30px] md:grid-cols-2 md:gap-[30px] md:mt-10 lg:gap-[60px]  lg:mt-20">
          {MY_PROJECTS.map((project, index) => (
            <div
              key={`project-${index}`}
              className={`group relative rounded-md pt-[30px] h-[548px] lg:pt-[90px] lg:h-[830px] overflow-hidden my-projects ${
                project.textColor === "light" ? "text-white" : "text-black"
              } transition-all ease-in duration-3000`}
              style={{ backgroundColor: `${project.bg}` }}
              onClick={() => navigateProjectLink(project.link)}
            >
              <div className="pl-[30px] pr-[10px] lg:px-[60px] relative z-10 case-study-desc group-hover:text-white group-[touch-hover]:text-inherit">
                <p className={`font-medium tracking-space-24 uppercase mb-3 ${ project.textColor === "light" ? "text-white/70" : "text-black"} group-hover:text-white`}>{project.category}</p>
                <p className="title-secondary tracking-space-2 lg:text-[2.125rem] lg:leading-[3.125rem] font-extrabold capitalize mb-[30px]">
                  {project.title}
                </p>
                <div className="hidden items-center case-study w-full transition-opacity duration-1000 lg:flex group-hover:opacity-100">
                  <a href={project.link ?? "#"} target="_blank" className="testimonial-role me-3 font-bold">
                    {project.hoverText}
                  </a>
                  <img src={arrowRight} alt="arrow-right" loading="lazy" />
                </div>
              </div>
              <div className="bg-black w-full h-full absolute top-0 right-0 overlay group-hover:opacity-90 group-[touch-hover]:opacity-0 z-1 transition-opacity duration-1000" />
              <img src={project.img} alt="work" className={`${project.imgClass} absolute bottom-0`} loading="lazy" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
