"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Clock, CreditCard } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { monaSans } from "@/utils/fonts";

interface Location {
    id: number;
    title: string;
    subtitle: string;
    address: string;
    hours: string;
    paymentMethods: string[];
    coordinates: [number, number];
}

const locations: Location[] = [
    {
        id: 1,
        title: "Gimnasio Central",
        subtitle: "Subtitulo 1",
        address: "Calle Principal 123, Ciudad",
        hours: "Lun-Vie: 6am-10pm, Sáb-Dom: 8am-8pm",
        paymentMethods: ["Efectivo", "Tarjeta", "App móvil"],
        coordinates: [40.416775, -3.70379],
    },
    {
        id: 2,
        title: "Centro Deportivo Este",
        subtitle: "Subtitulo 2",
        address: "Avenida del Deporte 456, Ciudad",
        hours: "24 horas, todos los días",
        paymentMethods: ["Tarjeta", "App móvil"],
        coordinates: [40.42, -3.69],
    },
    {
        id: 3,
        title: "Parque Fitness Oeste",
        subtitle: "Subtitulo 3",
        address: "Parque Oeste, Entrada Norte",
        hours: "Lun-Dom: 5am-11pm",
        paymentMethods: ["Efectivo", "Tarjeta"],
        coordinates: [40.41, -3.72],
    },
];

const LocationsContainer = () => {
    const [selectedLocation, setSelectedLocation] = useState<number | null>(1);
    const [mapCenter, setMapCenter] = useState<[number, number]>([40.416775, -3.70379]);

    const handleLocationClick = (location: Location) => {
        setSelectedLocation(selectedLocation === location.id ? null : location.id);
        setMapCenter(location.coordinates);
    };

    return (
        <section className="py-20 bg-black">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-1 space-y-9">
                        {locations.map((location) => (
                            <motion.div
                                key={location.id}
                                initial={{ opacity: 0, y: 20 }}
                                transition={{ duration: 0.5 }}
                                viewport={{ once: true, margin: "-10% 0px" }}
                                whileInView={{ opacity: 1, y: 0 }}
                            >
                                <Card
                                    className={`bg-gradient-to-br from-gray-900 to-black border-2 ${selectedLocation === location.id
                                        ? "border-[#be185d]"
                                        : "border-gray-700"
                                        } cursor-pointer transition-all duration-300 hover:border-[#be185d]`}
                                    onClick={() => handleLocationClick(location)}
                                >
                                    <CardContent className="p-6">
                                        <h3
                                            className={`${monaSans.className} italic text-xl font-bold text-white mb-2`}
                                        >
                                            {location.title}
                                        </h3>
                                        <p
                                            className={`${monaSans.className} text-[#be185d] mb-4 font-semibold italic`}
                                        >
                                            {location.subtitle}
                                        </p>
                                        <div className="flex items-start space-x-2 text-gray-300 mb-2">
                                            <MapPin className="w-5 h-5 mt-1 flex-shrink-0" />
                                            <span>{location.address}</span>
                                        </div>
                                        <div className="flex items-start space-x-2 text-gray-300 mb-2">
                                            <Clock className="w-5 h-5 mt-1 flex-shrink-0" />
                                            <span>{location.hours}</span>
                                        </div>
                                        <div className="flex items-start space-x-2 text-gray-300 mb-2">
                                            <CreditCard className="w-5 h-5 mt-1 flex-shrink-0" />
                                            <span>{location.paymentMethods.join(", ")}</span>
                                        </div>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </div>

                    <div className="lg:col-span-2">
                        <Card className="bg-gray-900 border-2 border-gray-700 h-[600px] overflow-hidden">
                            <CardContent className="p-0 h-full">
                                <iframe
                                    frameBorder="0"
                                    height="100%"
                                    marginHeight={0}
                                    marginWidth={0}
                                    scrolling="no"
                                    src={`https://www.openstreetmap.org/export/embed.html?bbox=${mapCenter[1] - 0.01
                                        }%2C${mapCenter[0] - 0.01}%2C${mapCenter[1] + 0.01}%2C${mapCenter[0] + 0.01
                                        }&layer=mapnik&marker=${mapCenter[0]}%2C${mapCenter[1]}`}
                                    title="Mapa"
                                    width="100%"
                                />
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LocationsContainer;
