import { useEffect } from "react";
export const Snackbar = ({
  message,
  isVisible,
  onClose,
}: {
  message: string;
  isVisible: boolean;
  onClose: () => void;
}) => {
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(onClose, 3000);
      return () => clearTimeout(timer);
    }
  }, [isVisible, onClose]);

  return (
    <div
      className={`leading-[23.52px] py-2 px-7 bottom-0 fixed left-[50%] bg-black text-white font-medium rounded shadow-md transition-transform duration-300 transform w-full max-w-xs z-10 -translate-x-1/2 border-s-green-700 border-s-8 md:bottom-12 md:text-[20px] md:leading-[29.4px] md:py-[10px] md:px-[54px] ${
        isVisible ? "translate-y-0" : "translate-y-[200%]"
      }`}
      onClick={onClose}
    >
      {message}
    </div>
  );
};
