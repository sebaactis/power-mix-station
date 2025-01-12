import ContactForm from './ContactForm'

import { monaSans } from '@/utils/fonts'

const FormContainer = () => {
    return (
        <section className='bg-black grid grid-cols-1 md:grid-cols-2 pb-16'>
            <article className='col-span-1 md:ml-[15rem] flex flex-col mt-20'>
                <div className='font-outline text-transparent hidden md:block text-5xl md:text-[9rem] z-10'>CONTACTO</div>
                <div className=' text-white flex flex-col gap-2 md:-mt-16 z-30 text-center md:text-start'>
                    <p className={`${monaSans.className} font-semibold text-2xl md:text-3xl italic ml-3`}>Preguntá lo que quieras...</p>
                    <p className={`${monaSans.className} font-extrabold text-6xl md:text-8xl italic`}>Estamos aquí para
                        <span className={`text-pink-700 ${monaSans.className} `}> ayudarte.</span>
                    </p>
                    <p className={`${monaSans.className} font-normal text-lg md:text-xl italic mx-4 md:mx-0 mt-4`}>¡Nos encantaría escucharte! Déjanos tu mensaje y te responderemos pronto.</p>
                    <p className={`${monaSans.className} font-normal text-lg md:text-xl italic mx-4 md:mx-0`}>Completa el formulario.</p>
                </div>
            </article>

            <article className='col-span-1'>
                <ContactForm />
            </article>

        </section>
    )
}

export default FormContainer