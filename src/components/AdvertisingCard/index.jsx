import { Link } from 'react-router-dom'

import './styles.scss'

const AdvertisingCard = ({ data }) => {
  return (
    <div className='advertisingCard'>
      <Link to={data.linkPath} target='_blank' className='advertisingCard__link'>
        <picture>
          <source srcSet={data.imgSmall} media='(max-width: 450px)' />
          <img className='advertisingCard__img' src={data.img} alt={data.alt} />
        </picture>
      </Link>
    </div>
  )
}

export default AdvertisingCard
