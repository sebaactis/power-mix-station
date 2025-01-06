import { NavbarComponent } from '../NavbarComponent';

import mainImg from '@/public/mainImg.png'

const Welcome = () => {
    return (

        <section className='bg-cover bg-center h-[1000px]' style={{ backgroundImage: `url(${mainImg.src})` }}>
            <NavbarComponent />
            <article className="mt-96 ml-36 text-white text-7xl font-extrabold">
                <p>
                    INNOVACION FITNESS
                </p>
                <p className='text-pink-700'>
                    AL ALCANCE
                </p>
                <p className='text-2xl font-medium mt-1.5'>Máxima comodidad y calidad en un solo lugar.</p>
            </article>
            <button className="bg-pink-700 ml-36 py-4 text-3xl mt-10 -skew-x-12 text-white px-8 transition-all hover:px-10 hover:bg-pink-600">Propuesta</button>
        </section>

    )
};

export default Welcome;
