import { OutlinedBtn } from "@/components";

import arrowWhite from "@/assets/img/icons/arrow-white.svg";

export const Header = () => {
  return (
    <header className="wrapper">
      <div className="container">
        <div className="flex justify-between items-center mt-[3rem] text-black">
          <div>
            <p className="font-semibold text-[22px] leading-[2.125rem]">
              Mohammad Mansoor Ashik
            </p>
            <p className="font-medium tracking-widest leading-6">
              UI & UX DESIGNER
            </p>
          </div>
          <div className="flex gap-4">
            <OutlinedBtn buttonText={"LinkedIn"} />
            {/* <a
              href="#"
              className="text-black border-black rounded-full px-4 py-2 border-2 flex items-center gap-4"
            >
              LinkedIn <img src={arrowBlack} alt="arrow-white" />
            </a> */}
            <a
              href="#"
              className="text-white bg-black border-black rounded-full px-4 py-2 text-md border-2 flex items-center gap-2"
            >
              My Resume <img src={arrowWhite} alt="arrow-black" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};
