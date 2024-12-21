"use client"
import { headerLinks } from '@/constants'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const NavItems = (props: any) => {
    const pathname = usePathname();
  return (
    <ul className='flex flex-col w-full items-start gap-5 md:flex-row md:flex-between text-gray-400 '>{
        headerLinks.map((link)=>{
            const isActive = pathname === link.route;
           return(
            <li  key={link.route} className={`${
                isActive && 'text-primary-800'
            } flex-center  p-medium-16 whitespace-nowrap hover:text-gray-600 `} onClick={() => props.setOpen? props.setOpen(false) : undefined}>
                <Link 
                href={link.route}
               
                
                >
                    {
                        link.label
                    }
                </Link>
            </li>
           )
        })
    }</ul>
  )
}

export default NavItems