import hand from "@/assets/img/icons/hand-symbol.svg";
// import profilePicture from "@/assets/img/profile.png";
// import profilePictureShadow from "@/assets/img/profile-shadow.png";

export const TopSection = () => {
  return (
    <div className="wrapper topSec relative">
      <h1 className=" text-[17.5vw] 3xl:text-[18.75rem] text-white -z-10 font-extrabold leading-[17.5rem] text-center drop-shadow-[0_30px_100px_rgba(0,0,0,0.08)] relative">
        Mohammad <br /> Mansoor <br /> Ashik
      </h1>
      <div className="w-full float-start absolute bottom-0">
        <div className="container">
          <div className="flex items-end descSec mb-[130px]">
            <div className="flex-1">
              <div className="flex items-center">
                <img src={hand} alt="hand-sign" className="me-4" />
                <p className="text-[3.75rem] leading-[5rem] 3xl:text-[4.375rem] 3xl:leading-[6.431rem] font-extrabold w-auto float-start">
                  Hello!
                </p>
              </div>
              <h1 className="text-[3.75rem] leading-[5rem] 3xl:text-[4.375rem] font-extrabold mb-10 3xl:leading-[5.625rem]">
                I'm Sr UI/UX Designer located in India
              </h1>
              <p className="text-paragraph para-text">
                I simplify digital experiences, making them user-friendly with
                7+ years expertise. Successful in completing many projects, I
                excel in both individual work and leading teams, sharing
                insights.
              </p>
            </div>
            {/* <div className="relative flex-1 flex justify-end">
              <img
                src={profilePicture}
                alt="profile-picture"
                className="max-h-[750px] 3xl:max-h-[100%]"
              />
              <img
                src={profilePictureShadow}
                alt="profile-picture"
                className="absolute max-h-[750px] 3xl:max-h-[100%] top-0"
              />
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};
