import { MY_PROJECTS } from "@/constants";
import arrowRight from "@/assets/img/icons/arrow-right.svg";
export const MyWorks = () => {
  return (
    <section className="wrapper wrapper-space">
      <div className="container">
        <p className="sec-category">MY PORTFOLIO</p>
        <h2 className="sec-title mb-10">Selected Works</h2>
        <p className="text-[#666] para-text">
          I've worked on lots of different projects, leading efforts to understand users and turn that understanding into designs that
          just make sense. I believe in working together to create awesome things.
        </p>

        <div className=" grid grid-cols-2 gap-[60px] mt-20">
          {MY_PROJECTS.map((project, index) => (
            <div
              key={`project-${index}`}
              className={`relative rounded-md pt-[90px] max-h-[830px] overflow-hidden my-projects ${
                project.textColor === "light" ? "text-white" : "text-black"
              } transition-all ease-in duration-3000`}
              style={{ backgroundColor: `${project.bg}` }}
            >
              <div className="px-[60px] relative z-10">
                <p className="font-medium tracking-widest uppercase mb-3 opacity-70">{project.category}</p>
                <p className="text-[2.125rem] leading-[3.125rem]  font-extrabold capitalize mb-[30px]">{project.title}</p>
                <div className="flex items-center case-study w-full">
                  <p className="testimonial-role me-3 font-bold">View Case Study</p>
                  <img src={arrowRight} alt="arrow-right" loading="lazy" />
                </div>
              </div>
              <div className="bg-black w-full h-full absolute top-0 right-0 overlay" />

              <img src={project.img} alt="work" className={project.imgClass} loading="lazy" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
