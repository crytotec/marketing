import React, { useState } from 'react';
import img from './image/img.jpg';
import img1 from './image/img1.png';
import { FaArrowUp, FaFacebook, FaInstagram, FaTiktok, FaTwitter } from 'react-icons/fa';
import { FaArrowDown } from 'react-icons/fa';
import { Link } from 'react-router-dom'; 

const App = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleDropdown = (index) => {
    setActiveIndex(activeIndex === index ? null : index); 
  };

  return (
    <div>
      {/* Header Section */}
      <div
        style={{
          backgroundImage: `url(${img})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        className="container flex flex-row justify-between items-center gap-2 h-[500px] w-full mt-2"
      >
        <div className="flex mx-4 flex-col justify-start items-start gap-4">
          <h1 className="text-[50px] font-bold text-white">Alamu Mikel</h1>
          <h2 className="text-[20px] text-white font-bold">Performance Marketing Professional</h2>
          <div className="list-styling flex text-[15px] font-bold flex-col text-white">
            <p>Started my Digital Marketing career in 2019</p>
            <p>Work as a freelancer on Upwork and PeoplePerHour for over 5 years</p>
            <p>Became a Google certified trainer in 2023 and trained global vendor teams across the globe</p>
          </div>
        </div>
      </div>

      {/* Current Projects Section */}
      <div className="container flex flex-row items-center justify-center h-[500px] w-full bg-[#001F54] shadow-lg text-white mt-6 rounded-md">
        <div
          style={{
            backgroundImage: `url(${img1})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
          className="h-[500px] w-full shadow-lg"
        ></div>
        <div className="flex flex-col justify-start items-start gap-4 ml-6">
          <h1 className="text-lg font-semibold">
            I enjoy my job as a performance marketing strategist but for the love of training, I have been creating online content since 2023.
          </h1>
          <ul className="list-disc list-inside text-base">
            <li>90K+ Students on Udemy and 4K+ reviews (Rated 4.6*)</li>
            <li>Highest rated trainer and 4/8 best seller courses on Udemy</li>
            <li>Guest lecturer & Speaker in prestigious universities and events like:
              <ul className="list-disc list-inside ml-6">
                <li>Amity University Dubai</li>
                <li>Manipal University Dubai</li>
                <li>London Institute of Digital Marketing</li>
                <li>Astro Labs</li>
                <li>Step Conference</li>
              </ul>
            </li>
          </ul>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="container flex flex-col items-center justify-center h-auto w-full bg-[#001F54] mt-6 rounded-md text-white">
        <h1 className="text-3xl font-bold text-center">Frequently Asked Questions</h1>
        <div className="flex flex-col mt-4 justify-between items-center gap-2 w-full">
          {/* FAQ 1 */}
          <div
            onClick={() => toggleDropdown(0)} 
            className="w-full md:w-[800px] mx-2 flex items-center h-[50px] rounded-lg bg-blue-800 border-black shadow-lg cursor-pointer"
          >
            <h1 className="mx-2 text-sm md:text-lg">How to take a Course?</h1>
            {activeIndex === 0 ? <FaArrowUp className="ml-auto text-sm md:text-lg" /> : <FaArrowDown className="ml-auto text-sm md:text-lg" />}
          </div>
          {activeIndex === 0 && (
            <div className="w-full md:w-[800px] mx-2 p-4 bg-blue-700 text-white rounded-lg shadow-md">
              <p className="text-sm md:text-base">
                After you have purchased the course or used the access code of the course, the course would be added to your "My Course" section. Click on the course image to start the course.
              </p>
            </div>
          )}

          {/* FAQ 2 */}
          <div
            onClick={() => toggleDropdown(1)} 
            className="w-full md:w-[800px] mx-2 flex items-center h-[50px] rounded-lg bg-blue-800 border-black shadow-lg cursor-pointer"
          >
            <h1 className="mx-2 text-sm md:text-lg">What is the refund policy?</h1>
            {activeIndex === 1 ? <FaArrowUp className="ml-auto text-sm md:text-lg" /> : <FaArrowDown className="ml-auto text-sm md:text-lg" />}
          </div>
          {activeIndex === 1 && (
            <div className="w-full md:w-[800px] mx-2 p-4 bg-blue-700 text-white rounded-lg shadow-md">
              <p className="text-sm md:text-base">
                Refunds are available within 30 days of purchase for eligible courses. You can request a refund from your course dashboard.
              </p>
            </div>
          )}

          {/* FAQ 3 */}
          <div
            onClick={() => toggleDropdown(2)} 
            className="w-full md:w-[800px] mx-2 flex items-center h-[50px] rounded-lg bg-blue-800 border-black shadow-lg cursor-pointer"
          >
            <h1 className="mx-2 text-sm md:text-lg">How do I contact support?</h1>
            {activeIndex === 2 ? <FaArrowUp className="ml-auto text-sm md:text-lg" /> : <FaArrowDown className="ml-auto text-sm md:text-lg" />}
          </div>
          {activeIndex === 2 && (
            <div className="w-full md:w-[800px] mx-2 p-4 bg-blue-700 text-white rounded-lg shadow-md">
              <p className="text-sm md:text-base">
                You can contact support by emailing us directly at alamumichael74@gmail.com.
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Footer */}
      <footer className="container cursor-pointer shadow-lg h-auto w-full bg-[#001F54] text-center text-white flex flex-col items-center justify-center mt-6 py-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mx-auto w-full px-4">
          {/* Footer Links */}
          <div className="flex flex-col md:flex-row text-white justify-center items-center md:justify-start gap-6 duration-1000">
            <Link to="/" className="hover:text-[#6BAED6] text-sm md:text-xl duration-1000">Terms of Use</Link>
            <Link to="/" className="hover:text-[#6BAED6] text-sm md:text-xl duration-1000">Privacy Policy</Link>
            <Link to="/about" className="hover:text-[#6BAED6] text-sm md:text-xl duration-1000">About Us</Link>
            <Link to="/faq" className="hover:text-[#6BAED6] text-sm md:text-xl duration-1000">FAQs</Link>
            <Link to="/contact" className="hover:text-[#6BAED6] text-sm md:text-xl duration-1000">Contact Us</Link>
            <Link to="/" className="hover:text-[#6BAED6] text-sm md:text-xl duration-1000">Refund Policy</Link>
          </div>

          {/* Social Media Icons */}
          <div className="flex flex-row justify-center md:justify-start items-center gap-4 mt-4 md:mt-0">
            <a href="https://web.facebook.com/profile.php?id=61569186701029&mibextid=zbWKwl&_rdc=1&_rdr" target="_blank" rel="noopener noreferrer">
              <FaFacebook className="hover:text-[#6BAED6] text-2xl md:text-xl duration-1000" />
            </a>
            <a href='https://www.instagram.com/oz100X_/profilecard/?igsh=cG1KcHBidjMyenho'>
            <FaInstagram className="hover:text-[#6BAED6] text-2xl md:text-xl duration-1000" />
            </a>
            <a href='https://x.com/i/flow/login?redirect_after_login=%2FOz100x'>
            <FaTwitter className="hover:text-[#6BAED6] text-2xl md:text-xl duration-1000" />
            </a>
            <a href='https://www.tiktok.com/@oz100X'>
            <FaTiktok className="hover:text-[#6BAED6] text-2xl md:text-xl duration-1000" />
            </a>
          </div>
        </div>

        {/* Copyright Text */}
        <p className="text-sm mt-8">© 2024 crytotec. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;
