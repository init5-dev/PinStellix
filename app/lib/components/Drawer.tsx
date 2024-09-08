'use client'

import Image from 'next/image'
import Navbar from './Navbar'
import SidebarGroup from './SidebarGroup'
import categories from '@/app/lib/mocks/contents/categories.json'
import Breadcrumb from './Breadcrumb'
import Footer from './Footer'

const Drawer: React.FC<{
  children: React.ReactNode
}> = ({ children }) => {
  const close = () => {
    const myDrawer = document.getElementById('my-drawer') as HTMLInputElement

    if (myDrawer) myDrawer.checked = false
  }

  return (
    <div className='drawer'>
      <input id='my-drawer' type='checkbox' className='drawer-toggle' />
      <div className='drawer-content min-h-screen flex flex-col justify-between'>
        <Navbar />
        <Breadcrumb />
        <div className='px-2 md:px-4 flex-grow'>{children}</div>
        <Footer />
      </div>
      <div className='drawer-side z-50'>
        <label htmlFor='my-drawer' className='drawer-overlay'></label>
        <div className='menu w-full lg:w-auto bg-base-200 bg-opacity-75 backdrop-blur-[2px] text-base-content min-h-full p-4'>
          <header className='flex items-center justify-between pl-4'>
            <a href='/'>
              <Image
                src='/Planet.png'
                width={56}
                height={56}
                alt='PinStellix Logo'
              />
            </a>
            <a href='/'>
              <span className='text-3xl font-semibold -ml-6'>PinStellix</span>
            </a>
            <label className='btn btn-square btn-ghost' onClick={close}>
              X
            </label>
          </header>
          <SidebarGroup name='SpaceX' href="/spacex" categories={categories.spacex} />
          <SidebarGroup name='NASA' categories={categories.nasa} />
        </div>
      </div>
    </div>
  )
}

export default Drawer
