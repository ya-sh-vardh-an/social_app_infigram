'use client'

import Image from 'next/image';
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

import GetCondition from '@/app/__conditions__/GetCondition';
import { sidebarLinks } from '@/constants';
import { INavLink } from '@/types';

const Bottombar = () => {
  const pathname = usePathname();
  // const condition = GetCondition();

  return (
    <section className={`bottom-bar mx-auto p-0 max-w-[500px] blue-glassmorphism`}>
      { sidebarLinks.map((link: INavLink, idx: number) => {
        const isActive = pathname === link.route
        return (
          <div key={link.label} className={`w-full h-full ${isActive ? 'bg-blue-500 rounded-t-xl transition' : 'hover:bg-[#ffffff30] hover:rounded-t-xl'}`}>
            <Link href={link.route} className='flex justify-center item-center p-2' prefetch>
              <Image 
                src={link.imgURL}
                alt={link.label}
                width={30}
                height={20}
                className={`fill-white group-hover:invert-white ${ isActive && 'invert-white' }`}
              />
            </Link>
          </div>
        )
      }) }
    </section>
  )
}

export default Bottombar