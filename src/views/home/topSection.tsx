import hand from "@/assets/img/icons/hand-symbol.svg";
import { OutlinedBtn } from "@/components";
import profilePicture from "@/assets/img/profile.png";

export const TopSection = () => {
  return (
    <div className="wrapper topSec relative">
      <h1
        className="w-full text-white -z-10 font-extrabold text-center absolute top-0 overflow-hidden text-[17vw] leading-[20vw] drop-shadow-[0_30px_100px_rgba(0,0,0,0.2)]
 md:drop-shadow-[0_30px_100px_rgba(0,0,0,0.1)] md:text-[17vw] md:leading-[15vw] 3xl:text-[300px] 3xl:leading-[280px] 2xl:drop-shadow-[0_30px_100px_rgba(0,0,0,0.08)]"
      >
        Mohammad <br /> Mansoor <br /> Ashik
      </h1>
      <div className="w-full float-left top-sec-wrapper">
        <div className="container h-full relative">
          <div className="flex flex-col-reverse h-full descSec md:flex-row 2xl:relative">
            <div className="flex-1 self-center xl:self-end">
              <div className="flex items-center">
                <img src={hand} alt="hand-sign" className="me-4 w-[46px] h-[46px] md:w-auto md:h-auto" />
                <p className="welcome-text font-extrabold w-auto float-left mb-1 text-black lg:text-[4.375rem] lg:leading-[6.431rem]">
                  Hello!
                </p>
              </div>
              <h1 className="text-[2.375rem] leading-[3.75rem] font-extrabold mb-6 text-black lg:text-[4.375rem] lg:leading-[5.625rem] lg:mb-10">
                I'm Sr UI/UX Designer located in India
              </h1>
              <p className="text-paragraph para-text leading-7 mb-6 xl:mb-[60px] 2xl:mb-[90px] 3xl:mb-[130px]">
                I simplify digital experiences, making them user-friendly with 7+ years expertise. Successful in completing many
                projects, I excel in both individual work and leading teams, sharing insights.
              </p>
              <div className="flex gap-4 mb-10 md:hidden ">
                <OutlinedBtn buttonText={"LinkedIn"} link="https://www.linkedin.com/in/mohammad-ashik-m-3a9877198/" />
                <OutlinedBtn
                  buttonText={"My Resume"}
                  link="https://drive.google.com/file/d/1hM-XQwQRZ-yfdyCtieXZLBnfuwWNxgQ4/view?usp=sharing"
                />
              </div>
            </div>
            <div className="relative flex-1 flex justify-end topsec-img -z-10 xl:max-h-[calc(100vh-34%)] 2xl:max-h-[calc(100vh-18%)] xl:absolute xl:right-0 xl:bottom-0">
              <img src={profilePicture} alt="profile-picture" className="object-contain object-right" />
              <div className="topsec-shadow w-full h-full absolute float-left translate-y-[70px] z-10"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
