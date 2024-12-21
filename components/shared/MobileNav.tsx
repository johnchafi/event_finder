"use client"
import { useState } from "react"
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
  const [sheetOpen, setSheetOpen] = useState(false);
  return (
    <nav className='md:hidden'>
        <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
            <SheetTrigger className='align-middle cursor-pointer bg-[#66696F] rounded-sm'><Image src="/assets/icons/menu.svg" height={24} width={24} alt='menu' /></SheetTrigger>
            <SheetContent className='md:hidden flex flex-col gap-6 bg-[#121212] border border-[#121212] shadow-sm shadow-primary-800'>
                <Image 
                src="/assets/images/logo.svg"
                width={128}
                height={38}
                alt='logo'
                />
                <Separator className='border border-[#8e9dbc]'/>
                <NavItems setOpen={setSheetOpen}/>
            </SheetContent>
        </Sheet>
    </nav>
  )
}

export default MobileNav