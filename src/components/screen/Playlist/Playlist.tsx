import React, { useState, useEffect, useMemo } from 'react'
import useSound from 'use-sound'

import { Scratch } from '@/components/common'
import { SOUNDS } from '@/constants/sounds'

import { PlaylistProps } from './Playlist.type'

const MAX_LENGTH = 15

const Playlist = (props: PlaylistProps) => {
  const { setOpen, isOpen } = props

  const [isPlaying, setIsPlaying] = useState(false)
  const [nowIndex, setNowIndex] = useState(0)
  const [isRandom, setIsRandom] = useState(false)

  const [play, { pause, stop }] = useSound(SOUNDS[nowIndex].path, {
    volume: 0.5,
    onend: () => {
      if (isRandom) {
        setNowIndex(Math.floor(Math.random() * SOUNDS.length))
      } else {
        if (nowIndex === SOUNDS.length - 1) {
          setNowIndex(0)
        } else {
          setNowIndex(nowIndex + 1)
        }
      }
    },
  })

  const soundName = useMemo(() => {
    if (SOUNDS[nowIndex].name.length > MAX_LENGTH) {
      return `${SOUNDS[nowIndex].name.slice(0, MAX_LENGTH)}...`
    }
    return SOUNDS[nowIndex].name
  }, [nowIndex])

  const soundArtist = useMemo(() => {
    if (SOUNDS[nowIndex].artist.length > MAX_LENGTH) {
      return `${SOUNDS[nowIndex].artist.slice(0, MAX_LENGTH)}...`
    }
    return SOUNDS[nowIndex].artist
  }, [nowIndex])

  const handleIndex = (mode: 'next' | 'prev') => {
    stop()
    switch (mode) {
      case 'next':
        if (nowIndex === SOUNDS.length - 1) {
          setNowIndex(0)
        } else {
          setNowIndex(nowIndex + 1)
        }
        break
      case 'prev':
        if (nowIndex === 0) {
          setNowIndex(SOUNDS.length - 1)
        } else {
          setNowIndex(nowIndex - 1)
        }
        break
      default:
        break
    }
  }

  useEffect(() => {
    if (isPlaying) {
      play()
    } else {
      pause()
    }
  }, [isPlaying, play, pause])

  const togglePlay = () => {
    setIsPlaying(!isPlaying)
  }

  return (
    <div
      className={`
        absolute z-10 m-3 flex w-fit flex-col items-center justify-center rounded-xl border-2 border-gray-200 bg-slate-800 px-3 pt-1 pb-5 text-sm shadow-lg shadow-gray-200 transition-all 
        ${isOpen ? 'opacity-100' : 'hidden opacity-0'}
        `}
    >
      <div className='my-2 flex w-full flex-row justify-between'>
        <button
          type='button'
          className='flex h-6 w-6 cursor-pointer justify-items-center rounded-sm border-2 border-gray-200'
          onClick={() => {
            setOpen(false)
          }}
        >
          <span
            className='m-auto cursor-pointer'
            onClick={() => {
              setOpen(false)
            }}
          >
            ×
          </span>
        </button>
        {/* eslint-disable-next-line */}
        <div className='flex w-4/5 items-center rounded-sm bg-gray-200 px-2 text-slate-800'>///MUSIC/////////////</div>
      </div>
      <div className='h-fit w-fit border-x-2 border-gray-200 px-5'>
        <p className='mr-auto mb-8 w-fit border-b-2 border-gray-200 py-1 text-gray-200'>imaimai&#39;s playlist</p>
        <Scratch togglePlay={togglePlay} />
      </div>
      <div className='mt-5 flex flex-row place-items-center gap-10 text-gray-200'>
        <div>
          <p className='font-bold'>NAME</p>
          <p className='overflow-hidden text-ellipsis'>{soundName}</p>
        </div>
        <div>
          <p className='font-bold'>ARTIST</p>
          <p>{soundArtist}</p>
        </div>
      </div>
      <div className='mt-5 flex flex-row gap-10 text-xl'>
        <div
          className='flex h-10 w-10 cursor-pointer justify-items-center rounded-full border-2 border-gray-200 transition-all hover:border-4'
          onClick={() => {
            handleIndex('prev')
          }}
        >
          <span className='m-auto'>👈</span>
        </div>
        <div
          className={`flex h-10 w-10 cursor-pointer justify-items-center rounded-full border-2 border-gray-200 transition-all hover:border-4 
              ${isRandom ? 'border-orange-300' : ''}
              `}
          onClick={() => {
            setIsRandom(!isRandom)
          }}
        >
          <span className='m-auto'>🎲</span>
        </div>
        <div
          className='flex h-10 w-10 cursor-pointer justify-items-center rounded-full border-2 border-gray-200 transition-all hover:border-4'
          onClick={() => {
            handleIndex('next')
          }}
        >
          <span className='m-auto'>👉</span>
        </div>
      </div>
    </div>
  )
}

export default Playlist
