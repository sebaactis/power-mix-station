    import { motion, AnimatePresence } from 'framer-motion';
import { Dispatch, SetStateAction } from 'react';
import { Beaker, Coffee, Banana, Milk, Droplet, Apple, Dumbbell, Zap, Brain } from 'lucide-react'

import { monaSans } from '@/utils/fonts';


interface Nutrient {
    name: string;
    value: number;
    max: number;
}

interface Shake {
    name: string;
    description: string;
    ingredients: string[];
    icons: React.ElementType[];
    color: string;
    benefits: string[];
    nutrients: Nutrient[];
}

const shakeCombinations: Shake[] = [
    {
        name: "Proteína Clásica",
        description: "Batido de vainilla con proteína whey para una recuperación muscular óptima y crecimiento lean",
        ingredients: ["Proteína de suero", "Leche", "Vainilla", "Hielo"],
        icons: [Beaker, Milk, Droplet, Dumbbell],
        color: "from-purple-700",
        benefits: ["Recuperación muscular", "Aumento de masa magra", "Saciedad"],
        nutrients: [
            { name: "Proteína", value: 25, max: 30 },
            { name: "Carbohidratos", value: 10, max: 30 },
            { name: "Grasas", value: 2, max: 10 },
        ]
    },
    {
        name: "Explosión de Frutas",
        description: "Mezcla energética de frutas con proteína para un impulso natural y antioxidantes esenciales",
        ingredients: ["Proteína de suero", "Plátano", "Fresas", "Naranja", "Yogur griego"],
        icons: [Beaker, Banana, Apple, Zap],
        color: "from-purple-600",
        benefits: ["Energía duradera", "Antioxidantes", "Vitaminas"],
        nutrients: [
            { name: "Proteína", value: 20, max: 30 },
            { name: "Carbohidratos", value: 25, max: 30 },
            { name: "Grasas", value: 3, max: 10 },
        ]
    },
    {
        name: "Chocolate Potente",
        description: "Batido de chocolate rico en proteínas para satisfacer tus antojos de forma saludable y nutritiva",
        ingredients: ["Proteína de chocolate", "Leche", "Cacao", "Avena"],
        icons: [Beaker, Milk, Coffee, Brain],
        color: "from-purple-600",
        benefits: ["Control de antojos", "Energía sostenida", "Salud cerebral"],
        nutrients: [
            { name: "Proteína", value: 28, max: 30 },
            { name: "Carbohidratos", value: 20, max: 30 },
            { name: "Grasas", value: 5, max: 10 },
        ]
    },
    {
        name: "Chocolate Potente",
        description: "Batido de chocolate rico en proteínas para satisfacer tus antojos de forma saludable y nutritiva",
        ingredients: ["Proteína de chocolate", "Leche", "Cacao", "Avena"],
        icons: [Beaker, Milk, Coffee, Brain],
        color: "from-purple-600",
        benefits: ["Control de antojos", "Energía sostenida", "Salud cerebral"],
        nutrients: [
            { name: "Proteína", value: 28, max: 30 },
            { name: "Carbohidratos", value: 20, max: 30 },
            { name: "Grasas", value: 5, max: 10 },
        ]
    }, {
        name: "Chocolate Potente",
        description: "Batido de chocolate rico en proteínas para satisfacer tus antojos de forma saludable y nutritiva",
        ingredients: ["Proteína de chocolate", "Leche", "Cacao", "Avena"],
        icons: [Beaker, Milk, Coffee, Brain],
        color: "from-purple-600",
        benefits: ["Control de antojos", "Energía sostenida", "Salud cerebral"],
        nutrients: [
            { name: "Proteína", value: 28, max: 30 },
            { name: "Carbohidratos", value: 20, max: 30 },
            { name: "Grasas", value: 5, max: 10 },
        ]
    }, {
        name: "Chocolate Potente",
        description: "Batido de chocolate rico en proteínas para satisfacer tus antojos de forma saludable y nutritiva",
        ingredients: ["Proteína de chocolate", "Leche", "Cacao", "Avena"],
        icons: [Beaker, Milk, Coffee, Brain],
        color: "from-purple-600",
        benefits: ["Control de antojos", "Energía sostenida", "Salud cerebral"],
        nutrients: [
            { name: "Proteína", value: 28, max: 30 },
            { name: "Carbohidratos", value: 20, max: 30 },
            { name: "Grasas", value: 5, max: 10 },
        ]
    },
]

interface Props {
    selectedShake: number | null
    setSelectedShake: Dispatch<SetStateAction<number | null>>
}

const OptionsItems = ({ selectedShake, setSelectedShake }: Props) => {
    return (
        <>
            {shakeCombinations.map((shake, index) => (
                <motion.div
                    key={index}
                    className="relative overflow-hidden rounded-lg shadow-lg cursor-pointer"
                    initial={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.5, delay: index * 0.09 }}
                    viewport={{ once: true, margin: '-12% 0px' }}
                    whileHover={{ scale: 1.03 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    onClick={() => setSelectedShake(selectedShake === index ? null : index)}
                >
                    <div className={`relative h-full bg-gradient-to-br ${shake.color} to-black`}>
                        <div className="absolute inset-0 bg-black opacity-60" />
                        <div className="relative z-10 p-8">
                            <div className="flex flex-col md:flex-row justify-between items-start mb-4 gap-4 md:gap-0">
                                <h3 className={`${monaSans.className} text-2xl text-white font-extrabold italic`}>
                                    {shake.name}
                                </h3>
                                <div className="flex space-x-2">
                                    {shake.icons.map((Icon, idx) => (
                                        <Icon key={idx} className="text-[#be185d] w-6 h-6" />
                                    ))}
                                </div>
                            </div>
                            <p className={`${monaSans.className} text-gray-200 my-6 text-sm`}>
                                {shake.description}
                            </p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {shake.ingredients.map((ingredient, idx) => (
                                    <span
                                        key={idx}
                                        className={`${monaSans.className} text-xs font-bold bg-[#be185d] bg-opacity-80 text-white px-4 py-1.5 rounded-full`}
                                    >
                                        {ingredient}
                                    </span>
                                ))}
                            </div>

                            <AnimatePresence>
                                {selectedShake === index && (
                                    <motion.div
                                        animate={{ opacity: 1, height: 'auto' }}
                                        exit={{ opacity: 0, height: 0 }}
                                        initial={{ opacity: 0, height: 0 }}
                                        transition={{ duration: 0.4 }}
                                    >
                                        <div className="mb-4">
                                            <h4 className={`${monaSans.className} text-white font-bold italic my-3`}>
                                                Beneficios:
                                            </h4>
                                            <ul className={`${monaSans.className} font-extralight list-disc list-inside text-white text-sm`}>
                                                {shake.benefits.map((benefit, idx) => (
                                                    <li key={idx} className={monaSans.className}>
                                                        {benefit}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                        <div>
                                            <h4 className={`${monaSans.className} text-white font-bold italic my-5`}>
                                                Nutrientes:
                                            </h4>
                                            {shake.nutrients.map((nutrient, idx) => (
                                                <div key={idx} className="mb-2">
                                                    <div className="flex justify-between text-xs text-gray-300 mb-1">
                                                        <span className={`${monaSans.className} text-sm`}>
                                                            {nutrient.name}
                                                        </span>
                                                        <span className={`${monaSans.className} text-sm`}>
                                                            {nutrient.value}g
                                                        </span>
                                                    </div>
                                                    <div className="w-full bg-gray-700 rounded-full h-3">
                                                        <div
                                                            className="bg-[#be185d] h-3 rounded-full"
                                                            style={{ width: `${(nutrient.value / nutrient.max) * 100}%` }}
                                                        />
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </div>
                    <div
                        className="absolute inset-0 bg-gradient-to-br from-transparent to-[#4b001f] opacity-30"
                        style={{
                            clipPath: 'polygon(100% 0, 0% 100%, 100% 100%)',
                        }}
                    />
                </motion.div>
            ))}
        </>
    );
};

export default OptionsItems;
