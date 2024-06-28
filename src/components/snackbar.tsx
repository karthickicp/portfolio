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
      className={`fixed top-4 right-4 bg-black text-white px-4 py-4 rounded shadow-md transition-transform duration-300 transform w-full max-w-xs z-10 ${
        isVisible ? "translate-x-0" : "translate-x-[120%]"
      }`}
      onClick={onClose}
    >
      {message}
    </div>
  );
};
