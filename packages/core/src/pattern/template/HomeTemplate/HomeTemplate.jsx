import { homeTemplateDefaultProps, homeTemplatePropTypes } from './HomeTemplate.prop'
import { FindDogBreed } from '../../organism/FindDogBreed'
import { FindCatBreed } from '../../organism/FindCatBreed'
import styles from './HomeTemplate.scss'

export function HomeTemplate() {
  const { homeTemplate } = styles

  return (
    <div className={homeTemplate}>
      <FindDogBreed />
      <FindCatBreed />
    </div>
  )
}

HomeTemplate.defaultProps = homeTemplateDefaultProps

HomeTemplate.propTypes = homeTemplatePropTypes
