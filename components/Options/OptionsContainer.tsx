"use client"

import { useState } from 'react'
import { Beaker, Coffee, Banana, Milk, Droplet, Apple, Dumbbell, Zap, Brain } from 'lucide-react'

import OptionsItems from './OptionsItems';

interface Nutrient {
    name: string;
    value: number;
    max: number;
}

export interface Shake {
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

export default function ShakeCombinationsDetailed() {
    const [selectedShake, setSelectedShake] = useState<number | null>(null)

    return (
        <section className={`py-16 bg-black`}>
            <div className="container mx-auto px-4 w-4/5">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                    <OptionsItems selectedShake={selectedShake} setSelectedShake={setSelectedShake} shakeCombinations={shakeCombinations} />
                </div>
            </div>
        </section>
    )
}

