import React from 'react'
import { FaFacebook, FaInstagram, FaTiktok, FaTwitter } from 'react-icons/fa';
const Contact = () => {
  return (
    <div>
    <div className='mt-2 container bg-[#001F54]  h-[500px] w-full  '>
        <div className='flex flex-col justify-start items-start mx-2 font-bold mt-auto'>
      <h1 className='mx-4 text-white'>For any inquiries or support, feel free to reach out to us via email at  
        <span className='cursor-pointer underline  font-bold text-blue-500'> alamumichael74@gmail.com.</span> We look forward to assisting you!</h1>
      <h1  className='mx-4 text-white mt-4'>If you don't have access to email, feel free to reach out to us via our social media channels.</h1>
      </div>
   

    </div>
        {/* Footer */}
        <footer className="container cursor-pointer shadow-lg h-auto w-full bg-[#001F54] text-center text-white flex flex-col items-center justify-center py-4">
  <div className="flex flex-col md:flex-row justify-between items-center gap-4 mx-auto w-full px-4">
    {/* Footer Links */}
    <div className="flex flex-col md:flex-row text-white justify-center items-center md:justify-start gap-6 duration-1000">
      <div className="hover:text-[#6BAED6] text-sm md:text-xl duration-1000">Terms of Use</div>
      <div className="hover:text-[#6BAED6] text-sm md:text-xl duration-1000">Privacy Policy</div>
      <div className="hover:text-[#6BAED6] text-sm md:text-xl duration-1000">About Us</div>
      <div className="hover:text-[#6BAED6] text-sm md:text-xl duration-1000">FAQs</div>
      <div className="hover:text-[#6BAED6] text-sm md:text-xl duration-1000">Contact Us</div>
      <div className="hover:text-[#6BAED6] text-sm md:text-xl duration-1000">Refund Policy</div>
    </div>

    {/* Social Media Icons */}
    <div className="flex flex-row justify-center md:justify-start items-center gap-4 mt-4 md:mt-0">
      <FaFacebook className="hover:text-[#6BAED6] text-2xl md:text-xl duration-1000" />
      <FaInstagram className="hover:text-[#6BAED6] text-2xl md:text-xl duration-1000" />
      <FaTwitter className="hover:text-[#6BAED6] text-2xl md:text-xl duration-1000"/>
      <FaTiktok className="hover:text-[#6BAED6] text-2xl md:text-xl duration-1000"/>
    </div>
  </div>

  {/* Copyright Text */}
  <p className="text-sm mt-8">© 2024 crytotec. All rights reserved.</p>
</footer>
    </div>
  )
}


export default Contact
