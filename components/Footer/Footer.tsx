import Image from "next/image"
import Link from "next/link"

import goldNutritionLogo from "@/public/goldNutrition.png"

const Footer = () => {
  return (
    <footer className="bg-slate-200">
      <div className="grid grid-cols-1 md:grid-cols-2 justify-items-start place-items-center pt-10 pl-[4.5rem] md:pl-36">
        <section className="flex flex-col items-center gap-3">
          <p className="text-2xl md:text-3xl font-extrabold text-gray-600 pr-3 py-3">
            POWER<span className="text-pink-700">MIX</span> STATION
          </p>
          <Image alt="logoNutrition" className="pb-10" src={goldNutritionLogo} width={140} />
        </section>
        <section className="mb-4 text-center md:text-start pl-10 md:pl-0">
          <p className="text-2xl md:text-3xl font-extrabold text-gray-600 mb-2">Links Rapidos</p>
          <ul className="flex flex-col gap-1 pt-5">
            <Link href="/">
              <li className="text-gray-500 text-lg md:text-xl hover:text-gray-700 transition-all duration-200">Inicio</li>
            </Link>
            <Link href="/options">
              <li className="text-gray-500 text-lg md:text-xl hover:text-gray-700 transition-all duration-200">Opciones</li>
            </Link>
            <Link href="/who">
              <li className="text-gray-500 text-lg md:text-xl hover:text-gray-700 transition-all duration-200">Quiénes Somos</li>
            </Link>
            <Link href="/where">
              <li className="text-gray-500 text-lg md:text-xl hover:text-gray-700 transition-all duration-200">Donde Estamos</li>
            </Link>
            <Link href="/contact">
              <li className="text-gray-500 text-lg md:text-xl hover:text-gray-700 transition-all duration-200">Contacto</li>
            </Link>
          </ul>
        </section>
      </div>
      <div>
        <div className="border-t-1 mx-8 border-gray-400">
          <p className="p-7 pl-[3.2rem] md:pl-[6.4rem] text-gray-500 text-lg md:text-xl">© {new Date().getFullYear()} PowerMix Station. Todos los derechos reservados</p>
        </div>
      </div>

    </footer>
  )
}

export default Footer