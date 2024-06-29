import { OutlinedBtn } from "@/components";

export const TemplateSec = () => {
  return (
    <section className="wrapper wrapper-space">
      <div className="container">
        <div className="flex flex-col items-start justify-between gap-8 py-[25px] px-5 border-2 border-blue-100 rounded-[10px] bg-halfWhite md:flex-row md:items-center md:py-7 md:px-10">
          <div>
            <h4 className="title-secondary mb-3 font-medium tracking-space-1 lg:text-[2rem] lg:leading-[47.04px]">
              I have worked over 100+ templates for <strong>VictorThemes</strong> on <strong>Themeforest</strong>.
            </h4>
            <p className="leading-[1.875rem] lg:text-[22px] lg:leading-[2.375rem] tracking-space-1 text-paragraph">
              Each template reflects a journey of innovation and great attention to detail, aimed at exceeding market expectations and
              setting new standards.
            </p>
          </div>
            <OutlinedBtn buttonText="View All Templates" className={"flex-1 min-w-[200px]"} link="https://themeforest.net/user/victorthemes"/>
        </div>
      </div>
    </section>
  );
};
