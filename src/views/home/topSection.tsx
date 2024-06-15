import hand from "@/assets/img/icons/hand-symbol.svg";
import { OutlinedBtn } from "@/components";
// import profilePicture from "@/assets/img/profile.png";
// import profilePictureShadow from "@/assets/img/profile-shadow.png";

export const TopSection = () => {
  return (
    <div className="wrapper topSec relative mb-10 md:mb-[130px]">
      <h1 className=" text-[17.5vw] 3xl:text-[18.75rem] text-white -z-10 font-extrabold leading-[17.5rem] text-center drop-shadow-[0_30px_100px_rgba(0,0,0,0.08)] relative">
        Mohammad <br /> Mansoor <br /> Ashik
      </h1>
      <div className="w-full float-start absolute bottom-0">
        <div className="container">
          <div className="flex flex-col items-end descSec md:flex-row">
            <div className="flex-1">
              <div className="flex items-center">
                <img src={hand} alt="hand-sign" className="me-4 w-[46px] h-[46px] md:w-auto md:h-auto" />
                <p className="welcome-text 3xl:text-[4.375rem] 3xl:leading-[6.431rem] font-extrabold w-auto float-start mb-1">
                  Hello!
                </p>
              </div>
              <h1 className="text-[2.375rem] leading-[3.75rem] font-extrabold mb-6 3xl:text-[4.375rem] 3xl:leading-[5.625rem] 3xl:mb-10">
                I'm Sr UI/UX Designer located in India
              </h1>
              <p className="text-paragraph para-text text-4 leading-7 3xl:text-[22px] 3xl:leading-9 mb-6 3xl:mb-0">
                I simplify digital experiences, making them user-friendly with 7+ years expertise. Successful in completing many
                projects, I excel in both individual work and leading teams, sharing insights.
              </p>
              <div className="flex gap-4">
                <OutlinedBtn buttonText={"LinkedIn"} />
                {/* <a
              href="#"
              className="text-black border-black rounded-full px-4 py-2 border-2 flex items-center gap-4"
            >
              LinkedIn <img src={arrowBlack} alt="arrow-white" />
            </a> */}
                <OutlinedBtn buttonText={"My Resume"} />

                {/* <a
              href="#"
              className="text-white bg-black border-black rounded-full px-4 py-2 text-md border-2 flex items-center gap-2"
            >
              My Resume <img src={arrowWhite} alt="arrow-black" />
            </a> */}
              </div>
            </div>
            <div className="relative flex-1 flex justify-end topsec-img">
              {/* <img
                src={profilePicture}
                alt="profile-picture"
                // className="max-h-[675px] 3xl:max-h-[100%]"
              /> */}
              {/* <img
                src={profilePictureShadow}
                alt="profile-picture"
                className="absolute max-h-[750px] 3xl:max-h-[100%] top-0"
              /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
