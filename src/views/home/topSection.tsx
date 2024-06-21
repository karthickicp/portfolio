import hand from "@/assets/img/icons/hand-symbol.svg";
import { OutlinedBtn } from "@/components";
import profilePicture from "@/assets/img/profile.png";

export const TopSection = () => {
  return (
    <div className="wrapper topSec relative mb-10 lg:mb-[130px]">
      <h1 className="lg:text-[16.75rem] xl:leading-[14rem]  2xl:text-[17.5vw] text-white -z-10 font-extrabold 2xl:leading-[17.5rem] text-center drop-shadow-[0_30px_100px_rgba(0,0,0,0.08)] absolute top-0">
        Mohammad <br /> Mansoor <br /> Ashik
      </h1>
      <div className="w-full float-left top-sec-wrapper ">
        <div className="container h-full">
          <div className="flex flex-col-reverse items-center h-full descSec md:flex-row xl:items-end 2xl:relative">
            <div className="flex-1">
              <div className="flex items-center">
                <img
                  src={hand}
                  alt="hand-sign"
                  className="me-4 w-[46px] h-[46px] md:w-auto md:h-auto"
                />
                <p className="welcome-text lg:text-[4.375rem] lg:leading-[6.431rem] font-extrabold w-auto float-left mb-1">
                  Hello!
                </p>
              </div>
              <h1 className="text-[2.375rem] leading-[3.75rem] font-extrabold mb-6 lg:text-[4.375rem] lg:leading-[5.625rem] lg:mb-10">
                I'm Sr UI/UX Designer located in India
              </h1>
              <p className="text-paragraph para-text leading-7 mb-6">
                I simplify digital experiences, making them user-friendly with 7+ years expertise. Successful in completing many
                projects, I excel in both individual work and leading teams, sharing insights.
              </p>
              <div className="flex gap-4 md:hidden">
                <OutlinedBtn buttonText={"LinkedIn"} />
                <OutlinedBtn buttonText={"My Resume"} />
              </div>
            </div>
            <div className="relative flex-1 flex justify-end topsec-img xl:translate-y-[150px] 2xl:absolute 2xl:right-0 2xl:bottom-[-45px]">
              <img
                src={profilePicture}
                alt="profile-picture"
              />
              <div className="topsec-shadow w-full h-full absolute float-left"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
