import { Modal } from '@/components/common'

import { SkillWindowProps } from './SkillWindow.type'

export const SkillWindow: React.FC<SkillWindowProps> = ({ isOpen, onClose }: SkillWindowProps) => (
  <Modal isOpen={isOpen} onClose={onClose} title='SKILLS'>
    <div className='flex flex-col text-gray-200 '>
      <p>This is Skill Page</p>
      <p>Coming Soon...</p>
    </div>
  </Modal>
)

export default SkillWindow
