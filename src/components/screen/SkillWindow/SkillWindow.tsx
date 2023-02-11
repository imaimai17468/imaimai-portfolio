import { SkillWindowProps } from "./SkillWindow.type";
import { Modal } from "@/components/common";

export const SkillWindow: React.FC<SkillWindowProps> = ({
  isOpen,
  onClose,
}) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title="SKILLS">
      <div className="text-gray-200 flex flex-col ">
        <p>This is Skill Page</p>
        <p>Coming Soon...</p>
      </div>
    </Modal>
  );
};

export default SkillWindow;
