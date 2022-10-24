import clsx from 'clsx'
import { Dropdown } from '@components/common'
import {
  Account,
  Apartment,
  Exchange,
  FormatList,
  House,
  Swap,
  WhiteLogo,
} from '@components/icons'

const Header = () => {
  return (
    <div
      className={clsx(
        'bg-primary-1 align-center grid h-16 w-full grid-cols-3 items-center',
      )}
    >
      <div
        className={clsx(
          'justify-left h-1/1 col-span-1 items-center sm:pl-2 lg:pl-4',
        )}
      >
        <a href={process.env.CLIENT_URL}>
          <p className={clsx('text-text-main-white text-xl')}>
            imaimai's Portfoilio
          </p>
        </a>
      </div>
      <div className={clsx('mx-auto')}>
        <div
          className={clsx(
            'gird-cols-3 text-main-white text-text-main-white grid hidden w-full gap-8 text-xl font-bold lg:flex',
          )}
        >
          <a href={'/rent'}>About</a>
          <a href={'/buy'}>Products</a>
          <a href={'/lend'}>Link</a>{' '}
        </div>
      </div>
      <div
        className={clsx(
          'col-span-1 flex h-full w-full items-center justify-end pr-4',
        )}
      >
        {/* <Account color={'#fff'} className={'sm:hidden lg:flex'} /> */}
        <Dropdown>
          <a
            className={clsx(
              'text-md w-1/1 mt-1 grid grid-cols-4 border-b-2 border-gray-300 pl-2 pb-1',
            )}
            href={'/rent'}
          >
            <div className="col-span-1 flex justify-center">
              <Apartment />
              <Swap />
            </div>
            <span className="border-primary-1 col-span-2 ml-1 border-l-2 border-dashed pl-1">
              About
            </span>
          </a>
          <a
            className={clsx(
              'text-md w-1/1 mt-1 grid grid-cols-4 border-b-2 border-gray-300 pl-2 pb-1',
            )}
            href={'/buy'}
          >
            <div className="col-span-1 flex justify-center">
              <House />
              <Swap />
            </div>
            <span className="border-primary-1 col-span-2 ml-1 border-l-2 border-dashed pl-1">
              Products
            </span>
          </a>
          <a
            className={clsx(
              'text-md w-1/1  my-1 grid grid-cols-4 border-b-2 border-gray-300 pb-1  pl-2',
            )}
            href={'/sell'}
          >
            <div className="col-span-1 flex  justify-center">
              <FormatList />
            </div>
            <span className="border-primary-1 col-span-2 ml-1 border-l-2 border-dashed pl-1">
              Links
            </span>
          </a>
        </Dropdown>
      </div>
    </div>
  )
}

export default Header
