import Link from "next/link";
import React from "react";
import Image from "next/image";
import discordFav from "../src/discord.png";
import twitterFav from "../src/twitter.png";
import instagramFav from "../src/instagram.png";
import youtubeFav from "../src/youtube.png";
import linkedinFav from "../src/linkedin.png";
import telegramFav from "../src/telegram-plane.png";
import logoProtocol from "../src/logo-protocol.webp";
import logoGreen from "../src/logo-green.webp";

const Footer = () => {
  return (
    <footer className="h-screen bg-white">
      <div className="text-center text-green-700">
        <div className="flex justify-center pt-36">
          <Image src={logoGreen} alt={"logo"} height={80} />
        </div>
        <p className="text-6xl py-4">
          <b>HELP FIGHT</b>
        </p>
        <p className="text-6xl py-4">
          <b>CLIMATE CHANGE</b>
        </p>
        <p className="text-4xl text-green-300">
          <i>
            <b>PASSIVELY</b>
          </i>
        </p>
      </div>
      <div className="mt-60">
        <hr className="w-[80%] ml-[10%] border border-green-700 mb-8" />
        <div className="flex flex-row gap-60 mx-20">
          <div className="">
            <div className="pb-8">
              <Image src={logoGreen} alt={"logo"} height={50} />
            </div>
            <div className="bg-green-700 rounded-full p-2 px-4">
              <Link href="/swap" className="text-yellow-300 text-3xl">
                <b>BUY KSWAP</b>
              </Link>
            </div>
          </div>
          <div className="text-m text-green-700">
            <p className="mb-1">
              <b>ABOUT</b>
            </p>
            <p>CONTACT</p>
            <p>BRAND</p>
            <p>BLOG</p>
            <p>COMMUNITY</p>
          </div>
          <div className="text-m text-green-700">
            <p className="mb-1">
              <b>HELP</b>
            </p>
            <p>CUSTOMER SUPPORT</p>
            <p>TROUBLESHOOTING</p>
            <p>GUIDES</p>
          </div>
          <div className="text-m text-green-700">
            <p className="mb-1">
              <b>DEVELOPERS</b>
            </p>
            <p>DOCUMENTATION</p>
            <p>BUG BOUNTY</p>
            <p>AUDITS</p>
            <p>CAREERS</p>
          </div>
          <div>
            <div>
              <div className="flex flex-row">
                <div className="">
                  <Image
                    className="px-1 mt-2"
                    src={twitterFav}
                    alt="Twitter"
                    height={30}
                  />
                </div>
                <div>
                  <Image
                    className="px-1 mt-2"
                    src={instagramFav}
                    alt="Intagram"
                    height={30}
                  />
                </div>
                <div>
                  <Image
                    className="px-1 mt-2"
                    src={telegramFav}
                    alt="Telegram"
                    height={30}
                  />
                </div>
                <div>
                  <Image
                    className="px-1 mt-2"
                    src={youtubeFav}
                    alt="YouTube"
                    height={30}
                  />
                </div>
                <div>
                  <Image
                    className="px-1 mt-2"
                    src={discordFav}
                    alt="Discord"
                    height={30}
                  />
                </div>
                <div>
                  <Image
                    className="px-1 mt-2"
                    src={linkedinFav}
                    alt="LinkedIn"
                    height={30}
                  />
                </div>
              </div>
            </div>
            <div>
              <div className="pt-14">
                <Image src={logoProtocol} alt={"logoProtocol"} height={40} />
              </div>
            </div>
          </div>
        </div>
        <hr className="w-[80%] ml-[10%] border border-green-700 mt-8" />
      </div>
    </footer>
  );
};

export default Footer;
