import arrowBlack from "@/assets/img/icons/arrow-black.svg";

export const OutlinedBtn = ({
  buttonText,
  className,
}: Partial<{ buttonText: string; className: string }>) => {
  return (
    <a
      href="#"
      className={`text-black border-black rounded-full px-[15px] py-[6px] border-2 flex items-center gap-2 md:py-[10px] md:px-5 ${className}`}
    >
      {buttonText} <img src={arrowBlack} alt="arrow-black" />
    </a>
  );
};
