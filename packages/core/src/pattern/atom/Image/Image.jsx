import { imageDefaultProps, imagePropTypes } from './Image.prop'
import styles from './Image.scss'

export function Image({ randomImage }) {
  const { image } = styles

  const { src, alt } = randomImage

  return (
    <div className={image}>
      <img src={src} alt={alt} />
    </div>
  )
}

Image.defaultProps = imageDefaultProps

Image.propTypes = imagePropTypes
