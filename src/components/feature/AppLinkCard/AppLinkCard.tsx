'use client'

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import { CardBody, CardContainer, CardItem } from '@/components/common/3dCard'

export function AppLinkCard() {
  return (
    <CardContainer className='inter-var'>
      <CardBody className='group/card relative flex  h-auto w-auto flex-col gap-4 rounded-xl border border-neutral-700 bg-background p-6'>
        <CardItem translateZ='70' className='border-b-2 border-emerald-400 text-2xl font-bold'>
          Applications
        </CardItem>
        <CardItem as='p' translateZ='60' className='max-w-sm text-sm text-neutral-300'>
          今まで作ったいまいまいのアプリたち
        </CardItem>
        <CardItem translateZ='100' className='mt-4 w-full'>
          <Image
            src='/images/products/akeome.png'
            height='1000'
            width='1000'
            className='h-60 w-full rounded-xl object-cover group-hover/card:shadow-xl'
            alt='thumbnail'
          />
        </CardItem>
        <Link href='/apps' className='ml-auto'>
          <CardItem translateZ={30} as='button' className='rounded-xl bg-black px-4 py-2 text-xs font-bold text-white'>
            View Apps
          </CardItem>
        </Link>
      </CardBody>
    </CardContainer>
  )
}
