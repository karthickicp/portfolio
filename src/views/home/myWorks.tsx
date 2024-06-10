import { MY_PROJECTS } from "@/constants";

export const MyWorks = () => {
  return (
    <section className="wrapper wrapper-space">
      <div className="container">
        <p className="sec-category">MY PORTFOLIO</p>
        <h2 className="sec-title mb-10">Selected Works</h2>
        <p className="text-[#666] para-text">
          I've worked on lots of different projects, leading efforts to
          understand users and turn that understanding into designs that just
          make sense. I believe in working together to create awesome things.
        </p>

        <div className=" grid grid-cols-2 gap-[60px] mt-20">
          {MY_PROJECTS.map((project, index) => (
            <div
              key={`project-${index}`}
              className={`relative rounded-md pt-[90px] max-h-[830px] overflow-hidden ${
                project.textColor === "light" ? "text-white" : "text-black"
              }`}
              style={{ backgroundColor: `${project.bg}` }}
            >
              <p className="font-medium tracking-widest uppercase mb-3 opacity-70 px-[60px]">
                {project.category}
              </p>
              <p className="text-[2.125rem] leading-[3.125rem] px-[60px] font-extrabold capitalize">
                {project.title}
              </p>
              <img
                src={project.img}
                alt="work"
                className={project.imgClass}
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
