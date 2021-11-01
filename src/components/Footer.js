import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import CallIcon from '@mui/icons-material/Call';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function Footer() {
    return (
        <div className='p-4 justify-center bg-white dark:bg-gray-700 flex  items-center shadow-xl  '>
           <a href="https://www.instagram.com/thakur_rs_tomar/" rel="noreferrer" target="_blank"  alt="Instagram"><InstagramIcon className='mx-10 cursor-pointer dark:text-white'/></a> 
            <a href="http://wa.me/8291774460" rel="noreferrer" target="_blank"><WhatsAppIcon className='mx-10 cursor-pointer dark:text-white'/></a>
            <a href="tel:+91 8291774460" rel="noreferrer" target="_blank"> <CallIcon className='mx-10 cursor-pointer dark:text-white'/></a>
            <a href="https://www.linkedin.com/in/rohan-tomar-226430164/" rel="noreferrer" target="_blank"><LinkedInIcon className='mx-10  cursor-pointer dark:text-white'/></a>
           </div>
    )
}

export default Footer
