import { AboutWindowProps } from "./AboutWindow.type";
import { Modal } from "@/components/common";

export const AboutWindow: React.FC<AboutWindowProps> = ({
  isOpen,
  onClose,
}) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title="ABOUT">
      <div className="text-gray-200 flex flex-col ">
        <p>This is About Page</p>
        <p>Coming Soon...</p>
      </div>
    </Modal>
  );
};

export default AboutWindow;
