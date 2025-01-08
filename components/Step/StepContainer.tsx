import Step from './Step'

import consumir from "@/public/consumir.jpg"
import pedir from "@/public/pedir.jpg"
import esperar from "@/public/esperar.jpg"

const StepContainer = () => {
    return (
        <div className="flex flex-col">
            <Step
                color="pink"
                src={pedir}
                step={1}
                subtitle="Explora todas las opciones que hemos preparado para ti. Hay combinaciones únicas y deliciosas esperando que encuentres la que más te guste."
                textColor="slate"
                title="ELEGÍ TU BATIDO"
            />

            <Step
                color="slate"
                src={esperar}
                step={2}
                subtitle="Tu batido estará listo en solo unos segundos. No necesitas hacer nada más, simplemente relájate y prepárate para disfrutar."
                textColor="pink"
                title="ESPERALO"
            />

            <Step
                color="pink"
                src={consumir}
                step={3}
                subtitle="Siente el sabor único, como si lo hubieras preparado en tu propia casa. Todo fresco, delicioso y al mismo precio que siempre."
                textColor="slate"
                title="DISFRUTALO" />
        </div>
    )
}

export default StepContainer