"use client";
import React, { useState } from "react";
import "../css/About.css";
import { useInView } from "react-intersection-observer";
import Link from "next/link";
import Image from "next/image";
const Profile = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  return (
    <>
      <section className="bg-black min-h-screen mt-[80px]">
        <div className="p-8 text-sm">
          <Link href="/">Home</Link>
          <span> &gt; </span>
          <Link href="/about">About</Link>
        </div>
        <div className="about_wrapper">
          <div className="about_background">
            <div className="about_title">
              <h1 className="about-text">ABOUT</h1>
            </div>
            <div className="about_content">
              <h3 className="text-3xl py-8">
                基礎から実践への橋渡しをサポート
              </h3>
              <p className="text-lg">
                Progateやドットインストールでプログラミングの文法は何となくわかったけれど、次に何をしたらいいのか悩んでいる方をサポートします。
                <br />
                即日対応のチャットサポートやビデオ通話での画面共有などを使って、あなたに最適な学習環境を整えています。
              </p>
              <p className="mt-8 text-lg">
                一緒にプログラミングを学び世界で活躍しましょう。
              </p>
            </div>
          </div>
          <div className="about_image w-full">
            <div className="scrollContainer flex flex-wrap md:flex-nowrap justify-center">
              <Image
                src="/images/about1.jpg"
                alt="about"
                width={400}
                height={300}
                className="hover:scale-110 transition-all"
              />
              <Image
                src="/images/about2.jpg"
                alt="about"
                width={400}
                height={300}
                className="hover:scale-110 transition-all"
              />
              <Image
                src="/images/about3.jpg"
                alt="about"
                width={400}
                height={300}
                className="hover:scale-110 transition-all"
              />
              <Image
                src="/images/about4.jpg"
                alt="about"
                width={400}
                height={300}
                className="hover:scale-110 transition-all"
              />

              <Image
                src="/images/about1.jpg"
                alt="about"
                width={400}
                height={300}
                className="hover:scale-110 transition-all hidden md:block"
              />
              <Image
                src="/images/about2.jpg"
                alt="about"
                width={400}
                height={300}
                className="hover:scale-110 transition-all hidden md:block"
              />
              <Image
                src="/images/about3.jpg"
                alt="about"
                width={400}
                height={300}
                className="hover:scale-110 transition-all hidden md:block"
              />
              <Image
                src="/images/about4.jpg"
                alt="about"
                width={400}
                height={300}
                className="hover:scale-110 transition-all hidden md:block"
              />
              <Image
                src="/images/about2.jpg"
                alt="about"
                width={400}
                height={300}
                className="hover:scale-110 transition-all hidden md:block"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="bg-black min-h-screen profile">
        <div className="profile_background" ref={ref}>
          <div className="profile_title">
            <h1 className={`profile-text ${inView ? "in-view" : ""}`}>
              Profile
            </h1>
          </div>
          <div
            className={`profile_content md:flex ${inView ? "slide-up" : ""}`}
          >
            <Image
              src="/images/profile.jpg"
              width={400}
              height={300}
              alt="プロフィール"
              className={`mt-8 profile_image ${inView ? "slide-up" : ""}`}
            />
            <div className="p-8 text-lg">
              【経歴】
              <p>東京工業大学大学院博士後期課程卒業</p>
              <p className="mb-4">(理学博士)</p>
              <p>
                秋田県生まれ秋田育ち。大学時代に上京。大学在学中にビジュアル系バンドに在籍しており没頭したあまり2度留年経験あり。パートはDrum。つのだ☆ひろ氏や元
                L&apos;Arc〜en〜CielのSakura氏に師事。必須科目の試験よりライブを優先していた。
              </p>
              <p className="mt-4">
                30歳をすぎてからプログラミングを学びフルスタックエンジニアとして活動中。
                <br />
                HTML/CSS/Javascript/PHP/MySQL/Python/React/Next.js/Laravelなどを扱っています。
              </p>
              <br />
              <h1 className="text-3xl">KANEMICHI MURAOKA</h1>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Profile;
