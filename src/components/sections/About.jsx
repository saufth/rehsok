// Components
import CallToAction from '../input/CallToAction'
import Container from '../../core/components/layout/Container'
import Heading from '../../core/components/data-display/Heading'
import Image from 'next/image'
// Media
import backgroundHero from '../../../public/images/backgrounds/hero.jpg'
// Styles
import {
  layoutStyle,
  textStyle,
  backgroundStyle
} from '../../styles/sections/About.module.css'

const About = () => {
  return (
    <section className={layoutStyle}>

      <Container auto alignment='center' gapY>
        <Heading center secondary>
          Nuestra razón de ser
        </Heading>

        <p className={textStyle}>
          A lo largo de los años, todo lo relacionado con el cumplimiento de las
          obligaciones tributarias ha sido considerado complicado y, sobre todo,
          costoso, generando en los contribuyentes sensaciones de estrés, impotencia,
          decepción, frustración, intranquilidad y miedo.
          <br/><br/>
          Dentro del ámbito empresarial el cumplimiento de las citadas obligaciones
          resulta particularmente complicado, haciendo que muchos profesionales en la
          materia se encuentren con severas dificultades para desarrollar sus actividades
          de manera confiable, generando que se muestren recelosos a desempeñarse en dichas
          labores tributarias; todo esto derivado de las severas consecuencias patrimoniales
          que puedan generarse ante el más mínimo error. En palabras llanas, y considerando
          tales aspectos, esta área de trabajo es con la que, preferentemente, nadie quiere
          tener contacto. Sin embargo, es imposible no hacerlo.
          <br/><br/>
          Por esta razón, y con la firme convicción y motivación de transformar en historias
          de éxito e inspiración las desagradables experiencias que hoy cuentan muchos empresarios
          respecto al tema, es que nace en el año 2008 Rehsok Consultores.
          <br/><br/>
          A diferencia de lo que comúnmente se piensa, llevar una correcta administración en el
          cumplimiento de las obligaciones fiscales resulta ser una fuente de posibilidades y
          oportunidades de innovación, progreso y bienestar a corto, mediano y largo plazo para
          el legado empresarial de nuestros clientes que, sobra decirlo, son nuestra razón de ser
          y, sobre todo, nuestra prioridad.
          <br/><br/>
          Ahora bien, no hay mejor símbolo para un legado que el árbol de la vida, mismo que
          representa a Rehsok Consultores.
          <br/><br/>
          Ahora bien, no hay mejor símbolo para un legado que el árbol de la vida, mismo que
          representa a Rehsok Consultores.
          <br/><br/>
          A lo largo de la historia, para muchas culturas y civilizaciones el árbol de la
          vida ha tenido diferentes significados y simbolismos. No obstante, en todas ellas
          existe uno en común: el ciclo de la vida.
          <br/><br/>
          El tronco como metáfora representa esa unión tan específica entre la vida y la
          muerte, mientras que las ramas representan las muchas posibilidades y caminos
          que hay a lo largo de este gran viaje que es la vida.
          <br/><br/>
          Y es que, aunque todos en este mundo compartimos un destino en común, el viaje
          no tiene por qué ser el mismo.
          <br/><br/>
          Tomando en cuenta esa convicción y simbología, en Rehsok Consultores buscamos
          que la razón de ser de tu empresa se diferencie de las demás en cada una de
          las etapas que le tocará enfrentar.
          <br/><br/>
          Tomando en cuenta esa convicción y simbología, en Rehsok Consultores buscamos que
          la razón de ser de tu empresa se diferencie de las demás en cada una de las etapas
          que le tocará enfrentar.
          <br/><br/>
          Las empresas son como un ser vivo: tienen un ciclo. El nacimiento se da en la firma
          del acta constitutiva. Luego, en la juventud de las organizaciones es en donde se dará
          el fortalecimiento necesario, a través de estrategias y decisiones, que será crucial y
          determinante en la madurez de las empresas, etapa en la que se busca una consolidación
          fuerte y saludable. De ahí se deduce que la máxima obtención de frutos futuros depende
          del correcto manejo en las etapas de crecimiento, en cuanto a planeación, organización
          y toma adecuada de decisiones. Si se ha tenido una vida saludable y se han tomado los
          caminos pertinentes, serán mayores las posibilidades de disfrutar las recompensas del
          trabajo y del dinero invertidos.
          <br/><br/>
          Aquí surge una pregunta capital: ¿Cuál es la mejor etapa para planear y realizar todo
          lo relacionado con los asuntos fiscales del negocio? La cuestión es compleja y requiere
          de observaciones puntuales para poderse responder adecuadamente.
          <br/><br/>
          Generalmente, tanto empresarios como emprendedores consideran oportuno comenzar a planear
          desde el nacimiento de la organización. Aunque parezca lo contrario, esta respuesta está
          lejos de ser oportuna.
          <br/><br/>
          Es desde antes del nacimiento de la empresa, en la planeación integral de toda la organización,
          cuando se debe tomar en cuenta el aspecto fiscal. Como parte esencial para el funcionamiento de
          las organizaciones, es capital observar en su gestación el tema fiscal y darle la atención que
          requiere. Todo esto con el objetivo de que a su nacimiento los pasos sean firmes, seguros y llenos
          de confianza, pues sabemos el gran trabajo que conlleva la realización y la puesta en marcha de un
          negocio.
          <br/><br/>
          Las posibilidades de éxito a futuro de la empresa dependerán de estos pasos previos. Momento en el
          cual se le debe arropar y proteger de todas las amenazas y debilidades que puedan surgir.
          <br/><br/>
          En Rehsok Consultores buscamos solamente un objetivo: Más y mejores posibilidades de éxito para que,
          a través de nuestros servicios de compliance y planeación fiscal, nuestros clientes puedan construir
          un patrimonio empresarial para su comunidad, para sus familias y para ellos mismos.
          <br/><br/>
          Permítenos ser tus compañeros de viaje.
        </p>

        <CallToAction secondary space='top-lg' />
      </Container>

      <div className={backgroundStyle}>
        <Image
          alt='Rehsock background'
          src={backgroundHero}
          quality='100'
          placeholder='blur'
          fill
          sizes='(min-width: 1024) 1920px, 1366px'
        />
      </div>

    </section>
  )
}

export default About
