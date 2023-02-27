import Image from 'next/image'
import { useState } from 'react'

import { Modal } from '@/components/common'
import { Drag } from '@/components/layout/Drag'
import { PICTURES } from '@/constants/pictures'

import { AboutWindowProps } from './AboutWindow.type'

export const AboutWindow: React.FC<AboutWindowProps> = ({ isOpen, onClose }: AboutWindowProps) => {
  const [pictureModalOpen, setPictureModalOpen] = useState(false)
  const [picturePage, setPicturePage] = useState(0)
  const [linkModalOpen, setLinkModalOpen] = useState(false)

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
      <div className='mb-5 flex flex-row gap-3'>
        <button
          type='button'
          onClick={() => setPictureModalOpen(!pictureModalOpen)}
          className={`${
            pictureModalOpen ? 'bg-secondary' : 'bg-primary'
          } rounded-md border border-gray-200 px-2 py-1 text-sm text-gray-200 transition-all`}
        >
          PICTURES
        </button>
        <button
          type='button'
          onClick={() => setLinkModalOpen(!linkModalOpen)}
          className={`${
            linkModalOpen ? 'bg-secondary' : 'bg-primary'
          } rounded-md border border-gray-200 px-2 py-1 text-sm text-gray-200 transition-all`}
        >
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
