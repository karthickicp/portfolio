import { OutlinedBtn } from "@/components";

export const TemplateSec = () => {
  return (
    <section className="wrapper wrapper-space">
      <div className="flex justify-between items-center gap-8 pt-7 pb-7 ps-10 pe-10 border-2 border-[#CEE7FF] rounded-[10px] bg-[#F7F8F9]">
        <div>
          <h4 className=" text-[2rem] leading-[47.04px] tracking-wide mb-3 font-medium">
            I have worked over 100+ templates for VictorThemes on Themeforest.
          </h4>
          <p className="text-[22px] leading-[2.375rem] text-paragraph">
            Each template reflects a journey of innovation and great attention
            to detail, aimed at exceeding market expectations and setting new
            standards.
          </p>
        </div>
        <OutlinedBtn
          buttonText="View All Templates"
          className={"flex-1 min-w-[200px]"}
        />
      </div>
    </section>
  );
};
