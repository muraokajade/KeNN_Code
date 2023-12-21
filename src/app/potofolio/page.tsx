import Link from "next/link";
import React from "react";
import "../css/Potofolio.css";
import Image from "next/image";
const Potofolio = () => {
  return (
    <section className="bg-black min-h-screen mt-[80px]">
      <div className="p-8 text-sm">
        <Link href="/">Home</Link>
        <span> &gt; </span>
        <Link href="/potofolio">Potofolio</Link>
      </div>
      <div className="potofolio_wrapper">
        <div className="potofolio_background">
          <div className="potofolio_title">
            <h1 className="potofolio_text">POTOFOLIO</h1>
          </div>
          <div className="potofolio_cards">
            <div className="potofolio_card">
              <h1 className="portfolio_card_title text-3xl m-2">The_Core</h1>
              <Image
                width={300}
                height={100}
                alt="HPイメージ"
                src="/images/core.png"
              />
              <p>HPの説明文がこちらです</p>
            </div>
            <div className="potofolio_card">
              <h1 className="portfolio_card_title  text-3xl">Mina Guid</h1>
              <Image
                width={300}
                height={100}
                alt="HPイメージ"
                src="/images/noimage.png"
              />
              <p>HPの説明文がこちらです</p>
            </div>
            <div className="potofolio_card">
              <h1 className="portfolio_card_title  text-3xl">Real SNS</h1>
              <Image
                width={300}
                height={100}
                alt="HPイメージ"
                src="/images/noimage.png"
              />
              <p>HPの説明文がこちらです</p>
            </div>
            <div className="potofolio_card">
              <h1 className="portfolio_card_title  text-3xl">Gourmet Camp</h1>
              <Image
                width={300}
                height={100}
                alt="HPイメージ"
                src="/images/noimage.png"
              />
              <p>HPの説明文がこちらです</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Potofolio;
