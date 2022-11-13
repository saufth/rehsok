// Components
import CallToAction from '../input/CallToAction'
import Container from '../../core/components/layout/Container'
import Heading from '../../core/components/data-display/Heading'
// Styles
import {
  textStyle
} from '../../styles/sections/About.module.css'

const About = () => {
  return (
    <section className='mt-16 md:mt-24 lg:mt-32'>
      <Container auto alignment='center' gapY>

        <Heading center secondary>
          Nuestra razón de ser
        </Heading>

        <p className={textStyle}>
          A lo largo de los años, todo lo que tiene que ver con temas fiscales ha
          sido visto como una fuente interminable de estrés, impotencia, decepción,
          frustración, intranquilidad y miedo para los empresarios mexicanos.
          <br/><br/>
          Pero no solo eso. Históricamente, dentro de las mismas empresas, el ramo
          fiscal se ha caracterizado por ser uno de los más tediosos, cansados o
          desagradables para laborar. Incluso podríamos decir que muchos colaboradores
          no disfrutan desempeñarse en él.
          <br/><br/>
          Dicho de otro modo, esta área de trabajo en el “policía malo” con el que nadie
          quiere tener contacto o ningún tipo de relación.
          <br/><br/>
          Por esta razón, y con la firme convicción y motivación de transformar en historias
          de éxito e inspiración las desagradables historias que hoy cuentan muchos empresarios
          respecto al tema, es que nace, en 2008, Rehsok Consultores.
          <br/><br/>
          El área fiscal, a diferencia de lo que muchas personas creen es, en realidad, una fuente
          de posibilidades y oportunidades de innovación, progreso y bienestar a corto, mediano y
          largo plazo para el legado empresarial de nuestros clientes que, sobra decirlo, pero son
          nuestra razón de ser y, sobre todo, nuestra prioridad.
          <br/><br/>
          Ahora bien, qué mejor símbolo para un legado que el árbol de la vida, mismo que representa
          a Rehsok Consultores.
          <br/><br/>
          Tal vez se preguntarán por qué, entre tantos símbolos, elegimos al árbol.
          <br/><br/>
          La razón es, por demás, interesante.
          <br/><br/>
          Para muchas culturas y civilizaciones, a lo largo de la historia, el árbol de la vida tiene
          diferentes significados y simbolismos. No obstante, en todas ellas representa un denominador
          común. El ciclo de la vida. 
          <br/><br/>
          El tronco como metáfora representa esa unión tan específica entre la vida y la muerte,
          mientras que las ramas representan las muchas posibilidades y caminos que hay a lo largo
          de este gran viaje al que llamamos vida.
          <br/><br/>
          Y es que, aunque para todos en este mundo, el final es el mismo, el viaje no tiene por
          qué serlo.
          <br/><br/>
          Tomando en cuenta esa convicción y simbología, en Rehsok Consultores buscamos que la razón
          de ser de tu empresa se diferencie de las demás en cada una de las etapas que le tocarán
          enfrentar.
          <br/><br/>
          Seguramente en este momento te estás preguntando: ¿Qué tiene que ver esto con mis negocios?
          <br/><br/>
          Y con humildad te decimos que más de lo que te imaginas y te vamos a decir por qué.
          <br/><br/>
          Este mismo ciclo que vive el ser humano, también lo viven las empresas.  Simbólicamente
          nacen en la firma del acta constitutiva, posterior a esto viene la etapa de la juventud
          donde el o los socios deben de alimentar y nutrirla con todo lo que necesitan para que
          puedan llegar a la edad adulta y a la vejez lo más fuertes y saludables posible.
          <br/><br/>
          Por lo tanto, es un hecho que, si las dos primeras etapas de vida de la empresa se llevaron
          a cabo previendo y planeando correctamente, serán mucho mayores las posibilidades de
          disfrutar los frutos de todo el trabajo, tiempo y dinero invertido a lo largo de los años.
          <br/><br/>
          La pregunta central de todo esto: ¿En qué etapa se debería estar analizando y planeando
          todo el tema fiscal de tu negocio?
          <br/><br/>
          Es una pregunta compleja que, aunque pudiera parecer obvio, casi nadie logra contestar
          correctamente.
          <br/><br/>
          Por lo general, los emprendedores y empresarios contestan que desde el momento en el
          que nace se debe de estar haciendo la planeación, pero, aunque no lo crean, esta
          respuesta es la segunda mejor, pero no la primera.
          <br/><br/>
          La respuesta correcta, o ideal, es que el o los futuros emprendedores realicen una
          planeación de toda su empresa incluyendo, obviamente, el área fiscal, desde antes
          del nacimiento de esta.
          <br/><br/>
          ¿Para qué?
          <br/><br/> 
          Para que cuando la empresa finalmente nazca, con todo el esfuerzo que esto sabemos
          que conlleva, no existan pasos en falso, sino todo lo contrario. Cada paso, pasito
          o pasote que se tome deberá estar cargado de un propósito lleno de certeza.
          <br/><br/>
          O a poco cuando nace un bebé no se tiene lista su ropa para cobijarlo, el alimento
          para nutrirlo y la planeación de las vacunas para protegerlo. Del mismo modo, las
          empresas deben tener todos los frentes cubiertos para poder, con ello, incrementar
          sustancialmente las posibilidades de éxito a futuro.
          <br/><br/>
          Y justamente eso es lo que desde Rehsok Consultores queremos:  Más y mejores
          posibilidades de éxito para que, a través de nuestros servicios de compliance
          y planeación fiscal, nuestros clientes puedan construir un legado empresarial
          para su comunidad, para sus familias y para ellos mismos.
          <br/><br/>
          Permítenos acompañarte en este camino.
        </p>

        <CallToAction secondary space='top-lg' />

      </Container>
      <div
        className='w-full h-screen fixed top-0 left-0 -z-10 bg-black bg-cover bg-center bg-no-repeat'
        style={{backgroundImage: 'url(/images/backgrounds/hero.jpg)'}}
      ></div>
    </section>
  )
}

export default About
