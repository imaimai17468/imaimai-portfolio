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
        className={`flex h-fit w-28 cursor-pointer  flex-col items-end justify-center rounded-sm border bg-primary p-2 transition-all hover:shadow-md
         ${isClicked ? 'border-accent hover:shadow-accent' : 'border-gray-200'}`}
      >
        <Image src={`/images/${iconName}.svg`} alt='iconName' width={40} height={40} className='my-1' />
        <p className='text-center'>{title}</p>
      </div>
    </div>
  )
}

export default SideTab
