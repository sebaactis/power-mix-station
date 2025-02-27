import { motion, AnimatePresence } from 'framer-motion'
import { Dumbbell, Zap, FlameIcon as Fire, Clock, BicepsFlexed, Wind, CheckCircle2, Vegan, ChevronsRightIcon } from 'lucide-react'
import { Dispatch, SetStateAction } from 'react';

import { monaSans } from '@/utils/fonts';

interface Benefit {
    icon: React.ElementType;
    text: string;
}

interface Dosage {
    icon: React.ElementType;
    text: string;
}

interface Product {
    id: number;
    name: string;
    description: string;
    color: string;
    benefits: Benefit[];
    dosage: Dosage[];
    timing: string;
    flavors: string[];
}

const products: Product[] = [
    {
        id: 1,
        name: "Proteína de Suero",
        description: "Recuperación y crecimiento muscular al máximo",
        color: "from-blue-600",
        benefits: [
            { icon: BicepsFlexed, text: "Recuperación rápida post-entreno" },
            { icon: BicepsFlexed, text: "Aumento muscular efectivo" },
            { icon: Fire, text: "Metabolismo acelerado" },
            { icon: Wind, text: "Menos fatiga y mejor rendimiento" }
        ],
        dosage: [
            { icon: ChevronsRightIcon, text: "28 Grms de Proteina" },
            { icon: ChevronsRightIcon, text: "5.9 Grms BCAAS" },
            { icon: ChevronsRightIcon, text: "4.6 Grms de Glutamina" },
        ],
        timing: "Justo después del entrenamiento para recuperación óptima",
        flavors: ["Chocolate", "Vainilla"]
    },
    {
        id: 2,
        name: "Proteína Aislada",
        description: "Rápida absorción para resultados óptimos",
        color: "from-blue-600",
        benefits: [
            { icon: CheckCircle2, text: "Mayor pureza y sin lactosa" },
            { icon: CheckCircle2, text: "Absorción ultra rápida" },
            { icon: CheckCircle2, text: "Músculos definidos sin grasas extras" }
        ],
        dosage: [
            { icon: ChevronsRightIcon, text: "28 Grms de Proteina" },
            { icon: ChevronsRightIcon, text: "5.9 Grms BCAAS" },
            { icon: ChevronsRightIcon, text: "4.6 Grms de Glutamina" },
        ],
        timing: "Inmediatamente después del entrenamiento.",
        flavors: ["Vainilla"]
    },
    {
        id: 3,
        name: "Proteina Vegetal",
        description: "Nutrición completa y de origen natural",
        color: "from-blue-600",
        benefits: [
            { icon: Vegan, text: "100% vegetal, sin lactosa" },
            { icon: Vegan, text: "Alta digestibilidad" },
            { icon: Vegan, text: "Energía y recuperación sin pesadez" }
        ],
        dosage: [
            { icon: ChevronsRightIcon, text: "30 Grms de Proteina" },
            { icon: ChevronsRightIcon, text: "Vitamina B12" },
            { icon: ChevronsRightIcon, text: "4.6 Grms de Aminoacidos" },
        ],
        timing: "Después de entrenar.",
        flavors: ["Coco"]
    },
    {
        id: 4,
        name: "Ganador de Peso",
        description: "Más músculo, más volumen, más energía",
        color: "from-blue-600",
        benefits: [
            { icon: Dumbbell, text: "Alta carga calórica para ganar masa" },
            { icon: Dumbbell, text: "Mejor recuperación y rendimiento" },
            { icon: Dumbbell, text: "Energía sostenida" }
        ],
        dosage: [
            { icon: ChevronsRightIcon, text: "28 Grms de Proteina" },
            { icon: ChevronsRightIcon, text: "67 Grms de Carbohidratos" },
            { icon: ChevronsRightIcon, text: "5.9 Grms BCAAS" },
            { icon: ChevronsRightIcon, text: "4.6 Grms de Glutamina" },
            { icon: ChevronsRightIcon, text: "4.9 Grms de Creatina" }
        ],
        timing: "Después del entrenamiento",
        flavors: ["Chocolate"]
    },
    {
        id: 5,
        name: "Pre-Workout",
        description: "Explosión de energía y concentración total para tu entrenamiento.",
        color: "from-blue-600",
        benefits: [
            { icon: Zap, text: "Mayor energía y resistencia" },
            { icon: Zap, text: "Más enfoque y concentración" },
            { icon: Zap, text: "Retrasa la fatiga" }
        ],
        dosage: [
            { icon: ChevronsRightIcon, text: "1750 Mg de Taurina" },
            { icon: ChevronsRightIcon, text: "176 Mg de Cafeina." },
            { icon: ChevronsRightIcon, text: "Vitaminas B3  - B6 - B12" }
        ],
        timing: "Antes del entrenamiento",
        flavors: ["Mango"]
    },
    {
        id: 6,
        name: "Creatina",
        description: "Aminoácidos esenciales para la recuperación muscular",
        color: "from-blue-600",
        benefits: [
            { icon: Dumbbell, text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus ex incidunt sed voluptas deleniti tenetur expedita nesciunt aspernatur voluptatem voluptatibus, error cupiditate maxime, sapiente nostrum dolorum vitae suscipit laborum amet." }
        ],
        dosage: [
            { icon: ChevronsRightIcon, text: "1750 Mg de Taurina" },
            { icon: ChevronsRightIcon, text: "176 Mg de Cafeina." },
            { icon: ChevronsRightIcon, text: "Vitaminas B3  - B6 - B12" }
        ],
        timing: "Antes, durante o después del entrenamiento",
        flavors: ["Sin sabor"]
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
                                        <benefit.icon className="text-[#be185d] w-6 h-6 mr-4" />
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
                                                <Clock className="text-[#be185d] w-6 h-6 mr-2" />
                                                <span className={` ${monaSans.className} text-gray-200 text-sm w-[90%]`}>Timing: {product.timing}</span>
                                            </div>
                                            <div className="border-t border-gray-700 pt-4 mt-4" />

                                            <p className={`${monaSans.className} text-white font-semibold mb-2 block`}>Cada batido aporta:</p>
                                            <div className="flex flex-col m-2 mt-3">
                                                {product.dosage.map((dosage, index) => (
                                                    <div key={index} className="flex items-center mb-2">
                                                        <dosage.icon className="text-[#be185d] w-7 h-7 mr-1" />
                                                        <span className={`${monaSans.className} text-gray-200 text-sm w-[90%]`}>{dosage.text}</span>
                                                    </div>
                                                ))}
                                            </div>
                                            <div className="mt-5">
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

