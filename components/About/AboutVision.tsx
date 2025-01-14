import { motion } from "framer-motion"

import aboutimg from "@/public/aboutimage1.jpg"
import { monaSans } from "@/utils/fonts"

const AboutVision = () => {
    return (
        <section className='bg-pink-950/90 py-20'>
            <motion.div
                className='flex flex-col md:flex-row items-center justify-center -skew-x-3'
                initial={{ opacity: 0, x: 200 }}
                transition={{ duration: 0.6, delay: 0.05 }}
                viewport={{ once: true, margin: "-10% 0px" }}
                whileInView={{ opacity: 1, x: 0 }}
            >
                <article className="flex flex-col w-[90%] md:w-[40%] gap-5">
                    <p className={`${monaSans.className} font-extrabold text-5xl md:text-7xl text-white italic`}>
                        NUESTRA VISIÓN
                    </p>
                    <p className={`${monaSans.className} font-extralight text-white text-lg md:text-2xl mt-3 leading-10 tracking-widest w-[82%]`}>
                        Facilitar el acceso a bebidas saludables y funcionales, directamente en el lugar donde más las necesitas: tu gimnasio, centro de entrenamiento o espacio al aire libre.
                    </p>

                    <div className="flex flex-col md:flex-row m-1 gap-4 md:m-0 md:gap-0">
                        <div className="flex gap-4 items-center">
                            <p className={`${monaSans.className} text-pink-600 text-6xl md:text-7xl font-extrabold`}>+12</p>
                            <p className={`${monaSans.className} text-white text-lg md:text-xl font-light  md:w-[40%]`}>Opciones para pedir</p>
                        </div>

                        <div className="flex gap-4 items-center">
                            <p className={`${monaSans.className} text-pink-600 text-6xl md:text-7xl font-extrabold`}>$0</p>
                            <p className={`${monaSans.className} text-white text-lg md:text-xl font-light md:w-[50%]`}>Mismo precio que en casa</p>
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row m-1 gap-4 md:m-0 md:gap-0">
                        <div className="flex gap-4 items-center">
                            <p className={`${monaSans.className} text-pink-600 text-6xl md:text-7xl font-extrabold`}>+10</p>
                            <p className={`${monaSans.className} text-white text-lg md:text-xl font-light md:w-[40%]`}>Gimnasios disponibles</p>
                        </div>

                        <div className="flex gap-4 items-center ml-1 md:mr-24 2xl:-ml-5 ">
                            <p className={`${monaSans.className} text-pink-600 text-6xl md:text-7xl font-extrabold`}> {"<"}1</p>
                            <p className={`${monaSans.className} text-white text-lg md:text-xl font-light md:w-[50%]`}>Minuto de espera</p>
                        </div>
                    </div>
                </article>

                <article className='md:-skew-x-3 bg-cover w-[90%] h-[30rem] md:w-[30rem] md:h-[40rem] bg-center mt-10 md:mt-0' style={{ backgroundImage: `url(${aboutimg.src})` }} />
            </motion.div>
        </section>
    )
}

export default AboutVision