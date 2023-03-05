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
  SiVuedotjs,
  SiNuxtdotjs,
} from 'react-icons/si'

import { Modal, Tooltip } from '@/components/common'

import { SkillWindowProps } from './SkillWindow.type'

const BUTTON_CLASS =
  'bg-background rounded-md p-1 transition-all hover:border hover:border-gray-200 shadow-md hover:shadow-gray-200 shadow-gray-800'

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
      <div className='flex h-60 w-80 flex-row items-center justify-between gap-3 text-gray-200'>
        <BiSkipPreviousCircle size={30} className='cursor-pointer' onClick={() => pageNationHandler('prev')} />
        <div>
          <div
            className={`${
              currentPage === 0 ? 'block' : 'hidden'
            } flex flex-col items-center rounded-md border border-gray-200 bg-primary px-7 py-3`}
          >
            <p className='mb-3 border-b-2 border-double border-gray-200'>Frontend</p>
            <div className='grid grid-cols-4 justify-items-center gap-3'>
              <Tooltip text='HTML'>
                <AiFillHtml5 size={40} className={BUTTON_CLASS} />
              </Tooltip>
              <Tooltip text='CSS'>
                <FaCss3Alt size={40} className={BUTTON_CLASS} />
              </Tooltip>
              <Tooltip text='JavaScript'>
                <SiJavascript size={40} className={BUTTON_CLASS} />
              </Tooltip>
              <Tooltip text='TypeScript'>
                <SiTypescript size={40} className={BUTTON_CLASS} />
              </Tooltip>
              <Tooltip text='React.js'>
                <FaReact size={40} className={BUTTON_CLASS} />
              </Tooltip>
              <Tooltip text='Next.js'>
                <SiNextdotjs size={40} className={BUTTON_CLASS} />
              </Tooltip>
              <Tooltip text='Vue.js'>
                <SiVuedotjs size={40} className={BUTTON_CLASS} />
              </Tooltip>
              <Tooltip text='Nuxt.js'>
                <SiNuxtdotjs size={40} className={BUTTON_CLASS} />
              </Tooltip>
              <Tooltip text='MaterialUI'>
                <SiMaterialui size={40} className={BUTTON_CLASS} />
              </Tooltip>
              <Tooltip text='TailwindCSS'>
                <SiTailwindcss size={40} className={BUTTON_CLASS} />
              </Tooltip>
              <Tooltip text='Processing'>
                <SiProcessingfoundation size={40} className={BUTTON_CLASS} />
              </Tooltip>
            </div>
          </div>
          <div
            className={`${
              currentPage === 1 ? 'block' : 'hidden'
            } flex flex-col items-center rounded-md border border-gray-200 bg-primary px-7 py-3`}
          >
            <p className='mb-3 border-b-2 border-double border-gray-200'>Backend</p>
            <div className='grid grid-cols-4 justify-items-center gap-3'>
              <Tooltip text='Go'>
                <SiGo size={40} className={BUTTON_CLASS} />
              </Tooltip>
              <Tooltip text='Ryby on Rails'>
                <SiRubyonrails size={40} className={BUTTON_CLASS} />
              </Tooltip>
              <Tooltip text='Firebase'>
                <SiFirebase size={40} className={BUTTON_CLASS} />
              </Tooltip>
            </div>
          </div>
          <div
            className={`${
              currentPage === 2 ? 'block' : 'hidden'
            } flex flex-col items-center rounded-md border border-gray-200 bg-primary px-7 py-3`}
          >
            <p className='mb-3 border-b-2 border-double border-gray-200'>Other</p>
            <div className='grid grid-cols-4 justify-items-center gap-3'>
              <Tooltip text='C'>
                <SiC size={40} className={BUTTON_CLASS} />
              </Tooltip>
              <Tooltip text='C++'>
                <SiCplusplus size={40} className={BUTTON_CLASS} />
              </Tooltip>
              <Tooltip text='Unity'>
                <SiUnity size={40} className={BUTTON_CLASS} />
              </Tooltip>
              <Tooltip text='Python'>
                <SiPython size={40} className={BUTTON_CLASS} />
              </Tooltip>
              <Tooltip text='Scikit-learn'>
                <SiScikitlearn size={40} className={BUTTON_CLASS} />
              </Tooltip>
              <Tooltip text='Docker'>
                <SiDocker size={40} className={BUTTON_CLASS} />
              </Tooltip>
              <Tooltip text='Arduino'>
                <SiArduino size={40} className={BUTTON_CLASS} />
              </Tooltip>
            </div>
          </div>
          <div
            className={`${
              currentPage === 3 ? 'block' : 'hidden'
            } flex flex-col items-center rounded-md border border-gray-200 bg-primary px-7 py-3`}
          >
            <p className='mb-3 border-b-2 border-double border-gray-200'>Tools</p>
            <div className='grid grid-cols-4 justify-items-center gap-3'>
              <Tooltip text='Git'>
                <SiGit size={40} className={BUTTON_CLASS} />
              </Tooltip>
              <Tooltip text='GitHub'>
                <SiGithub size={40} className={BUTTON_CLASS} />
              </Tooltip>
              <Tooltip text='Figma'>
                <SiFigma size={40} className={BUTTON_CLASS} />
              </Tooltip>
            </div>
          </div>
        </div>
        <BiSkipNextCircle size={30} className='cursor-pointer' onClick={() => pageNationHandler('next')} />
      </div>
    </Modal>
  )
}

export default SkillWindow
