import { Modal } from '@/components/common'

import { AboutWindowProps } from './AboutWindow.type'

export const AboutWindow: React.FC<AboutWindowProps> = ({ isOpen, onClose }: AboutWindowProps) => (
  <Modal isOpen={isOpen} onClose={onClose} title='ABOUT'>
    <div className='flex flex-col text-gray-200 '>
      <p>This is About Page</p>
      <p>Coming Soon...</p>
    </div>
  </Modal>
)

export default AboutWindow
