import background from "@/public/optionsbackground.jpg"
import { monaSans } from "@/utils/fonts";
const Main = () => {
    return (
        <section
            className="bg-center bg-cover h-[45rem] relative flex justify-center items-center"
            style={{ backgroundImage: `url(${background.src})` }}
        >
            <div className="absolute inset-0 bg-black opacity-60" />

            <div className="flex flex-col justify-center items-center relative gap-7">
                <h1 className={`${monaSans.className} text-white font-black text-6xl md:text-9xl italic`}>BATIDOS</h1>
                <p className={`${monaSans.className} text-white text-lg md:text-xl font-light text-center w-[80%] md:w-[40%]`}>Explora una amplia variedad de opciones en suplementos deportivos, diseñados para mejorar tu rendimiento, apoyar tu recuperación y ayudarte a alcanzar tus metas. Desde proteínas hasta energizantes y complementos, encuentra todo lo que necesitas para potenciar tu estilo de vida activo.</p>
            </div>
        </section>
    );
};

export default Main