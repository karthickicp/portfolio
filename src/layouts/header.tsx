import { OutlinedBtn } from "@/components";

export const Header = () => {
  return (
    <header className="wrapper mb-4 lg:mb-0">
      <div className="container">
        <div className="flex justify-between items-center mt-[3rem] text-black">
          <div>
            <p className="font-semibold text-[22px] leading-[2.125rem] mb-[6px] tracking-space-2">
              Mohammad Mansoor Ashik
            </p>
            <p className="font-medium tracking-space-24 leading-6">
              UI & UX DESIGNER
            </p>
          </div>
          <div className="hidden gap-4 md:flex">
            <OutlinedBtn
              buttonText={"LinkedIn"}
              link="https://www.linkedin.com/in/mohammad-ashik-m-3a9877198/"
            />
            {/* <a
              href="#"
              className="text-black border-black rounded-full px-4 py-2 border-2 flex items-center gap-4"
            >
              LinkedIn <img src={arrowBlack} alt="arrow-white" />
            </a> */}
            <OutlinedBtn
              buttonText={"My Resume"}
              link="https://drive.google.com/file/d/1hM-XQwQRZ-yfdyCtieXZLBnfuwWNxgQ4/view?usp=sharing"
            />

            {/* <a
              href="#"
              className="text-white bg-black border-black rounded-full px-4 py-2 text-md border-2 flex items-center gap-2"
            >
              My Resume <img src={arrowWhite} alt="arrow-black" />
            </a> */}
          </div>
        </div>
      </div>
    </header>
  );
};
