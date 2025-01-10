"use client"

import { motion } from 'framer-motion';
import Link from 'next/link';

import { monaSans } from '@/utils/fonts';
import mainImg from '@/public/mainImg.png'



const Welcome = () => {
    return (

        <section className='bg-cover md:bg-center md:h-[1000px] h-[650px] text-center md:text-start' style={{ backgroundImage: `url(${mainImg.src})` }}>

            <article className="pt-36 md:pt-96 md:ml-36 text-white text-3xl md:text-6xl 2xl:text-8xl font-extrabold">
                <motion.p
                    animate={{ opacity: 1, x: 0 }}
                    className={`${monaSans.className}`}
                    initial={{ opacity: 0, x: -200 }}
                    transition={{ duration: 0.6, delay: 0.05 }}
                >
                    INNOVACION FITNESS
                </motion.p>

                <motion.p
                    animate={{ opacity: 1, x: 0 }}
                    className={`${monaSans.className} text-pink-700`}
                    initial={{ opacity: 0, x: -200 }}
                    transition={{ duration: 0.6, delay: 0.25 }}
                >
                    AL ALCANCE
                </motion.p>
                <motion.p
                    animate={{ opacity: 1, x: 0 }}
                    className='text-2xl font-medium mt-1.5'
                    initial={{ opacity: 0, x: -200 }}
                    transition={{ duration: 0.6, delay: 0.45 }}
                >
                    Máxima comodidad y calidad en un solo lugar.
                </motion.p>

                <motion.div
                    animate={{ opacity: 1, y: 0 }}
                    initial={{ opacity: 0, y: -200 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                >
                    <button className="bg-pink-700 py-4 text-3xl mt-10 -skew-x-12 text-white px-8 transition-all hover:px-10 hover:bg-pink-600">
                        <Link href="/options">VER OPCIONES</Link>
                    </button>
                </motion.div>

            </article>

        </section>
    )
};

export default Welcome;
