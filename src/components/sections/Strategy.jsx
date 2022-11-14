// Components
import CallToAction from '../input/CallToAction'
import Container from '../../core/components/layout/Container'
import Heading from '../../core/components/data-display/Heading'
import ImageQuote from '../data-display/ImageQuote'
import Paragraph from '../../core/components/data-display/Paragraph'
// Styles
import {
  contentStyle
} from '../../styles/sections/Strategy.module.css'

const imageFolder = 'strategy/'

const strategy = [
  {
    heading: 'Trabajamos en equipo',
    descriptions: [
      'Filosofía: Los negocios son opuestos a las matemáticas. Mientras que las matemáticas plantean que la mejor forma de sumar es multiplicar, en los negocios, la mejor forma de sumar es dividir. Dividir el esfuerzo, el trabajo, las tareas y hasta los ingresos.',
      'Mas allá de querer ser un experto en todas las áreas de una empresa o negocio, busca rodearte de un equipo de expertos que complemente correctamente las habilidades y conocimientos que no tienes.'
    ],
    imageSrc: `${imageFolder}team`
  },
  {
    heading: 'Transformando problemas en oportunidades',
    descriptions: [
      'Problemas = áreas de oportunidad.',
      'Mientras más grande y frecuente sea el problema, mayor será la posibilidad de generar valor.'
    ],
    imageSrc: `${imageFolder}oportunity`
  },
  {
    heading: 'No asumimos',
    descriptions: [
      'Se debe tener certeza en cada tarea u objetivo a realizar. Nunca asumir en caso no tener certeza plena.',
      'Evitar los retrabajos dando indicaciones claras asegura que las cosas se harán bien a la primera.',
      'Cualquier duda, pregunta o sugerencia de nuestros clientes y colaboradores es siempre bienvenida.'
    ],
    imageSrc: `${imageFolder}assume`
  },
  {
    heading: 'Planeamos y ejecutamos con estrategia',
    descriptions: [
      '¿Cuál es la mejor forma de llegar de un punto A (donde estamos) a un punto B (a donde se quiere llegar)?',
      'Administramos con eficiencia los recursos disponibles.',
      'Siempre hay una forma óptima o mejor de hacer las cosas.'
    ],
    imageSrc: `${imageFolder}strategy`
  },
  {
    heading: 'Prevemos futuras tendencias',
    descriptions: [
      'Hay que saber prever o anticipar cuándo entrar y salir de cualquier oportunidad, situación y/o negocio. Nada es eterno, todo tiene un ciclo, un punto alto y un punto bajo.',
      'Lo único constante es el cambio.'
    ],
    imageSrc: `${imageFolder}prevent`
  },
  {
    heading: 'Innovamos constantemente',
    descriptions: [
      'Lo importante es generar innovación alrededor de lo que el cliente considera valioso.',
      'Para lograr generar innovaciones de valor, es imperativo conocer al cliente, a la competencia, al mercado y a ti mismo como organización.'
    ],
    imageSrc: `${imageFolder}innovate`
  },
  {
    heading: 'Buscamos progreso, no perfección',
    descriptions: [
      'El mundo de los negocios es un juego infinito en el que no se tiene certeza plena de todos los elementos que están participando en el mercado ni la variabilidad de estos.  A lo máximo que se puede aspirar es a tener estimaciones.',
      '¿Qué sí está en nuestro control?',
      'El generar una cultura de progreso constante dentro de nuestra organización, aspirar a ser mejores cada día con relación a nuestras propias métricas e inspirar el cambio a esta cultura de progreso en cada rincón de la organización.'
    ],
    imageSrc: `${imageFolder}progress`
  },
]

const Strategy = () => {
  return (
    <section id='estrategia'>
      <Container auto alignment='center' gapY>

        <Heading center>
          Nuestra estrategia
        </Heading>

        <Paragraph center small space='top-xs'>
          El éxito a corto, mediano y largo plazo de cualquier empresa
          no depende de un solo aspecto, sino de la sincronización de
          muchos. Aquí te presentamos los más importantes para nosotros,
          mismos que forman parte de nuestro ADN y que son clave en la
          generación de soluciones de valor para nuestros clientes.
        </Paragraph>

        <div className={contentStyle}>
          {strategy.map(({ heading, descriptions, imageSrc }, index) => {
            const reverse = Boolean(index % 2)

            return (
              <div key={index}>
                <ImageQuote
                  heading={heading}
                  descriptions={descriptions}
                  src={imageSrc}
                  reverse={reverse}
                />
              </div>
            )
          })}
        </div>

        <Paragraph center small>
          "It ain’t what you don’t know that gets you into trouble.
          It’s what you know for sure that just ain’t so."
        </Paragraph>

        <p className='font-archivo-bold text-xs text-rehsok-gray md:text-sm mt-4'>
          Mark Twain
        </p>

        <CallToAction space='top-md' />

      </Container>
    </section>
  )
}

export default Strategy
