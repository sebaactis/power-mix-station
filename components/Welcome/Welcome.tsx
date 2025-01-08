import { NavbarComponent } from '../NavbarComponent';

import { monaSans } from '@/utils/fonts';
import mainImg from '@/public/mainImg.png'


const Welcome = () => {
    return (

        <section className='bg-cover md:bg-center md:h-[1000px] h-[650px] text-center md:text-start' style={{ backgroundImage: `url(${mainImg.src})` }}>
            <NavbarComponent />
            <article className="mt-36 md:mt-96 md:ml-36 text-white text-3xl md:text-6xl 2xl:text-7xl font-extrabold">
                <p className={`${monaSans.className}`}>
                    INNOVACION FITNESS
                </p>
                <p className={`${monaSans.className} text-pink-700`}>
                    AL ALCANCE
                </p>
                <p className='text-2xl font-medium mt-1.5'>Máxima comodidad y calidad en un solo lugar.</p>
                <button className="bg-pink-700 py-4 text-3xl mt-10 -skew-x-12 text-white px-8 transition-all hover:px-10 hover:bg-pink-600">BATIDOS</button>
            </article>

        </section>
    )
};

export default Welcome;
