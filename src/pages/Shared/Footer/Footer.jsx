import React from "react";
import {
  GrFacebookOption,
  GrGithub,
  GrLinkedinOption,
  GrInstagram,
  GrTwitter,
} from "react-icons/gr";
import { RiTwitterXFill } from "react-icons/ri";
import { FaWhatsapp } from "react-icons/fa";
import { FaMedium } from "react-icons/fa6";
import { FaThreads } from "react-icons/fa6";
import { SiLinktree } from "react-icons/si";
import { FaDiscord } from "react-icons/fa";
import { Link } from "react-router-dom";
import moment from "moment";
const Footer = () => {
  return (
    <div>
      {/* <div className="bg-gradient-to-bl from-transparent via-transparent to-gray-300 opacity-10 animate-pulse  mt-20"> */}
      <div className=" ">
      
        {/* <div className="w-full h-full bg-gradient-to-tr from-gray-900 via-gray-900 to-gray-300 opacity-10 animate-pulse"></div> */}
        {/* <div className="absolute inset-0 z-10 bg-particles animate-particles"></div> */}
        <footer className="footer footer-center p-10 text-base-content rounded max-w-[1250px] mx-auto">
          <div>
            <div className="flex gap-3 text-white mx-8">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.facebook.com/talha.tarique.5"
                className="text-[25px] hover:text-base-content transition duration-300"
              >
                <GrFacebookOption />
              </a>
              {/* <a target='_blank' rel="noreferrer" href='https://www.linkedin.com/in/talha-tarique/' className='border-[1px] p-[5px] rounded-full hover:bg-[#444] transition duration-300'><GrLinkedinOption /></a> */}
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.linkedin.com/in/talha-tarique/"
                className="text-[25px] hover:text-base-content transition duration-300"
              >
                <GrLinkedinOption />
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://twitter.com/TalhaTarique1"
                className="text-[25px] hover:text-base-content transition duration-300"
              >
                <RiTwitterXFill />
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/TalhaT298"
                className="text-[25px] hover:text-base-content transition duration-300"
              >
                <GrGithub />
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.instagram.com/talha_tarique77/"
                className="text-[23px] hover:text-base-content transition duration-300  hidden lg:block"
              >
                <GrInstagram />
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://wa.link/8bkntc"
                className="text-[25px] hover:text-base-content transition duration-300"
              >
                <FaWhatsapp />
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://medium.com/@talhatarique"
                className="text-[25px] hover:text-base-content transition duration-300"
              >
                <FaMedium />
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.threads.net/@talha_tarique77"
                className="text-[25px] hover:text-base-content transition duration-300  hidden lg:block"
              >
                <FaThreads />
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://linktr.ee/talhatarique"
                className="text-[25px] hover:text-base-content transition duration-300"
              >
                <SiLinktree />
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://discord.gg/uxpwasKq"
                className="text-[25px] hover:text-base-content transition duration-300 hidden lg:block"
              >
                <FaDiscord />
              </a>
            </div>
          </div>
          <div>
            <b>{moment().format("MMMM Do YYYY dddd, h:mm a")}</b>
          </div>
          <div>
            {/* <p>Copyright ©2024 All right reserved by Talha Tarique</p> */}
            <p>Copyright ©{moment().format("YYYY")} All rights reserved by Talha Tarique</p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;