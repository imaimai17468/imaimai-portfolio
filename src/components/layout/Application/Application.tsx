import { useState } from 'react'
import { FiExternalLink } from 'react-icons/fi'
import { RiSlideshowLine } from 'react-icons/ri'
import { SiGithub, SiQiita } from 'react-icons/si'

import { Product } from '@/@types/product'
import { Modal } from '@/components/common'
import { products } from '@/constants/products'
import { useCursor } from '@/hooks/useCursor'

import { ApplicationProps } from './Application.types'

const ProductCard: React.FC<{ product: Product }> = ({ product }: { product: Product }) => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const { cursorChange2Link, cursorChange2Default, cursorChange2Page } = useCursor()

  return (
    <>
      {isModalOpen && (
        <Modal title={product.name} onClose={() => setIsModalOpen(false)}>
          <div className='flex flex-col gap-4 md:flex-row'>
            {product.image && <img src={product.image} alt={product.name} className='w-full rounded-md md:w-1/2' />}
            <div className='flex flex-col gap-2'>
              <div className='flex flex-col gap-2'>
                <p className='w-fit border-b border-emerald-400 font-bold'>開発人数</p>
                <p>{product.popularity}人</p>
              </div>
              <div className='flex flex-col gap-2'>
                <p className='w-fit border-b border-emerald-400 font-bold'>役割</p>
                <p>{product.role}</p>
              </div>
              <div className='flex flex-col gap-2'>
                <p className='w-fit border-b border-emerald-400 font-bold'>開発期間</p>
                <p>{product.date}</p>
              </div>
              <div className='flex flex-col gap-2'>
                <p className='w-fit border-b border-emerald-400 font-bold'>使用技術</p>
                <div className='flex gap-2'>
                  {product.techs.map((tech) => (
                    <p key={tech}>{tech}</p>
                  ))}
                </div>
              </div>
              <div className='flex flex-col gap-2'>
                <p className='w-fit border-b border-emerald-400 font-bold'>説明</p>
                <p>{product.description}</p>
              </div>
              <div className='flex flex-col gap-2'>
                <p className='w-fit border-b border-emerald-400 font-bold'>関連リンク</p>
                <div className='flex gap-2'>
                  {product.links?.github && (
                    <a href={product.links?.github} className='cursor-pointer'>
                      <SiGithub size='2rem' />
                    </a>
                  )}
                  {product.links?.product && (
                    <a href={product.links?.product} className='cursor-pointer'>
                      <FiExternalLink size='2rem' />
                    </a>
                  )}
                  {product.links?.slide && (
                    <a href={product.links?.slide} className='cursor-pointer'>
                      <RiSlideshowLine size='2rem' />
                    </a>
                  )}
                  {product.links?.qiita && (
                    <a href={product.links?.qiita} className='cursor-pointer'>
                      <SiQiita size='2rem' />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </Modal>
      )}
      <button
        type='button'
        className='cursor-pointer break-words border border-emerald-400 p-2 text-sm md:text-xl'
        onClick={() => setIsModalOpen(true)}
        onMouseEnter={() => cursorChange2Page()}
        onMouseLeave={() => cursorChange2Default()}
      >
        {product.logo ? <img src={product.logo} className='rounded-sm bg-gray-300 p-2' /> : <p>{product.name}</p>}
      </button>
    </>
  )
}

const Application: React.FC<ApplicationProps> = ({ applicationRef }: ApplicationProps) => (
  <div
    id='application'
    className='my-12 w-9/10 bg-background bg-opacity-70 p-10 lg:my-48 lg:w-3/5 xl:w-1/2'
    ref={applicationRef}
  >
    <h2 className='w-fit border-b-2 border-emerald-400 text-2xl'>App</h2>
    <div className='my-5 flex flex-col items-center justify-between md:flex-row md:gap-20'>
      <div className='grid w-full grid-cols-2 gap-4'>
        {products.map((product) => (
          <ProductCard key={product.name} product={product} />
        ))}
      </div>
    </div>
  </div>
)

export default Application
