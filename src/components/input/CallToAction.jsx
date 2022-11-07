// Components
import Button from "../../core/components/input/Button"

const callToAction = () => {
  alert('Now in contact!')
}

const CallToAction = ({ small, secondary, space }) => {
  return (
    <Button
      onclick={callToAction}
      small={small}
      secondary={secondary}
      space={space}
    >
      Contactanos
    </Button>
  )
}

export default CallToAction
