import Image from "next/image";
import logo from "../assets/logo.svg";
import homeBanner from "../assets/home-banner.svg";
import searchIcon from "../assets/search-icon.svg";
import StateSelect from "@/compontents/StateSelect";
import CitySelect from "@/compontents/CitySelect";

export default function Home() {
  return (
    <main className="bg-rose-500 w-screen h-screen flex flex-col">
      <div className="max-w-[1180px] mx-auto my-auto">
        <header className="flex justify-start items-center mb-32">
          <Image src={logo} width={215} height={56} alt="" />
        </header>
        <section className="flex justify-between gap-[120px] flex-wrap items-stretch mb-28">
          <h1 className="text-7xl text-white font-extrabold">
            Leve
            <br />a felicidade
            <br />
            para o seu lar
          </h1>
          <div>
            <Image src={homeBanner} width={592} height={305} alt="" />
          </div>
        </section>
        <footer className="flex justify-between flex-wrap items-center">
          <span className="text-2xl font-semibold text-white">
            Encontre o animal de estimação ideal
            <br />
            para seu estilo de vida!
          </span>
          <form className="flex items-center grow[2] gap-3">
            <StateSelect />
            <CitySelect />
            <button
              type="button"
              className="flex justify-center items-center p-6 rounded-3xl bg-yellow-200 hover:bg-yellow-300 transition-colors ease-in"
            >
              <Image src={searchIcon} width={26} height={26} alt="" />
            </button>
          </form>
        </footer>
      </div>
    </main>
  );
}
