'use client'
import { SignedOut, SignedIn, UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Button } from '../ui/button'
import NavItems from './NavItems'
import MobileNav from './MobileNav'
import { useTheme } from "next-themes"
import { Moon, Sun } from 'lucide-react'

const Header = () => {
    const { theme, setTheme } = useTheme()
    const toggleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light");
    };
  return (
    <header className='w-full  '>  
        <div className='wrapper flex-between'>
            <Link href='/' className='w-36'>
            <Image src="/assets/images/logo.svg" width={128} height={38} alt='Evently logo' priority={false} placeholder ="empty"/>
            </Link>
            <SignedIn>
                <nav className='md:flex-between hidden w-full max-w-xs'>
                    <NavItems />
                    
                </nav>
            </SignedIn>
        
            <div className='flex w-32 justify-end gap-3'>
                {/* <Button className="flex justify-center items-center" variant="outline" size="icon" onClick={() => toggleTheme()}>
                    <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                    <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />        
                </Button> */}
                <SignedIn >
                    <UserButton />
                    <MobileNav />
                </SignedIn>
                <SignedOut>
                    <Button asChild className='rounded-full' size="lg">
                        <Link href="/sign-in">Login</Link>
                    </Button>
                </SignedOut>

            </div>
            
        </div>
       
    </header>
  
  )
}

export default Header