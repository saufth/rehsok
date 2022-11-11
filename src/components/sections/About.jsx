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
    <section id='razon-de-ser'>
      <Container auto alignment='center' gapY>

        <Heading center>
          Nuestra historia
        </Heading>

        <p className={textStyle}>
          A lo largo de los años, todo lo que tiene que ver con temas fiscales ha
          sido visto como una fuente interminable de estrés, impotencia, decepción,
          frustración, intranquilidad y miedo para los empresarios mexicanos.
          <br/><br/>
          Pero no solo eso. Históricamente, dentro de las mismas empresas, el ramo fiscal
          se ha caracterizado por ser uno de las más tediosos, cansados o desagradables
          para laboral.  Incluso podríamos decir que muchos colaboradores no disfrutan
          desempeñarse en ella.
          <br/><br/>
          Dicho de otro modo, el área fiscal se ha convertido en el “policía malo” con 
          el que nadie quiere tener contacto o ningún tipo de relación.
          <br/><br/>
          Por esta razón y con la firme convicción y motivación de transformar las
          desagradables historias que hoy cuentan muchos empresarios en historias de
          éxito e inspiración nace, en 2008, Rehsok Consultores.
          <br/><br/>
          El área fiscal, a diferencia de lo que muchas personas creen es en realidad
          una fuente de posibilidades y oportunidades de innovación, progreso y bienestar
          a corto, mediano y largo plazo para el legado empresarial de nuestros clientes.
          <br/><br/>
          Y qué mejor símbolo para un legado que el árbol de la vida, mismo que representa
          a Rehsok Consultores.
          <br/><br/>
          Tal vez se preguntarán por qué, entre tantos símbolos, elegimos al árbol.
          <br/><br/>
          La razón es, por demás, interesante.
          <br/><br/>
          Para muchas culturas y civilizaciones, a lo largo de la historia, el árbol de la
          vida tiene diferentes significados y simbolismos.
          <br/><br/>
          Para nosotros representa las diferentes etapas de la vida que inician desde el
          nacimiento, la juventud, la edad madura y la vejez.
          <br/><br/>
          Y es que este mismo ciclo que vive el ser humano, lo viven las empresas.
          Simbólicamente nacen en la firma del acta constitutiva, posterior a esto
          viene la etapa de la juventud donde el o los socios deben de alimentar y
          nutrirla con todo lo que necesitan para que puedan llegar a la edad adulta
          y a la vejez lo más fuertes y saludables posible.
          <br/><br/>
          Es un hecho que, si las dos primeras etapas de vida de la empresa se llevaron a cabo
          previendo y planeando correctamente, serán mucho mayores las posibilidades de disfrutar
          los frutos de todo el trabajo, tiempo y dinero invertido en las últimas dos.
          <br/><br/>
          Ahora te preguntamos, ¿en qué etapa crees que deberías estar analizando y planeando todo
          el tema fiscal de tu empresa? Es una pregunta compleja que, aunque pudiera parecer obvio,
          casi nadie logra contestar correctamente.
          <br/><br/>
          Por lo general los emprendedores y empresarios contestan que desde el momento en el que
          nace se debe de estar haciendo la planeación, pero, aunque no lo crean, esta respuesta es
          la segunda mejor, pero no la primera.
          <br/><br/>
          La respuesta correcta, o ideal, es que el o los futuros emprendedores realicen una planeación
          de toda su empresa incluyendo, obviamente, el área fiscal, desde antes del nacimiento de esta.
          <br/><br/>
          ¿Por qué? Para cuando la empresa finalmente nazca, cada paso que se tome, debe de tener un
          propósito, se debe tener la mayor cantidad de certeza acerca de cuáles serán los pasos a
          seguir, similar a cuando nace un bebe, ya se debe tener lista la ropa para cobijarlo, el
          alimento para nutrirlo y las vacunas para protegerlo, así mismo para las empresas, debemos
          que tener estos y más elementos cubiertos antes de nacer para lograr incrementar las
          posibilidades de éxito principalmente a futuro.
          <br/><br/>
          A grandes rasgos, esto es lo que desde Rehsok Consultores queremos para ti:  Más y mejores
          posibilidades de éxito para tu empresa a través de nuestros servicios de compliance y
          planeación fiscal, que le permitan a nuestros clientes construir un legado empresarial para
          su comunidad, para sus familias y para ellos mismos.
        </p>

        <CallToAction page='historia' space='top-lg' />

      </Container>
    </section>
  )
}

export default About
