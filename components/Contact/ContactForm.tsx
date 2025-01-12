import { monaSans } from '@/utils/fonts'


const ContactForm = () => {
    return (
        <form className='flex flex-col mt-16 md:mt-44 md:ml-10 gap-5 justify-center items-center md:items-start'>
            <label className={`${monaSans.className} text-white text-xl font.bold flex flex-col gap-1 italic`} htmlFor='nombre'>
                Nombre
                <input className='w-80 md:w-[30rem] py-1 bg-slate-200' name="nombre" type="text" />
            </label>

            <label className={`${monaSans.className} text-white text-xl font.bold flex flex-col gap-1 italic`} htmlFor='nombre'>Email
                <input className='w-80 md:w-[30rem] py-1 bg-slate-200' name="nombre" type="email" />
            </label>

            <label className={`${monaSans.className} text-white text-xl font.bold flex flex-col gap-1 italic`} htmlFor='nombre'>Mensaje
                <textarea className='w-80 md:w-[30rem] py-1 bg-slate-200 pl-2 min-h-40' name="nombre" placeholder='Deja tu mensaje acá...' />
            </label>
            <button className="bg-pink-700 py-3 text-3xl mt-5 -skew-x-12 text-white px-8 transition-all hover:px-10 hover:bg-pink-600">
                ENVIAR
            </button>
        </form>
    )
}

export default ContactForm