// Hooks
import { useContext } from 'react'
// Utils
import { AppContext } from '../../app/context/AppProvider'
// Components
import Button from "../../core/components/input/Button"

const CallToAction = ({ small, secondary, space }) => {
  const [_appState, setAppState] = useContext(AppContext)

  const openContact = () => {
    setAppState({
      contact: true
    })
  }

  return (
    <Button
      onclick={openContact}
      small={small}
      secondary={secondary}
      space={space}
    >
      Contáctanos
    </Button>
  )
}

export default CallToAction
