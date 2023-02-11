import { WorkWindowProps } from "./WorkWindow.type";
import { Modal } from "@/components/common";

export const WorkWindow: React.FC<WorkWindowProps> = ({
  isOpen,
  onClose,
}) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title="WORKS">
      <div className="text-gray-200 flex flex-col ">
        <p>This is Work Page</p>
        <p>Coming Soon...</p>
      </div>
    </Modal>
  );
};

export default WorkWindow;
