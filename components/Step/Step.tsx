import Image from "next/image";

import { monaSans } from "@/utils/fonts"

interface Props {
    step: number;
    title: string;
    subtitle: string;
    color: string;
    textColor: string;
    src: string;
}

const Step = ({ step, title, subtitle, color, textColor, src }: Props) => {
    return (
        <div className={`pl-7 py-6 sticky top-0 bottom-auto ${color === "pink" ? "bg-pink-800" : "bg-slate-800"}`}>
            <article className="grid grid-cols-2 justify-center gap-10 md:gap-20 items-center">
                <div className="flex flex-col md:flex-row items-center justify-center ml-36 md:ml-20">
                    <div>
                        <p
                            className={`${monaSans.className} font-extrabold text-[11rem] md:text-[14rem] ${textColor === "slate" ? "text-slate-100" : "text-pink-700"
                                }`}
                        >
                            {step}
                        </p>
                    </div>

                    <div className="flex flex-col ml-4 gap-3">
                        <p
                            className={`${monaSans.className} text-center md:text-start text-3xl md:text-4xl font-bold ${textColor === "slate" ? "text-slate-100" : "text-pink-700"
                                }`}
                        >
                            {title}
                        </p>
                        <p className={`${monaSans.className} text-center md:text-start text-xl text-white font-light w-[18rem] md:w-[23.5rem] pb-5 md:pb-0`}>
                            {subtitle}
                        </p>
                    </div>
                </div>

                <div>
                    <Image alt="Imagen de paso" className="hidden md:block" src={src} width={500} />
                </div>
            </article>
        </div>
    );
};

export default Step