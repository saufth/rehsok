// Components
import CallToAction from '../input/CallToAction'
import Card from '../../core/components/data-display/Card'
import Container from '../../core/components/layout/Container'
import Heading from '../../core/components/data-display/Heading'
import Paragraph from '../../core/components/data-display/Paragraph'
// Styles
import {
  listStyle,
  listItemStyle
} from '../../styles/sections/SolutionsSection.module.css'

const imageFolder = 'solutions/'

const solutions =  [
  {
    text: 'Compliance fiscal',
    imageSrc:`${imageFolder}compliance`
  },
  {
    text: 'Consultoría y asesoría fiscal',
    imageSrc:`${imageFolder}consulting`
  },
  {
    text: 'Planeación fiscal',
    imageSrc:`${imageFolder}planning`
  },
  {
    text: 'Litigio fiscal',
    imageSrc:`${imageFolder}litigation`
  },
  {
    text: 'Atención personalizada a requerimientos del SAT',
    imageSrc:`${imageFolder}requirements`
  }
]

const SolutionsSection = () => {
  return (
    <section id='soluciones'>
      <Container auto alignment='center' gapY>

        <Heading center>
          Nuestras soluciones
        </Heading>

        <Paragraph center small space='top-sm'>
          Nuestra razón de ser consiste en convertirnos en un aliado
          determinante en el éxito presente y futuro de nuestros clientes.
          Nos apasiona crear posibilidades que generen valor a sus modelos
          de negocio para que, día con día, se vuelvan más competitivos.
        </Paragraph>

        <ul className={listStyle}>
          {solutions.map(({ imageSrc, text }, key) => (
            <li className={listItemStyle} key={key}>
              <Card imageSrc={imageSrc}>
                {text}
              </Card>
            </li>
          ))}
        </ul>

        <Paragraph center small space='top-xl'>
          Constantemente salimos de la zona de confort que establece
          el mercado, con el único objetivo de que nuestros clientes
          alcancen su máximo potencial. Date la oportunidad de conocernos.
          Te sorprenderás.

        </Paragraph>

        <CallToAction space='top-xl' />

      </Container>
    </section>
  )
}

export default SolutionsSection
