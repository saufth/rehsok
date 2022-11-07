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
    text: 'Consultoria & asesoria fiscal',
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

        <Heading>
          Nuestras soluciones
        </Heading>

        <Paragraph center small space='top-xs'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus quasi
          enim fuga optio tenetur possimus sit harum.
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

        <CallToAction space='top-xl' />

      </Container>
    </section>
  )
}

export default SolutionsSection
