import mailIcon from "@/assets/img/icons/mail.png";
export const Footer = () => {
  return (
    <footer className="wrapper pt-[8.75rem] pb-20">
      <h1 className="sec-title mb-[2.875rem]">
        Let's Connect and Blend Creativity with Functionality!
      </h1>
      <div>
        <img src={mailIcon} alt="mail-icon" />
        <span>Ashikuxd@gmail.com</span>
        <p>©Mohammad Mansoor 2024</p>
      </div>
    </footer>
  );
};
