"use client";
import ThreeBack from "@/components/ThreeBack";
import { useInView } from "react-intersection-observer";
import "../app/css/Home.css";
import Link from "next/link";
import Image from "next/image";
export default function Home() {
  const [ref1, inView1] = useInView({
    triggerOnce: false,
  });

  const [ref2, inView2] = useInView({
    triggerOnce: false,
  });

  const [ref3, inView3] = useInView({
    triggerOnce: false,
  });
  return (
    <div className="min-h-screen">
      <main className="home-main">
        <section className="home" ref={ref1}>
          <h1 className={`mt-20 ${inView1 ? "slide-in" : ""}`}>
            Brighten up Your Daily Life
          </h1>
          <p className={`mt-10 ${inView1 ? "slide-in" : ""}`}>
            プログラミングで日々の生活に潤いを
          </p>
        </section>
        <section className="home" ref={ref2}>
          <h1 className={`${inView2 ? "slide-in" : ""}`}>
            My Skills And Project
          </h1>
          <p className={`mt-10 ${inView2 ? "slide-in" : ""}`}>
            HTML/CSS/Javascript/PHP
            <br />
            React/Next.js/Laravel
          </p>
        </section>
        <section className="home" ref={ref3}>
          <h1 className={`${inView3 ? "slide-in" : ""}`}>My Potofolio</h1>
          <p className={`${inView3 ? "slide-in" : ""}`}>私の作った作品です</p>
          <Link href="/potofolio">
            <button
              className={`py-8 px-10 mt-8 bg-transparent transition duration-500 hover:bg-slate-100 hover:text-black border ${
                inView3 ? "slide-in" : ""
              }`}
            >
              More
            </button>
          </Link>
        </section>
        <section className="home">
          <h1>Engineer</h1>
          <p className="mt-10">学び続ける好奇心</p>
        </section>
        <section className="home">
          <h1>My Profile</h1>
          <Link href="/about">
            <Image
              className="mx-auto rounded-full"
              src="/images/profile.jpg"
              width={300}
              height={300}
              alt="プロフィール写真"
            />
          </Link>
          <p className="mt-10">学び続ける好奇心</p>
        </section>
        <section className="home">
          <h1>Contact</h1>
          <p>お問合せ</p>
          <button>こちらへ</button>
        </section>
        <ThreeBack />
      </main>
    </div>
  );
}
