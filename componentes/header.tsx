import Link from "next/link";
import Image from "next/image";
import kyotoLogo from "../src/logo.webp";

const Header = () => {
  return (
    <header className="bg-green-700 h-20 w-screen flex lg:flex-row flex-col">
      <div className="h-full float-left">
        <Link href="/">
          <Image
            className="px-8 py-5"
            src={kyotoLogo}
            alt="kyoto Logo"
            height={60}
          />
        </Link>
      </div>

      <div className="h-full">
        <nav className="h-10 m-5">
          <ul className="flex flex-row gap-1  text-center">
            <li className="dropdown dropdown-hover w-24 h-10 border-0  rounded-full hover:shadow hover:bg-green-600">
              <div className=" w-full h-full ">
                <label tabIndex={0} className="text-2xl text-white">
                  Trade
                </label>
              </div>
              <ul className="dropdown-content menu p-2 shadow bg-primary border-0 rounded-box w-24 text-white text-xl ">
                <li className="hover:bg-green-600">
                  <Link href="/swap">Swap</Link>
                </li>
                <li className="hover:bg-green-600">Liquidity</li>
                <li className="hover:bg-green-600">OTC</li>
              </ul>
            </li>
            <li className="dropdown dropdown-hover w-24 h-10 border-0  rounded-full hover:shadow hover:bg-green-600">
              <div className=" w-full h-full ">
                <label tabIndex={0} className="text-2xl text-white ">
                  Earn
                </label>
              </div>
              <ul className="dropdown-content menu p-2 shadow bg-primary rounded-box w-24 text-white text-xl">
                <li className="hover:bg-green-600">Farms</li>
                <li className="hover:bg-green-600">Pools</li>
                <li className="hover:bg-green-600">DV</li>
              </ul>
            </li>
            <li className="dropdown dropdown-hover w-24 h-10 border-0  rounded-full hover:shadow hover:bg-green-600">
              <div className=" w-full h-full ">
                <label tabIndex={0} className="text-2xl text-white ">
                  Win
                </label>
              </div>
              <ul className="dropdown-content menu p-2 shadow bg-primary rounded-box w-24 text-white text-xl ">
                <li className="hover:bg-green-600">Rafflez</li>
              </ul>
            </li>
            <li className="w-24 h-10 border-0  rounded-full hover:shadow hover:bg-green-600">
              <div className=" w-full h-full ">
                <label tabIndex={0} className="text-2xl text-white">
                  Impact
                </label>
              </div>
            </li>
            <li className="w-24 h-10 border-0  rounded-full hover:shadow hover:bg-green-600">
              <div className=" w-full h-full ">
                <label tabIndex={0} className="text-2xl text-white ">
                  Bridge
                </label>
              </div>
            </li>
            <li className="dropdown dropdown-hover w-24 h-10 border-0  rounded-full hover:shadow hover:bg-green-600">
              <div className=" w-full h-full ">
                <label tabIndex={0} className="text-2xl text-white ">
                  Info
                </label>
              </div>
              <ul className="dropdown-content menu p-2 shadow bg-primary rounded-box w-24 text-white text-xl">
                <li className="hover:bg-green-600">Docs</li>
              </ul>
            </li>
            <li className="w-24 h-10 border-0  rounded-full hover:shadow hover:bg-green-600">
              <div className=" w-full h-full ">
                <label tabIndex={0} className="text-2xl text-white ">
                  Launch
                </label>
              </div>
            </li>
          </ul>
        </nav>
      </div>

      <div className="h-full flex flex-row ml-auto">
        <div className="h-20 pt-4 float-right">
          <button className="border-2 text-white border-yellow-600 rounded-full h-12 w-28 float-right">
            <b>Vault</b>
          </button>
        </div>
        <div className="h-20 pt-4 float-right ml-3">
          <button className="border-2 text-white border-yellow-600 rounded-full h-12 w-28 float-right">
            <b>Price</b>
          </button>
        </div>
        <div className="h-20 pt-4 float-right mx-3">
          <button className="border-2 border-yellow-600 bg-yellow-600 rounded-full h-12 w-44 float-right">
            Connect Wallet
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
