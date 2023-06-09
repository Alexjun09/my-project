import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import kyotoLogo from "../src/logo.webp";
import discordFav from "../src/discord.png";
import twitterFav from "../src/twitter.png";
import instagramFav from "../src/instagram.png";
import youtubeFav from "../src/youtube.png";
import linkedinFav from "../src/linkedin.png";
import telegramFav from "../src/telegram-plane.png";
import backgroundImage from "../src/background.svg";
import logoGreen from "../src/logo-green.webp";
import planeta from "../src/planeta.png";
import monedas from "../src/monedas.webp";
import logoProtocol from "../src/logo-protocol.webp";
import Footer from "@/componentes/footer";

function alerta() {
  window.alert("Hola!");
}

export default function Home() {
  return (
    <>
      <Head>
        <title>Kyoto Swap</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="h-screen w-screen bg-green-700 relative">
        <Image
          className="absolute bottom-0"
          alt="bg image"
          src={backgroundImage}
        />
        <hr className=" border-green-300" />
        <div className="h-full w-10 float-left">
          {" "}
          {/* social media bar*/}
          <div className="mt-80">
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
        <div className="p-28">
          <p className="text-7xl py-2 text-white">
            <b>DECENTRALISED</b>,
          </p>
          <p className="text-7xl py-2 text-white">
            <b>SUSTAINABLE,</b>
          </p>
          <p className="text-7xl py-2 text-yellow-600">
            <b>SOCIALLY</b>
          </p>
          <p className="text-7xl py-2 text-yellow-600">
            <b>RESPONSIBLE</b>
          </p>
          <p className="text-white text-3xl pt-6">TRADE, EARN, WIN AND HELP</p>
          <p className="text-white text-3xl pb-2">MAKE A POSITIVE IMPACT.</p>
          <div className="flex flex-row gap-2">
            <div className="w-56 float-left h-16">
              <button className="bg-yellow-600 w-56 h-full rounded-full text-3xl text-green-700 mt-6">
                <b>Buy Kswap</b>
              </button>
            </div>
            <div className="w-56 float-left h-16">
              <button className="bg-green-300 w-56 h-full rounded-full text-3xl text-green-700 mt-6">
                <b>Trade Now</b>
              </button>
            </div>
          </div>
        </div>
      </main>

      {/** partners */}
      <div className="h-28 bg-green-300 ">
        {/** As seen on label*/}
        <label className="flex justify-center">
          <b className="text-3xl text-yellow-600 bg-green-700 rounded-full p-2 px-6 -mt-7 z-20">
            <i>AS SEEN ON</i>
          </b>
        </label>
      </div>
      {/** become carbon neutral passively */}
      <div className="h-[2400px] bg-white">
        {/** img + become carbon neutral pasively */}
        <div className="pt-44 text-center">
          <div className="">
            <Image
              className="ml-[42%]"
              src={logoGreen}
              alt={"kyoto logotype"}
              height={80}
            />
          </div>
          <p className="mt-10 text-green-700 text-7xl">
            <b>BECOME CARBON</b>
          </p>
          <p className="text-green-700 text-7xl pt-4">
            <b>NEUTRAL</b>
          </p>
          <p className="p-12 text-green-300 text-7xl">
            <b>
              <i>PASIVELY</i>
            </b>
          </p>
          <p className="text-green-700 text-2xl ">
            Kyoto Swap is the first decentralized exchange (DEX) that allows
          </p>
          <p className="text-green-700 text-2xl ">
            anybody to become carbon neutral at little to no cost
          </p>
          <div className="flex justify-center">
            <button className="bg-green-700 w-96 h-12 text-2xl text-yellow-600 rounded-full mt-9">
              <b>MAKE AN IMPACT</b>
            </button>
          </div>
        </div>
        {/** stats */}
        <div className="flex justify-center">
          <div className="flex flex-row gap-32 mt-56">
            <div className="h-96 w-96 bg-yellow-300 rounded-2xl text-green-700 p-8 pt-14">
              <p className="text-green-700 text-5xl">$3,278,429</p>
              <p className="text-green-700 text-5xl mt-10">VOLUME</p>
              <p className="text-green-700 text-5xl">TRADED</p>
              <p className="mt-12">Total Trading volume</p>
            </div>
            <div className="h-96 w-96 bg-yellow-300 rounded-2xl text-green-700 p-8 pt-14">
              <p className="text-green-700 text-5xl">20,326</p>
              <p className="text-green-700 text-5xl mt-10">TREES</p>
              <p className="text-green-700 text-5xl">PLANTED</p>
              <div className="mt-12">
                <Link href="" className="">
                  Verify here
                </Link>
              </div>
            </div>
            <div className="h-96 w-96 bg-yellow-300 rounded-2xl text-green-700 p-8 pt-14">
              <p className="text-green-700 text-5xl">4,383</p>
              <p className="text-green-700 text-5xl mt-10">TONNES</p>
              <p className="text-green-700 text-5xl">SEQUESTERED</p>
              <p className="mt-12">Carbon sequestered by 2050</p>
            </div>
          </div>
        </div>
        {/** planeta*/}
        <div className="text-center text-green-700">
          <div className=" flex justify-center mt-36">
            <Image src={planeta} alt={"planeta png"} height={300} />
          </div>
          {/** OUR PLEDGE*/}
          <p className="text-6xl my-10">
            <b>OUR PLEDGE</b>
          </p>
          <p className="text-2xl">
            Kyoto Swap`s unique moular economy allows anyone to become carbon
          </p>
          <p className="text-2xl">
            neutral at little to no cost. 20% of all platform revenues are
            allocated
          </p>
          <p className="text-2xl">
            towards afforestation, further helping in the battle against climate
            change.
          </p>
          <div className="flex flex-row gap-96 text-2xl mt-24 ml-[28%]  text-left">
            <div className="flex flex-row bg-yellow-300 rounded-full w-56 h-20">
              <div className="h-[40px] w-[40px] m-4 ml-6">
                <Image src={discordFav} alt={"discord fav"} height={40} />
              </div>
              <div className="mt-2">
                <p>+5,000</p>
                <p>MEMBERS</p>
              </div>
            </div>
            <div className="flex flex-row bg-yellow-300 rounded-full w-56 h-20">
              <div className="h-[40px] w-[40px] m-4 ml-6">
                <Image src={twitterFav} alt={"discord fav"} height={40} />
              </div>
              <div className="mt-2">
                <p>+6,000</p>
                <p>FOLLOWERS</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/** partners */}
      <div className="h-28 bg-green-300">
        {/** As seen on label*/}
        <label className="flex justify-center ">
          <b className="text-3xl text-yellow-600 bg-green-700 rounded-full p-2 px-6 -mt-7">
            <i>AS SEEN ON</i>
          </b>
        </label>
      </div>
      {/** token */}
      <div className="h-screen bg-green-700">
        <div className="flex flex-row ">
          <div className="ml-24 mt-28">
            <p className="text-yellow-300 text-6xl">
              <b>THE KYOTOSWAP TOKEN</b>
            </p>
            <div className="flex flex-row text-4xl my-14">
              <p className="text-yellow-300">SEEDING&nbsp;</p>
              <p className="text-green-300">THE FUTURE OF WEB3</p>
            </div>
            <p className="text-white text-3xl mb-2">
              The Kyoto swap token is your key to web3 carbon neutrality.
              Provide liquidity, earn
            </p>
            <p className="text-white text-3xl mb-2">
              a share of platform profits, and even swap to plant trees. The
              most conscious
            </p>
            <p className="text-white text-3xl mb-20">
              KSWAP investors are recorded on the impact leaderboard.
            </p>
            <div className="flex flex-row gap-10 text-3xl text-green-700">
              <button className="bg-yellow-300 rounded-full p-1 px-4">
                BUY KSWAP
              </button>
              <button className="bg-yellow-300 rounded-full p-1 px-4">
                VIEW LEADERBOARD
              </button>
            </div>
          </div>
          <div className="mt-10">
            <Image src={monedas} alt={"monedas"} height={700} />
          </div>
        </div>
        <div className="flex flex-row text-4xl text-yellow-300 ml-20 gap-28 -mt-12">
          <div className="border-l-4 w-[400px] pl-8">
            <p>CIRCULATING SUPPLY</p>
            <p className="text-white">137,341</p>
          </div>
          <div className=" border-l-4 w-[400px] pl-8">
            <p>TOTAL SUPPLY</p>
            <p className="text-white">85,231,604</p>
          </div>
          <div className="boder border-l-4 w-[400px] pl-8">
            <p>MAX SUPPLY</p>
            <p className="text-white">Dynamic</p>
          </div>
        </div>
        <div className="flex flex-row text-4xl text-yellow-300 ml-20 mt-5 gap-28">
          <div className=" border-l-4 w-[400px] pl-8">
            <p>BURNED</p>
            <p className="text-white">85,094,263</p>
          </div>
          <div className=" border-l-4 w-[400px] pl-8">
            <p>MARKET CAP</p>
            <p className="text-white">289,950</p>
          </div>
          <div className=" border-l-4 w-[400px] pl-8">
            <p>CURRENT EMISSIONS</p>
            <p className="text-white">Dynamic</p>
          </div>
        </div>
      </div>
    </>
  );
}
