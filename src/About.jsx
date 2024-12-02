import React from 'react'
import { FaFacebook, FaInstagram, FaTiktok, FaTwitter } from 'react-icons/fa';
const About = () => {
  return (
    <div>
     <div className='container w-full h-[500px] mt-2 flex justify-start mx-auto bg-[#001F54]'>
        <p className='text-wrap text-white mt-4 mx-2'> Alamu Michael is a graduate of Ladoke Akintola University of Technology, where he earned his degree and developed a passion for digital marketing. He began his career as a digital marketer in 2019 and has since gained valuable experience in the field. Over the years, he has trained numerous individuals, primarily within his alma mater, helping them build their skills and pursue successful careers in digital marketing. His commitment to knowledge-sharing and professional growth has made a significant impact on his peers and students.</p>
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

export default About
