"use client"

import { motion } from "framer-motion"

import background from "@/public/abotbackground.jpg"
import { monaSans } from "@/utils/fonts"
const Main = () => {
    return (
        <section
            className="bg-center bg-cover h-[45rem] relative flex justify-center items-center"
            style={{ backgroundImage: `url(${background.src})` }}
        >
            <div className="absolute inset-0 bg-black opacity-60" />

            <div className="flex flex-col justify-center items-center relative gap-7">
                <motion.h1
                    animate={{ opacity: 1, x: 0 }}
                    className={`${monaSans.className} text-white font-black text-6xl md:text-9xl italic text-center`}
                    initial={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.7, delay: 0.05 }}
                >
                    QUIENES SOMOS
                </motion.h1>
                <motion.p
                    animate={{ opacity: 1, x: 0 }}
                    className={`${monaSans.className} text-white text-lg md:text-xl font-light text-center w-[90%]`}
                    initial={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.7, delay: 0.3 }}
                >
                    Conocenos un poco más, quienes somos, y porque hacemos lo que hacemos
                </motion.p>
            </div>
        </section>
    )
}

export default Main