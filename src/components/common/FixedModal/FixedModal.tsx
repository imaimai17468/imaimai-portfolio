import { FixedModalProps } from './FixedModal.type'

export const FixedModal = ({ children, isOpen, title, onClose }: FixedModalProps) => (
  <div
    className={`fixed top-0 left-0 z-50 h-full w-full bg-black bg-opacity-50
  ${isOpen ? 'opacity-100' : 'hidden opacity-0'}
  `}
  >
    <div className='flex h-full w-full items-center justify-center'>
      <div className=' rounded-md border border-gray-200 bg-primary px-3 py-1 shadow-md shadow-gray-200 md:max-w-xl'>
        <div className='mb-1 flex flex-row items-center gap-3 border-b pb-1'>
          <button
            type='button'
            className='flex h-4 w-4 items-center justify-center rounded-md border border-gray-200 active:bg-gray-200 active:text-background'
            onClick={onClose}
          >
            <span className='mx-auto cursor-pointer text-sm' onClick={onClose}>
              ×
            </span>
          </button>
          <p className='text-sm'>{title}</p>
        </div>
        <div className='p-3'>{children}</div>
      </div>
    </div>
  </div>
)

export default FixedModal
