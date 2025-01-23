"use client"
import React from 'react'
import {
    FacebookShareButton,
    FacebookIcon,
    WhatsappShareButton,
    WhatsappIcon,
    LinkedinShareButton,
    LinkedinIcon,
    EmailShareButton,
    EmailIcon
  } from 'next-share';

  export default  function ShareButtons() {
  return (
    <div className='sm:flex items-center justify-center gap-1'>
        <FacebookShareButton url={'http://localhost:3000'} >
            <FacebookIcon size={32} round />
        </FacebookShareButton>
    
        <WhatsappShareButton url={'http://localhost:3000'} >
            <WhatsappIcon size={32} round />
        </WhatsappShareButton>
        <LinkedinShareButton url={'http://localhost:3000'} >
            <LinkedinIcon size={32} round />
        </LinkedinShareButton>
        <EmailShareButton url={'http://localhost:3000'} >
            <EmailIcon size={32} round />
        </EmailShareButton>
  </div>
  )
}