import { motion } from 'framer-motion'
import Image from 'next/image'
import { useState } from 'react'
import { AiFillPicture, AiFillRightCircle, AiFillLeftCircle, AiFillCode } from 'react-icons/ai'
import { BiLink } from 'react-icons/bi'
import { BsTwitter, BsGithub } from 'react-icons/bs'
import { CgScrollV } from 'react-icons/cg'
import { FaSchool, FaBirthdayCake } from 'react-icons/fa'
import { GiFrogPrince, GiBrain, GiCook } from 'react-icons/gi'
import { MdFavorite, MdHistoryEdu, MdLocalActivity } from 'react-icons/md'

import { Modal } from '@/components/common'
import { Drag } from '@/components/layout/Drag'
import { Activity, ACTIVITY } from '@/constants/activity'
import { HISTORY, History } from '@/constants/history'
import { PICTURES } from '@/constants/pictures'

import { AboutWindowProps } from './AboutWindow.type'

export const AboutWindow: React.FC<AboutWindowProps> = ({ isOpen, onClose }: AboutWindowProps) => {
  const [pictureModalOpen, setPictureModalOpen] = useState(false)
  const [linkModalOpen, setLinkModalOpen] = useState(false)
  const [picturePage, setPicturePage] = useState(0)
  const [historyModalOpen, setHistoryModalOpen] = useState(false)
  const [activityModalOpen, setActivityModalOpen] = useState(false)

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
      <div className='flex flex-row items-center justify-center gap-10'>
        <div className='mb-5 flex flex-col gap-1 border-y border-dashed border-gray-200 py-3'>
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
            <p>電気電子情報工学課程</p>
          </div>
          <div className='flex flex-row items-center gap-3 font-mono'>
            <FaBirthdayCake />
            <p>2001.08.01</p>
          </div>
          <div className='flex flex-row items-center gap-3 font-mono'>
            <AiFillCode />
            <p>Front / IoT</p>
          </div>
          <div className='flex flex-row items-center gap-3 font-mono'>
            <MdFavorite />
            <p>思いつき開発 / 自炊</p>
          </div>
          <div className='flex flex-row items-center gap-3 font-mono'>
            <GiCook />
            <p>いももち / 麻婆豆腐 / ドリア</p>
          </div>
        </div>
        <Image
          src='/images/frog_circle.png'
          priority
          alt='profile'
          className='hidden md:block'
          width={150}
          height={150}
        />
      </div>
      <div className='flex flex-row items-center justify-center gap-3'>
        <button
          type='button'
          onClick={() => setPictureModalOpen(!pictureModalOpen)}
          className={`${
            pictureModalOpen ? 'bg-secondary' : 'bg-primary'
          } flex w-1/4 flex-col items-center rounded-md border border-gray-200 px-2 py-1 text-xs text-gray-200 transition-all`}
        >
          <AiFillPicture size={50} />
          PICTURES
        </button>
        <button
          type='button'
          onClick={() => setLinkModalOpen(!linkModalOpen)}
          className={`${
            linkModalOpen ? 'bg-secondary' : 'bg-primary'
          } flex w-1/4 flex-col items-center rounded-md border border-gray-200 px-2 py-1 text-xs text-gray-200 transition-all`}
        >
          <BiLink size={50} />
          LINKS
        </button>
        <button
          type='button'
          onClick={() => setHistoryModalOpen(!historyModalOpen)}
          className={`${
            historyModalOpen ? 'bg-secondary' : 'bg-primary'
          } flex w-1/4 flex-col items-center rounded-md border border-gray-200 px-2 py-1 text-xs text-gray-200 transition-all`}
        >
          <MdHistoryEdu size={50} />
          HISTORY
        </button>
        <button
          type='button'
          onClick={() => setActivityModalOpen(!activityModalOpen)}
          className={`${
            activityModalOpen ? 'bg-secondary' : 'bg-primary'
          } flex w-1/4 flex-col items-center rounded-md border border-gray-200 px-2 py-1 text-xs text-gray-200 transition-all`}
        >
          <MdLocalActivity size={50} />
          ACTIVITY
        </button>
      </div>
      <Drag>
        <Modal isOpen={pictureModalOpen} onClose={() => setPictureModalOpen(false)} title='PICS'>
          <div className='flex h-80 flex-row items-center justify-center gap-4'>
            <button type='button' className='text-xs' onClick={() => picturePageNation('prev')}>
              <AiFillLeftCircle size={30} />
            </button>
            {PICTURES.map((picture, index) => (
              <Image
                className={`${index === picturePage ? 'block' : 'hidden'} rounded-md border border-gray-200`}
                key={picture.id}
                priority={index === picturePage}
                src={picture.src}
                alt={`picture-${picture.id}`}
                width={200}
                height={200}
              />
            ))}
            <button type='button' className='text-xs' onClick={() => picturePageNation('next')}>
              <AiFillRightCircle size={30} />
            </button>
          </div>
        </Modal>
      </Drag>
      <Drag>
        <Modal isOpen={linkModalOpen} onClose={() => setLinkModalOpen(false)} title='LINKS'>
          <div className='grid grid-cols-3 gap-4'>
            <a
              href='https://twitter.com/imaimai17468'
              target='_blank'
              rel='noopener noreferrer'
              className='flex items-center justify-center rounded-md border p-2 transition-all hover:shadow-md hover:shadow-gray-200'
            >
              <BsTwitter size={30} />
            </a>
            <a
              href='https://github.com/imaimai17468'
              target='_blank'
              rel='noopener noreferrer'
              className='flex items-center justify-center rounded-md border p-2 transition-all hover:shadow-md hover:shadow-gray-200'
            >
              <BsGithub size={30} />
            </a>
            <a
              href='https://note.com/imaimai17468'
              target='_blank'
              rel='noopener noreferrer'
              className='flex items-center justify-center rounded-md border p-2 transition-all hover:shadow-md hover:shadow-gray-200'
            >
              Note
            </a>
          </div>
        </Modal>
      </Drag>
      <Drag>
        <Modal isOpen={historyModalOpen} onClose={() => setHistoryModalOpen(false)} title='HISTORY'>
          <div className='flex flex-col items-center justify-center gap-4'>
            {HISTORY.map((history: History, index: number) => (
              <div
                key={index}
                className='flex w-full flex-row items-center justify-start gap-4 border-b border-dashed border-gray-200 pb-2'
              >
                <p className='w-1/5 text-center'>{history.date}</p>
                <p>{history.content}</p>
              </div>
            ))}
          </div>
        </Modal>
      </Drag>
      <Modal isOpen={activityModalOpen} onClose={() => setActivityModalOpen(false)} title='ACTIVITY'>
        <motion.div
          animate={{ y: [-4, 4, -4] }}
          transition={{ duration: 1, repeat: Infinity }}
          className='mb-3 flex flex-row items-center gap-2'
        >
          <CgScrollV />
          <p className='text-sm'>scroll</p>
          <CgScrollV />
        </motion.div>
        <div className='flex max-h-72 touch-pan-y flex-col items-center gap-4 overflow-auto'>
          {ACTIVITY.map((Activity: Activity, index: number) => (
            <div
              key={index}
              className='flex w-full flex-row items-center justify-start gap-4  border-b border-dashed border-gray-200 pb-2'
            >
              <p className='w-1/5 text-center'>{Activity.date}</p>
              <p>{Activity.content}</p>
            </div>
          ))}
        </div>
      </Modal>
    </Modal>
  )
}

export default AboutWindow
