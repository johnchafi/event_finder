import React from 'react'
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
import Image from 'next/image'
import { Separator } from '../ui/separator'
import NavItems from './NavItems'

const MobileNav = () => {
  return (
    <nav className='md:hidden'>
        <Sheet>
            <SheetTrigger className='align-middle'><Image src="/assets/icons/menu.svg" height={24} width={24} alt='menu' className='cursor-pointer'/></SheetTrigger>
            <SheetContent className='flex flex-col gap-6  bg-white'>
                <Image 
                src="/assets/images/logo.svg"
                width={128}
                height={38}
                alt='logo'
                />
                <Separator className='border border-gray-50'/>
                <NavItems />
            </SheetContent>
        </Sheet>
    </nav>
  )
}

export default MobileNav