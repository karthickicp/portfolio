import { MY_PROJECTS } from "../../constants";

export const MyWorks = () => {
  return (
    <section className="wrapper">
      <div className="container">
        <p className="text-[1.125rem] leading-[1.654rem] tracking-widest mb-[0.875rem]">
          MY PORTFOLIO
        </p>
        <h2 className="mb-10 text-black text-[4.25rem] font-extrabold leading-[90px]">
          Selected Works
        </h2>
        <p className="text-[#666] para-text">
          I've worked on lots of different projects, leading efforts to
          understand users and turn that understanding into designs that just
          make sense. I believe in working together to create awesome things.
        </p>

        <div className=" grid grid-cols-2 gap-[60px] mt-20">
          {MY_PROJECTS.map((project, index) => (
            <div
              key={`project-${index}`}
              className={`h-[400px] rounded-md pt-[90px] px-[60px] ${
                project.textColor === "light" ? "text-white" : "text-black"
              }`}
              style={{ backgroundColor: `${project.bg}` }}
            >
              <p>{project.category}</p>
              <p>{project.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
