import { findAnimalBreedDefaultProps, findAnimalBreedPropTypes } from './FindAnimalBreed.prop'
import styles from './FindAnimalBreed.scss'
import { Input } from '../../atom/Input'
import { Button } from '../../atom/Button'
import { Image } from '../../atom/Image'

export function FindAnimalBreed({ buttonText, randomImage, setRandomImage, searchBreed, setSearchBreed }) {
  const { breed, breedSearch, breedSearchButton, breedShow, breedSearchInput } = styles

  return (
    <div className={breed}>
      <h2>A random image of {randomImage.breed} breed</h2>
      <h4>Type in new breed then press enter or click search button</h4>
      <div className={breedSearch}>
        <Input className={breedSearchInput} randomImage={randomImage} setRandomImage={setRandomImage} setSearchBreed={setSearchBreed} />
        <Button className={breedSearchButton} text={buttonText} setRandomImage={setRandomImage} searchBreed={searchBreed} />
      </div>
      <div className={breedShow}>
        <Image randomImage={randomImage} />
      </div>
    </div>
  )
}

FindAnimalBreed.defaultProps = findAnimalBreedDefaultProps

FindAnimalBreed.propTypes = findAnimalBreedPropTypes
