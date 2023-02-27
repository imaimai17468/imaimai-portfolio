import Image from 'next/image'
import { useState } from 'react'
import { AiFillPicture } from 'react-icons/ai'
import { BiLink } from 'react-icons/bi'
import { FaSchool, FaBirthdayCake } from 'react-icons/fa'
import { GiFrogPrince, GiBrain, GiCook } from 'react-icons/gi'

import { Modal } from '@/components/common'
import { Drag } from '@/components/layout/Drag'
import { PICTURES } from '@/constants/pictures'

import { AboutWindowProps } from './AboutWindow.type'

export const AboutWindow: React.FC<AboutWindowProps> = ({ isOpen, onClose }: AboutWindowProps) => {
  const [pictureModalOpen, setPictureModalOpen] = useState(false)
  const [picturePage, setPicturePage] = useState(0)
  const [linkModalOpen, setLinkModalOpen] = useState(false)

  const [isGeko, setIsGeko] = useState(false)
  const clickGeko = () => {
    setIsGeko(true)
    setTimeout(() => {
      setIsGeko(false)
    }, 500)
  }

  const picturePageNation = (mode: 'next' | 'prev') => {
    if (mode === 'next') {
      if (picturePage === PICTURES.length - 1) {
        setPicturePage(0)
      } else {
        setPicturePage((prev) => prev + 1)
      }
    } else {
      if (picturePage === 0) {
        setPicturePage(PICTURES.length - 1)
      } else {
        setPicturePage((prev) => prev - 1)
      }
    }
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose} title='ABOUT'>
      <div className='flex flex-row items-center gap-10'>
        <div className='mb-5 flex flex-col'>
          <div
            className='flex flex-row items-center gap-3 font-mono transition-all hover:scale-105'
            onClick={clickGeko}
          >
            <GiFrogPrince />
            <p>いまいまい</p>
            <p className={`${isGeko ? 'opacity-100' : 'opacity-0'} transition-all`}>🐸</p>
          </div>
          <div className='flex flex-row items-center gap-3 font-mono'>
            <FaSchool />
            <p>長岡技術科学大学</p>
          </div>
          <div className='flex flex-row items-center gap-3 font-mono'>
            <GiBrain />
            <p>電気電子情報工学課程 脳情報工学研究室</p>
          </div>
          <div className='flex flex-row items-center gap-3 font-mono'>
            <FaBirthdayCake />
            <p>2001.08.01</p>
          </div>
          <div className='flex flex-row items-center gap-3 font-mono'>
            <GiCook />
            <p>いももち・麻婆豆腐・ドリア</p>
          </div>
        </div>
        <Image src='/images/frog_circle.png' alt='profile' className='hidden md:block' width={150} height={150} />
      </div>
      <div className='flex flex-row items-center justify-start gap-3'>
        <button
          type='button'
          onClick={() => setPictureModalOpen(!pictureModalOpen)}
          className={`${
            pictureModalOpen ? 'bg-secondary' : 'bg-primary'
          } flex flex-col items-center rounded-md border border-gray-200 px-2 py-1 text-sm text-gray-200 transition-all`}
        >
          <AiFillPicture size={50} />
          PICTURES
        </button>
        <button
          type='button'
          onClick={() => setLinkModalOpen(!linkModalOpen)}
          className={`${
            linkModalOpen ? 'bg-secondary' : 'bg-primary'
          } flex flex-col items-center rounded-md border border-gray-200 px-2 py-1 text-sm text-gray-200 transition-all`}
        >
          <BiLink size={50} />
          LINKS
        </button>
      </div>
      <Drag>
        <Modal isOpen={pictureModalOpen} onClose={() => setPictureModalOpen(false)} title='PICS'>
          <div className='flex flex-row items-center justify-center gap-4'>
            <button type='button' className='text-xs' onClick={() => picturePageNation('prev')}>
              ⬅︎
            </button>
            {PICTURES.map((picture, index) => {
              if (index === picturePage) {
                return (
                  <Image key={picture.id} src={picture.src} alt={`picture-${picture.id}`} width={200} height={200} />
                )
              }
              return null
            })}
            <button type='button' className='text-xs' onClick={() => picturePageNation('next')}>
              ➡︎
            </button>
          </div>
        </Modal>
      </Drag>
    </Modal>
  )
}

export default AboutWindow
