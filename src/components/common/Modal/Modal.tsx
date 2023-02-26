import { ModalProps } from './Modal.type'

export const Modal = ({ children, isOpen, title, onClose }: ModalProps) => (
  <div
    className={`
         absolute z-10 h-fit w-72 translate-y-1/2 rounded-md border border-gray-200 bg-slate-800 px-3 py-1 shadow-md shadow-gray-200 md:w-1/2 md:translate-x-1/2
        ${isOpen ? 'opacity-100' : 'hidden opacity-0'}
    `}
  >
    <div className='mb-1 flex flex-row items-center gap-3 border-b pb-1'>
      <button
        type='button'
        className='flex h-4 w-4 items-center justify-center rounded-md border border-gray-200'
        onClick={onClose}
      >
        <span className='mx-auto cursor-pointer text-sm ' onClick={onClose}>
          ×
        </span>
      </button>
      <p className='text-sm'>{title}</p>
    </div>
    <div className='p-3'>{children}</div>
  </div>
)

export default Modal
