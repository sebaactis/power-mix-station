"use client"

import { useState } from 'react'
import { motion } from "framer-motion"

import OptionsItems from './OptionsItems';
import ProductItems from './ProductsItems';

const OptionsContainer = () => {
    const [selectedProduct, setSelectedProduct] = useState<number | null>(null)
    const [selectedShake, setSelectedShake] = useState<number | null>(null)

    return (
        <section className={`py-16 bg-black`}>
            <div className="container mx-auto px-4 w-4/5">

                <motion.p
                    className='font-outline-white text-transparent text-5xl md:text-8xl mb-10 italic'
                    initial={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                    viewport={{ once: true, margin: '-10% 0px' }}
                    whileInView={{ opacity: 1, x: 0 }}
                >
                    PRODUCTOS
                </motion.p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <ProductItems selectedProduct={selectedProduct} setSelectedProduct={setSelectedProduct} />
                </div>

                <motion.p
                    className='font-outline-white text-transparent text-5xl md:text-8xl mt-20 mb-10 italic'
                    initial={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true, margin: '-10% 0px' }}
                    whileInView={{ opacity: 1, x: 0 }}
                >
                    COMBOS
                </motion.p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                    <OptionsItems selectedShake={selectedShake} setSelectedShake={setSelectedShake} />
                </div>
            </div>
        </section>
    )
}

export default OptionsContainer

