import { useEffect, useState } from 'react'
import Card from '../components/card/card'

export default function Home () {
  const [shows, setShows] = useState([])

  useEffect(() => {
    fetch('https://api.tvmaze.com/search/shows?q=all').then(response => {
      response.json().then(data => {
        setShows(data)
      })
    })
  }, [])

  return (
    <>
    <div className='blur'></div>
      <div className='home'>
        {shows.map(show => {
          return <Card key={show.show.id} value={show} />
        })}
      </div>
      <div className='footer'></div>
    <div className='blur2'></div>

    </>
  )
}
