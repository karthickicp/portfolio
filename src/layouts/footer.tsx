import mailIcon from "@/assets/img/icons/mail.png";
export const Footer = () => {
  return (
    <footer className="wrapper pt-[8.75rem] pb-20 border-[0.094rem] border-[#DFDFDF]">
      <div className="container">
        <h1 className="sec-title mb-[2.875rem]">Let's Connect and Blend Creativity with Functionality!</h1>
        <div>
          <div className="mb-4">
          <img src={mailIcon} alt="mail-icon" className="me-[0.875rem] float-start h-10"/>
          <span className="text-[28px] leading-[2.573rem] text-black mt-1 inline-block">Ashikuxd@gmail.com</span>
          </div>
          <p className="text-[1.125rem] text-[#665D5D] leading-[1.654rem]">©Mohammad Mansoor 2024</p>
        </div>
      </div>
    </footer>
  );
};
