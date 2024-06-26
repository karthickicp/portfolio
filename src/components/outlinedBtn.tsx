import arrowBlack from "@/assets/img/icons/arrow-black.svg";
import arrowWhite from "@/assets/img/icons/arrow-white.svg";

export const OutlinedBtn = ({
  buttonText,
  className,
  link
}: Partial<{ buttonText: string; className: string, link: string }>) => {
  return (
    <a
      href={link ?? '#'}
      className={`group text-black border-black rounded-full px-[15px] py-[6px] border-2 flex items-center gap-2 font-medium md:py-[10px] md:px-5 hover:bg-black hover:text-white hover:border-black ${
        className ?? ""
      }`}
      target="_blank"
    >
      {buttonText} <img src={arrowBlack} alt="arrow-black" className="inline-block group-hover:hidden" />
      <img src={arrowWhite} alt="arrow-white" className="hidden group-hover:inline-block" />
    </a>
  );
};
