import './card.css'
import { Link } from 'react-router-dom'

export default function Card ({ value }) {
  if (!value || !value.show || !value.show.image || !value.show.image.medium) {
    return <></>
  }

  return (
    <div className='card-container'>
      <div className='card'>
        <img className='image' src={value.show.image.medium} alt='movie' />
        <div className='info'>
          <div>
            <p style={{ margin: '0px' }}>{value.show.name}</p>
            <br />
            {value.show.language} | {value.show.genres[0]}
            <br />
            Average Rating: {value.show.rating.average}
          </div>
          <div>
            <Link className='link' to={`/show/${value.show.name}`}>view more {'>'}</Link>
          </div>
        </div>
      </div>
    </div>
  )
}
