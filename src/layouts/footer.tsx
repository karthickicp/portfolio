import mailIcon from "@/assets/img/icons/mail.svg";
import copyIcon from "@/assets/img/icons/copy.svg";
import { Snackbar } from "@/components/snackbar";
import { useState } from "react";
export const Footer = () => {
  const [isSnackbarVisible, setIsSnackbarVisible] = useState(false);

  const handleCopyEmail = () => {
    setIsSnackbarVisible(true);
    navigator.clipboard.writeText("info@mohammadmansoor.com");
  };
  return (
    <footer className="wrapper pt-[60px] pb-10 border-[0.094rem] border-[#DFDFDF] md:pt-[8.75rem] md:pb-20">
      <div className="container">
        <h1 className="sec-title mb-9 max-w-[1140px] tracking-space-1 md:mb-[2.875rem]">
          Let's Connect and Blend Creativity with Functionality!
        </h1>
        <div>
          <div className="mb-4 flex items-center">
            <img
              src={mailIcon}
              alt="mail-icon"
              className="me-3 md:me-[0.875rem] float-left h-[26px] md:h-10"
            />
            <div className="flex items-baseline gap-[0.625rem]">
              <a
                href="mailto:info@mohammadmansoor.com"
                className="text-[22px] leading-[2.021rem] md:text-[28px] md:leading-[41.16px] text-paragraph mt-1 inline-block cursor-pointer hover:underline"
                target="_blank"
              >
                Info@mohammadmansoor.com
              </a>
              <img
                src={copyIcon}
                alt="copy-icon"
                className="cursor-pointer"
                onClick={handleCopyEmail}
              />
            </div>
          </div>
          <p className="testimonial-desc text-[#665D5D] leading-[1.654rem]">
            &copy;Mohammad Mansoor 2024
          </p>
        </div>
      </div>
      <Snackbar
        message="Copied"
        isVisible={isSnackbarVisible}
        onClose={() => setIsSnackbarVisible(false)}
      />
    </footer>
  );
};
