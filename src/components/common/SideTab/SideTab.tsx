import Image from 'next/image'

import { SideTabProps } from './SideTab.type'

export const SideTab = (props: SideTabProps) => {
  const { iconName, className, title, onClick, isClicked } = props

  return (
    <div
      className={`absolute z-0
        ${className || ''}`}
      onClick={() => {
        if (onClick) onClick()
      }}
    >
      <div
        className={`flex h-fit w-28 cursor-pointer  flex-col items-end justify-center rounded-md border-2 bg-primary p-2 transition-all hover:shadow-md
         ${isClicked ? 'border-4 border-accent hover:shadow-accent' : 'border-secondary'}`}
      >
        <Image src={`/images/${iconName}.svg`} alt='iconName' width={40} height={40} className='my-1' />
        <p className='text-center'>{title}</p>
      </div>
    </div>
  )
}

export default SideTab
