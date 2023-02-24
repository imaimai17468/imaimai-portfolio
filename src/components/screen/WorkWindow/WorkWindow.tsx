import { Modal } from '@/components/common'

import { WorkWindowProps } from './WorkWindow.type'

export const WorkWindow: React.FC<WorkWindowProps> = ({ isOpen, onClose }: WorkWindowProps) => (
  <Modal isOpen={isOpen} onClose={onClose} title='WORKS'>
    <div className='flex flex-col text-gray-200 '>
      <p>This is Work Page</p>
      <p>Coming Soon...</p>
    </div>
  </Modal>
)

export default WorkWindow
