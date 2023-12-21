"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <header className="bg-white text-white h-20 flex fixed top-0 w-full z-50">
      <div className="flex justify-around items-center text-black w-full">
        <Link href="/" className="flex items-center justify-center">
          <Image src="/images/logo.png" width={80} height={100} alt="ロゴ画像" className="inline"/>
          <h1 className="text-3xl">KeNN Code</h1>
        </Link>
        <nav className="flex gap-5 hidden md:block">
          <Link
            href="/"
            className="shadow-xl p-2 rounded hover:underline text-black"
          >
            HOME
          </Link>
          <Link
            href="/about"
            className="shadow-xl p-2 rounded hover:underline text-black"
          >
            ABOUT
          </Link>
          <Link
            href="/"
            className="shadow-xl p-2 rounded hover:underline text-black"
          >
            BLOG
          </Link>
          <Link
            href="/potofolio"
            className="shadow-xl p-2 rounded hover:underline text-black"
          >
            POTOFOLIO
          </Link>
          <Link
            href="/"
            className="shadow-xl p-2 rounded hover:underline text-black"
          >
            CONTACT
          </Link>
        </nav>
        <div
          className={`openbtn md:hidden block ${isOpen && "active ml-28"}`}
          onClick={handleClick}
        >
          <div className="openbtn-area">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <nav className={`mobile-menu relative ${isOpen ? "" : "hidden"}  `}>
          <ul
            className={`flex flex-wrap gap-5 absolute w-28 top-[50px] right-[10px] md:hidden ${
              isOpen ? "bg-black" : "hidden "
            }`}
          >
            <Link href="/">
              <li className="text-white rounded">HOME</li>
            </Link>
            <Link href="/about">
              <li className="text-white rounded">ABOUT</li>
            </Link>
            <Link href="/">
              <li className="text-white rounded">BLOG</li>
            </Link>
            <Link href="/potoforio">
              <li className="text-white rounded">POTOFOLIO</li>
            </Link>
            <Link href="/">
              <li className="text-white rounded">CONTACT</li>
            </Link>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
