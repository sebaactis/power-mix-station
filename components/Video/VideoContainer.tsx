import { monaSans } from "@/utils/fonts"

const VideoContainer = () => {
    return (
        <section className="flex flex-col-reverse md:flex-row justify-center bg-black gap-7 w-full py-16 md:px-20 2xl:px-36">

            <video
                autoPlay
                loop
                muted
                playsInline
                className=" w-[90%] md:w-[35rem] mb-4 rounded-md mx-auto"
                src="videoMaquina.mp4"
            >
                Tu navegador no soporta el tag de video.
            </video>

            <div className="flex flex-col gap-2 items-center md:items-start">
                <div className='font-outline-pink text-transparent text-5xl md:text-[4rem] 2xl:text-8xl z-10 italic '>COMO FUNCIONA</div>
                <p className={`${monaSans.className} text-white md:text-lg 2xl:text-2xl font-light italic ml-2 w-[86%] text-center md:text-start`}>Descubre cómo nuestra innovadora máquina expendedora revoluciona la forma en que accedes a tus suplementos deportivos. Con una interfaz intuitiva y una selección premium de productos, optimizamos tu rutina de entrenamiento.</p>
            </div>
        </section>
    )
}

export default VideoContainer