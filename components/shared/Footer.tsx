import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className='border-t-5'>
      <div className='flex-center wrapper flex flex-between  flex-col gap-4 p-5 text-center sm:flex-row'>
        <Link href="/">
        <Image src="/assets/images/logo.svg" width={128} height={38} alt='logo'/>
        </Link>
        <p>2024 Eventhub. All right reserved</p>
      </div>
      </footer>
  )
}

export default Footer