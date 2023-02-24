import { ModalProps } from './Modal.type'

export const Modal = ({ children, isOpen, title, onClose }: ModalProps) => (
  <div
    className={`
         absolute z-10 h-fit w-72 translate-y-1/2 rounded-md border-2 border-accent bg-primary p-3 shadow-md shadow-accent sm:w-1/2 md:translate-x-1/2
        ${isOpen ? 'opacity-100' : 'hidden opacity-0'}
    `}
  >
    <div className='mb-3 flex flex-row items-center gap-3 border-b-2 pb-2'>
      <button type='button' className='flex w-6 justify-center rounded-md border-2 border-accent' onClick={onClose}>
        <span className='mx-auto cursor-pointer' onClick={onClose}>
          ×
        </span>
      </button>
      <p className='text-xl'>{title}</p>
    </div>
    <div className='modal__content'>{children}</div>
  </div>
)

export default Modal
