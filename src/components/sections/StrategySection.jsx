// Components
import CallToAction from '../input/CallToAction'
import Container from '../../core/components/layout/Container'
import Heading from '../../core/components/data-display/Heading'
import Paragraph from '../../core/components/data-display/Paragraph'
// Styles
import {
  listStyle
} from '../../styles/sections/StrategySection.module.css'

const StrategySection = () => {
  return (
    <section id='estrategia'>
      <Container auto alignment='center' gapY>

        <Heading>
          Nuestra estrategia
        </Heading>

        <Paragraph center small space='top-xs'>
          Mas allá de querer ser un experto en todas las áreas de una empresa
          o negocio, busca rodearte de un equipo de expertos que complemente
          correctamente las habilidades y conocimientos que no tienes.
        </Paragraph>

        <ul className={listStyle}>
          <li>Trabajamos en equipo, dividimos el esfuerzo y vencemos</li>
          <li>Transformamos problemas en oportunidades valiosas</li>
          <li>Nunca asumimos, tenemos certeza en los objetivos</li>
          <li>Prevenimos futuras tendencias, cazamos oportunidades</li>
          <li>Innovamos constantemente, sabemos lo que es valioso</li>
          <li>Buscamos progreso siempre, no perfección</li>
        </ul>

        <Paragraph center small>
          ¡Nos encanta que las cosas nos salgan bien a la primera!.. Por eso
          analizamos y elegimos con mucho cuidado la mejor forma de llegar
          a donde tu quieres, administrando de manera optima tus recursos y
          encontrando para ti las mejores oportunidades a tu medida.
        </Paragraph>

        <CallToAction space='top-lg' />

      </Container>

      <Container auto alignment='center' gapY>

        <Heading>
          Metodología MVP
        </Heading>

        <Paragraph center small space='top-xs'>
          ¡Somos amantes del minimalismo!.. Creemos que cada aspecto o elemento dentro
          de tu organización existe porque suma valor a tus clientes, trabajadores y
          a la razón de la misma, por lo que adoptamos la metodología MVP (Minimum Viable Product).
        </Paragraph>

        <div className='w-full mt-32 flex flex-wrap justify-center gap-32 md:gap-24 lg:gap-x-20'>

          <div className='w-52 relative flex flex-col items-center'>
            <div className='w-12 lg:w-14 h-12 lg:h-14 absolute -top-12 lg:-top-14 -left-1 lg:-left-2 flex justify-center items-center font-archivo-bold lg:font-archivo-extrabold text-xl text-white bg-rehsok-gray rounded-full'>
              <div className='mt-0.5'>
                1
              </div>
            </div>
            <img
              className='w-20 md:w-[86px] lg:w-24'
              src='/images/icons/idea.svg'
              alt='Idea'
            />
            <p className='mt-10 md:mt-12 lg:mt-14 font-archivo-bold text-xl md:text-2xl lg:text-3xl text-center text-rehsok-gray'>
              Piensa una idea
            </p>
            <p className='mt-4 md:mt-5 lg:mt-6 md:tex-lg lg:text-xl text-center text-rehsok-gray'>
              Crea las hipotesis que desas comprovar y define tus metricas para
              obtener la información que te ayude a lograrlo.
            </p>
          </div>

          <div className='w-52 relative flex flex-col items-center'>
            <div className='w-12 lg:w-14 h-12 lg:h-14 absolute -top-12 lg:-top-14 -left-1 lg:-left-2 flex justify-center items-center font-archivo-bold lg:font-archivo-extrabold text-xl text-white bg-rehsok-gray rounded-full'>
              <div className='mt-0.5'>
                2
              </div>
            </div>
            <img
              className='w-20 md:w-[86px] lg:w-24'
              src='/images/icons/evaluation.svg'
              alt='Evaluación'
            />
            <p className='mt-10 md:mt-12 lg:mt-14 font-archivo-bold text-xl md:text-2xl lg:text-3xl text-center text-rehsok-gray'>
              Evalua su viabilidad
            </p>
            <p className='mt-4 md:mt-5 lg:mt-6 md:tex-lg lg:text-xl text-center text-rehsok-gray'>
              Mide y analiza indicadores clave, elije metricas que muestren claramente la
              relación directa entre causa y efecto.
            </p>
          </div>

          <div className='w-52 relative flex flex-col items-center'>
            <div className='w-12 lg:w-14 h-12 lg:h-14 absolute -top-12 lg:-top-14 -left-1 lg:-left-2 flex justify-center items-center font-archivo-bold lg:font-archivo-extrabold text-xl text-white bg-rehsok-gray rounded-full'>
              <div className='mt-0.5'>
                3
              </div>
            </div>
            <img
              className='w-20 md:w-[86px] lg:w-24'
              src='/images/icons/deployment.svg'
              alt='Ejecución'
            />
            <p className='mt-10 md:mt-12 lg:mt-14 font-archivo-bold text-xl md:text-2xl lg:text-3xl text-center text-rehsok-gray'>
              Ponla en marhca
            </p>
            <p className='mt-4 md:mt-5 lg:mt-6 md:tex-lg lg:text-xl text-center text-rehsok-gray'>
              Parte de una base solida y a la que le veas potencial y ¡lanzate al mercado!, no tiene
              que ser perfecto por eso es un MPV.
            </p>
          </div>

          <div className='w-52 relative flex flex-col items-center'>
            <div className='w-12 lg:w-14 h-12 lg:h-14 absolute -top-12 lg:-top-14 -left-1 lg:-left-2 flex justify-center items-center font-archivo-bold lg:font-archivo-extrabold text-xl text-white bg-rehsok-gray rounded-full'>
              <div className='mt-0.5'>
                4
              </div>
            </div>
            <img
              className='w-20 md:w-[86px] lg:w-24'
              src='/images/icons/testing.svg'
              alt='Adaptación'
            />
            <p className='mt-10 md:mt-12 lg:mt-14 font-archivo-bold text-xl md:text-2xl lg:text-3xl text-center text-rehsok-gray'>
              Analiza, ajusta y adaptala
            </p>
            <p className='mt-4 md:mt-5 lg:mt-6 md:tex-lg lg:text-xl text-center text-rehsok-gray'>
              Alineate a las necesidades del mercado, ajusta lo que no esta funcionando, y escala
              tu progreso con un mayor inpulso.
            </p>
          </div>

        </div>

        <CallToAction space='top-xl' />

      </Container>

    </section>
  )
}

export default StrategySection
