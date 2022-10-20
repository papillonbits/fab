import { buttonDefaultProps, buttonPropTypes } from './Button.prop'
import styles from './Button.scss'

export function Button({ text, setRandomImage, searchBreed }) {
  const { button } = styles

  function onClick() {
    setRandomImage(searchBreed)
  }

  return (
    <button className={button} onClick={onClick} type="button">
      {text}
    </button>
  )
}

Button.defaultProps = buttonDefaultProps

Button.propTypes = buttonPropTypes
