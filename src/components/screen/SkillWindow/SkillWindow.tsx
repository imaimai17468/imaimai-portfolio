import { useState } from 'react'
import { AiFillHtml5 } from 'react-icons/ai'
import { BiSkipPreviousCircle, BiSkipNextCircle } from 'react-icons/bi'
import { FaCss3Alt, FaReact } from 'react-icons/fa'
import {
  SiJavascript,
  SiTypescript,
  SiNextdotjs,
  SiMaterialui,
  SiTailwindcss,
  SiProcessingfoundation,
  SiGo,
  SiRubyonrails,
  SiC,
  SiCplusplus,
  SiUnity,
  SiFirebase,
  SiPython,
  SiScikitlearn,
  SiArduino,
  SiDocker,
  SiGit,
  SiGithub,
  SiFigma,
} from 'react-icons/si'

import { Modal } from '@/components/common'

import { SkillWindowProps } from './SkillWindow.type'

export const SkillWindow: React.FC<SkillWindowProps> = ({ isOpen, onClose }: SkillWindowProps) => {
  const [currentPage, setCurrentPage] = useState(0)

  const pageNationHandler = (mode: 'next' | 'prev') => {
    if (mode === 'next') {
      if (currentPage === 3) {
        setCurrentPage(0)
      } else {
        setCurrentPage((prev) => prev + 1)
      }
    } else {
      if (currentPage === 0) {
        setCurrentPage(3)
      } else {
        setCurrentPage((prev) => prev - 1)
      }
    }
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose} title='SKILLS'>
      <div className='flex h-48 w-80 flex-row items-center justify-between gap-3 text-gray-200'>
        <BiSkipPreviousCircle size={30} className='cursor-pointer' onClick={() => pageNationHandler('prev')} />
        <div>
          <div className={`${currentPage === 0 ? 'block' : 'hidden'} flex flex-col items-center`}>
            <p className='mb-3'>Frontend</p>
            <div className='grid grid-cols-4 justify-items-center gap-3'>
              <AiFillHtml5
                size={40}
                className='rounded-md p-1 transition-all hover:border hover:border-gray-200 hover:shadow-md hover:shadow-gray-200'
              />
              <FaCss3Alt
                size={40}
                className='rounded-md p-1 transition-all hover:border hover:border-gray-200 hover:shadow-md hover:shadow-gray-200'
              />
              <SiJavascript
                size={40}
                className='rounded-md p-1 transition-all hover:border hover:border-gray-200 hover:shadow-md hover:shadow-gray-200'
              />
              <SiTypescript
                size={40}
                className='rounded-md p-1 transition-all hover:border hover:border-gray-200 hover:shadow-md hover:shadow-gray-200'
              />
              <div className='flex items-center justify-center rounded-md border p-1 transition-all hover:shadow-md hover:shadow-gray-200'>
                SCSS
              </div>
              <FaReact
                size={40}
                className='rounded-md p-1 transition-all hover:border hover:border-gray-200 hover:shadow-md hover:shadow-gray-200'
              />
              <SiNextdotjs
                size={40}
                className='rounded-md p-1 transition-all hover:border hover:border-gray-200 hover:shadow-md hover:shadow-gray-200'
              />
              <SiMaterialui
                size={40}
                className='rounded-md p-1 transition-all hover:border hover:border-gray-200 hover:shadow-md hover:shadow-gray-200'
              />
              <SiTailwindcss
                size={40}
                className='rounded-md p-1 transition-all hover:border hover:border-gray-200 hover:shadow-md hover:shadow-gray-200'
              />
              <SiProcessingfoundation
                size={40}
                className='rounded-md p-1 transition-all hover:border hover:border-gray-200 hover:shadow-md hover:shadow-gray-200'
              />
            </div>
          </div>
          <div className={`${currentPage === 1 ? 'block' : 'hidden'} flex flex-col items-center`}>
            <p className='mb-3'>Backend</p>
            <div className='grid grid-cols-4 justify-items-center gap-3'>
              <SiGo
                size={40}
                className='rounded-md p-1 transition-all hover:border hover:border-gray-200 hover:shadow-md hover:shadow-gray-200'
              />
              <SiRubyonrails
                size={40}
                className='rounded-md p-1 transition-all hover:border hover:border-gray-200 hover:shadow-md hover:shadow-gray-200'
              />
              <SiFirebase
                size={40}
                className='rounded-md p-1 transition-all hover:border hover:border-gray-200 hover:shadow-md hover:shadow-gray-200'
              />
            </div>
          </div>
          <div className={`${currentPage === 2 ? 'block' : 'hidden'} flex flex-col items-center`}>
            <p className='mb-3'>Other</p>
            <div className='grid grid-cols-4 justify-items-center gap-3'>
              <SiC
                size={40}
                className='rounded-md p-1 transition-all hover:border hover:border-gray-200 hover:shadow-md hover:shadow-gray-200'
              />
              <SiCplusplus
                size={40}
                className='rounded-md p-1 transition-all hover:border hover:border-gray-200 hover:shadow-md hover:shadow-gray-200'
              />
              <SiUnity
                size={40}
                className='rounded-md p-1 transition-all hover:border hover:border-gray-200 hover:shadow-md hover:shadow-gray-200'
              />
              <SiPython
                size={40}
                className='rounded-md p-1 transition-all hover:border hover:border-gray-200 hover:shadow-md hover:shadow-gray-200'
              />
              <SiScikitlearn
                size={40}
                className='rounded-md p-1 transition-all hover:border hover:border-gray-200 hover:shadow-md hover:shadow-gray-200'
              />
              <SiDocker
                size={40}
                className='rounded-md p-1 transition-all hover:border hover:border-gray-200 hover:shadow-md hover:shadow-gray-200'
              />
              <SiArduino
                size={40}
                className='rounded-md p-1 transition-all hover:border hover:border-gray-200 hover:shadow-md hover:shadow-gray-200'
              />
            </div>
          </div>
          <div className={`${currentPage === 3 ? 'block' : 'hidden'} flex flex-col items-center`}>
            <p className='mb-3'>Tools</p>
            <div className='grid grid-cols-4 justify-items-center gap-3'>
              <SiGit
                size={40}
                className='rounded-md p-1 transition-all hover:border hover:border-gray-200 hover:shadow-md hover:shadow-gray-200'
              />
              <SiGithub
                size={40}
                className='rounded-md p-1 transition-all hover:border hover:border-gray-200 hover:shadow-md hover:shadow-gray-200'
              />
              <SiFigma
                size={40}
                className='rounded-md p-1 transition-all hover:border hover:border-gray-200 hover:shadow-md hover:shadow-gray-200'
              />
            </div>
          </div>
        </div>
        <BiSkipNextCircle size={30} className='cursor-pointer' onClick={() => pageNationHandler('next')} />
      </div>
    </Modal>
  )
}

export default SkillWindow
