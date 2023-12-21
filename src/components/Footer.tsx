import Image from "next/image";
import Link from "next/link";
import React from "react";
import "../app/css/Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
const Footer = () => {
  return (
    <footer>
      <div className="p-8 footer_wrapper flex items-center md:block justify-around bg-black">
        <Link href="/">
          <h1 className="text-3xl">KeNN Code</h1>
        </Link>
        <div className="footer_menu flex flex-wrap justify-center md:justify-start text-white">
          <Link href="/" className="mt-2 mr-2 rounded hover:underline ">
            HOME
          </Link>
          <Link href="/about" className="p-2 rounded hover:underline ">
            ABOUT
          </Link>
          <Link href="/blog" className="p-2 rounded hover:underline ">
            BLOG
          </Link>
          <Link href="/potoforio" className="p-2 rounded hover:underline ">
            POTOFOLIO
          </Link>
          <Link href="/contact" className="p-2 rounded hover:underline">
            CONTACT
          </Link>
        </div>
        <div className="footer_sosial flex items-center">
          <FontAwesomeIcon
            icon={faTwitter}
            style={{ color: "#0666e5" }}
            className="w-10 mr-2"
          />
          <FontAwesomeIcon
            icon={faYoutube}
            style={{ color: "#e93407" }}
            className="w-10"
          />
        </div>
      </div>
      <div className="footer_policy flex justify-between bg-black px-8 pb-2">
        <p className="text-white text-sm">
          &copy; 2023 KennCode. All rights reserved.
        </p>
        <p className="text-white text-sm">Privacy Policy</p>
      </div>
    </footer>
  );
};

export default Footer;
