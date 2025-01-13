import { motion } from "framer-motion"

import maquina from "@/public/maquina2.jpg"
import { monaSans } from "@/utils/fonts"

const AboutIntro = () => {
    return (
        <section className='bg-black py-10 md:py-36'>
            <motion.div
                className='md:-skew-x-12 flex flex-col md:flex-row m-auto md:ml-80'
                initial={{ opacity: 0, x: 200 }}
                transition={{ duration: 0.6, delay: 0.05 }}
                viewport={{ once: true, margin: "-10% 0px" }}
                whileInView={{ opacity: 1, x: 0 }}
            >
                <article className='md:-skew-x-12 bg-cover mx-5 md:m-0 md:w-[70%] h-[40rem] bg-center z-10' style={{ backgroundImage: `url(${maquina.src})` }} />

                <article className="flex flex-col gap-3 mx-5 md:m-0 z-20 mt-24 md:mt-0">
                    <div className='font-outline text-transparent hidden md:block text-5xl md:text-9xl ml-16 mt-28'>QUIENES SOMOS</div>
                    <div className="flex flex-col -mt-16">
                        <p className={`${monaSans.className} text-xl md:text-3xl text-white italic ml-1 md:ml-3`}>
                            Sobre Nosotros
                        </p>
                        <p className={`${monaSans.className} font-extrabold text-5xl md:text-8xl text-white italic`}>
                            POWER
                            <span className={`${monaSans.className} font-extrabold text-5xl md:text-8xl text-pink-800`}> MIX </span>
                            STATION
                        </p>
                    </div>
                    <p className={`${monaSans.className}  text-white text-lg md:text-2xl md:max-w-[70%] leading-10 tracking-widest mt-3`}>
                        En Power Mix Station, creemos que el rendimiento y la salud no deben comprometerse, ni siquiera cuando estás en movimiento. Por eso, hemos revolucionado la forma en que los atletas y entusiastas del fitness se hidratan y recargan energía.
                    </p>
                </article>
            </motion.div>
        </section>
    )
}

export default AboutIntro