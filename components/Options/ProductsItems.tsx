import { motion, AnimatePresence } from 'framer-motion'
import { Dumbbell, Zap, Brain, Heart, FlameIcon as Fire, Clock } from 'lucide-react'
import { Dispatch, SetStateAction } from 'react';

import { monaSans } from '@/utils/fonts';

interface Benefit {
    icon: React.ElementType;
    text: string;
}

interface Product {
    id: number;
    name: string;
    description: string;
    color: string;
    benefits: Benefit[];
    dosage: string;
    timing: string;
    flavors: string[];
}

const products: Product[] = [
    {
        id: 1,
        name: "Creatina Monohidrato",
        description: "Aumenta la fuerza y el rendimiento muscular",
        color: "from-blue-600",
        benefits: [
            { icon: Dumbbell, text: "Incrementa la fuerza muscular" },
            { icon: Zap, text: "Mejora el rendimiento en ejercicios de alta intensidad" },
            { icon: Brain, text: "Potencia la función cognitiva" }
        ],
        dosage: "5 gramos por día",
        timing: "Antes o después del entrenamiento",
        flavors: ["Sin sabor"]
    },
    {
        id: 2,
        name: "Proteína de Suero",
        description: "Ideal para la recuperación y el crecimiento muscular",
        color: "from-blue-600",
        benefits: [
            { icon: Dumbbell, text: "Promueve el crecimiento muscular" },
            { icon: Heart, text: "Ayuda en la recuperación post-entrenamiento" },
            { icon: Fire, text: "Puede aumentar el metabolismo" }
        ],
        dosage: "25-30 gramos por porción",
        timing: "Después del entrenamiento o entre comidas",
        flavors: ["Vainilla", "Chocolate", "Fresa"]
    },
    {
        id: 3,
        name: "BCAA",
        description: "Aminoácidos esenciales para la recuperación muscular",
        color: "from-blue-600",
        benefits: [
            { icon: Dumbbell, text: "Reduce el dolor muscular" },
            { icon: Zap, text: "Disminuye la fatiga durante el ejercicio" },
            { icon: Fire, text: "Puede ayudar en la pérdida de grasa" }
        ],
        dosage: "5-10 gramos por día",
        timing: "Antes, durante o después del entrenamiento",
        flavors: ["Limón", "Sandía", "Frutos del bosque"]
    }
]

interface Props {
    selectedProduct: number | null
    setSelectedProduct: Dispatch<SetStateAction<number | null>>
}

const ProductItems = ({ selectedProduct, setSelectedProduct }: Props) => {

    return (
        <>
            {products.map((product, index) => (
                <motion.div
                    key={product.id}
                    className="relative overflow-hidden rounded-lg shadow-lg cursor-pointer"
                    initial={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.5, delay: index * 0.09 }}
                    viewport={{ once: true, margin: '-12% 0px' }}
                    whileHover={{ scale: 1.03 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    onClick={() => setSelectedProduct(selectedProduct === product.id ? null : product.id)}
                >
                    <div className={`relative h-full bg-gradient-to-br ${product.color} to-black`}>
                        <div className="absolute inset-0 bg-black opacity-50" />
                        <div className="relative z-10 p-6">
                            <h3 className={`${monaSans.className} text-2xl text-white font-extrabold italic`}>{product.name}</h3>
                            <p className={`${monaSans.className} text-gray-400 font-semibold italic mb-5`}>{product.description}</p>
                            <div className="mb-4">
                                {product.benefits.map((benefit, index) => (
                                    <div key={index} className="flex items-center mb-4">
                                        <benefit.icon className="text-[#be185d] w-5 h-5 mr-4" />
                                        <span className={`${monaSans.className} text-gray-200 text-sm w-[90%]`}>{benefit.text}</span>
                                    </div>
                                ))}
                            </div>
                            <AnimatePresence>
                                {selectedProduct === product.id && (
                                    <motion.div
                                        animate={{ opacity: 1, height: 'auto' }}
                                        exit={{ opacity: 0, height: 0 }}
                                        initial={{ opacity: 0, height: 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <div className="border-t border-gray-700 pt-4 mt-4">
                                            <div className="flex items-center mb-2">
                                                <Clock className="text-[#be185d] w-5 h-5 mr-2" />
                                                <span className={` ${monaSans.className} text-gray-200 text-sm`}>Dosificación: {product.dosage}</span>
                                            </div>
                                            <div className="flex items-center mb-2">
                                                <Clock className="text-[#be185d] w-5 h-5 mr-2" />
                                                <span className={` ${monaSans.className} text-gray-200 text-sm w-[90%]`}>Timing: {product.timing}</span>
                                            </div>
                                            <div className="mt-4">
                                                <span className={`${monaSans.className} text-white font-semibold mb-2 block`}>Sabores disponibles:</span>
                                                <div className="flex flex-wrap gap-2">
                                                    {product.flavors.map((flavor, index) => (
                                                        <span key={index} className={`${monaSans.className} text-xs bg-[#be185d] bg-opacity-80 text-white px-2 py-1 rounded-full`}>
                                                            {flavor}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </div>
                    <div
                        className="absolute inset-0 bg-gradient-to-br from-transparent to-[#be185d] opacity-30"
                        style={{
                            clipPath: 'polygon(100% 0, 0% 100%, 100% 100%)',
                        }}
                    />
                </motion.div>
            ))}
        </>
    )
}

export default ProductItems

