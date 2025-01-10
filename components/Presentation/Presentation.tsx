"use client"

import { motion } from "framer-motion"

import maquina from "@/public/maquina.jpg"
import { monaSans } from "@/utils/fonts"

const Presentation = () => {
    return (
        <section className='bg-black py-10 md:py-36'>
            <motion.div
                className='md:-skew-x-3 flex flex-col md:flex-row m-auto md:ml-72 gap-10 md:gap-28'
                initial={{ opacity: 0, x: 200 }}
                transition={{ duration: 0.6, delay: 0.05 }}
                viewport={{ once: true, margin: "-10% 0px" }}
                whileInView={{ opacity: 1, x: 0 }}
            >
                <article className='md:-skew-x-3 bg-cover mx-5 md:m-0 md:w-[100%] h-[35rem] bg-center' style={{ backgroundImage: `url(${maquina.src})` }} />
                <article className="flex flex-col gap-5 mx-5 md:m-0">
                    <div className="flex flex-col gap-3">
                        <p className={`${monaSans.className} font-extrabold text-xl md:text-3xl text-white`}>
                            Innovación en Nutrición Deportiva
                        </p>
                        <p className={`${monaSans.className} font-extrabold text-5xl md:text-7xl text-pink-800`}>
                            POWER MIX STATION
                        </p>
                    </div>
                    <p className={`${monaSans.className} font-medium text-white text-lg md:text-xl md:max-w-[70%] leading-10`}>
                        Descubre la revolución en suplementación deportiva con PowerMix Station,
                        la primera máquina expendedora de batidos personalizados en Argentina.
                        Diseñada para ofrecer comodidad, calidad y tecnología de vanguardia,
                        PowerMix Station prepara tus batidos en menos de un minuto, integrando
                        opciones personalizadas y métodos de pago modernos. ¡Todo lo que necesitas,
                        al alcance de un clic!
                    </p>
                    <div>
                        <p className={`text-2xl md:text-3xl text-white ${monaSans.className}`}>¿Lo mejor de todo?
                        </p>
                        <p className="text-pink-500 text-3xl md:text-4xl font-extrabold mt-2">AL MISMO PRECIO QUE EN TU CASA</p>
                    </div>
                </article>
            </motion.div>
        </section>
    )
}

export default Presentation