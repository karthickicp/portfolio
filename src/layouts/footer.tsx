import mailIcon from "@/assets/img/icons/mail.png";
export const Footer = () => {
  return (
    <footer className="wrapper pt-[60px] pb-10 border-[0.094rem] border-[#DFDFDF] md:pt-[8.75rem] md:pb-20">
      <div className="container">
        <h1 className="welcome-text sec-title mb-5 md:mb-[2.875rem]">Let's Connect and Blend Creativity with Functionality!</h1>
        <div>
          <div className="mb-4 flex items-center">
          <img src={mailIcon} alt="mail-icon" className="me-3 md:me-[0.875rem] float-start h-[26px] md:h-10"/>
          <span className="text-[22px] leading-[2.021rem] text-black mt-1 inline-block">Ashikuxd@gmail.com</span>
          </div>
          <p className="testimonial-desc text-[#665D5D] leading-[1.654rem]">©Mohammad Mansoor 2024</p>
        </div>
      </div>
    </footer>
  );
};
