import { useEffect, useState } from 'react'
import Show from '../components/show/show'
import { useParams } from 'react-router-dom'
import { Button, Modal } from 'antd'

export default function ShowPage () {
  const [show, setShow] = useState([])
  const { name } = useParams()

  const [isModalOpen, setIsModalOpen] = useState(false)
  const showModal = () => {
    setIsModalOpen(true)
  }
  const handleOk = () => {
    setIsModalOpen(false)
  }
  const handleCancel = () => {
    setIsModalOpen(false)
  }
  const [userName, setUserName] = useState('')
  const [tickets, setTickets] = useState('')

  useEffect(() => {
    // Retrieve user data from local storage if available
    const storedUserName = localStorage.getItem('userName')
    if (storedUserName) {
      setUserName(storedUserName)
    }
  }, [])

  const handleFormSubmit = e => {
    e.preventDefault()

    // Save user data to local storage
    localStorage.setItem('userName', userName)
    localStorage.setItem('noOftickets', tickets)
  }

  useEffect(() => {
    fetch('https://api.tvmaze.com/search/shows?q=all').then(response => {
      response.json().then(data => {
        var a = filterit(data)
        setShow(a)
      })
    })
  })

  //   var filteredShow
  function filterit (data) {
    var filteredShow = data.filter(show => show.show.name === name)
    return filteredShow
  }

  if (show.length > 0) {
    return (
      <>
        {' '}
        <div>
          <Show value={show} />
        </div>
        <div className='footer'>
          <Button className='button' onClick={showModal}>
            Book Ticket here
          </Button>
          <Modal
            title='Book a ticket'
            open={isModalOpen}
            onOk={handleOk}
            onCancel={handleCancel}
          >
            <form className='form' onSubmit={handleFormSubmit}>
              <label>Movie Name:</label>
              <input type='text' value={name} disabled />
              <br />

              <label>Your Name:</label>
              <input
                type='text'
                value={userName}
                onChange={e => setUserName(e.target.value)}
              />
              <br />
              <label>No of tickets</label>

              <input
                type='number'
                value={tickets}
                min={1}
                max={10}
                onChange={e => setTickets(e.target.value)}
              />
              <br />

    

              <button type='submit'>Submit</button>
            </form>
          </Modal>
        </div>
      </>
    )
  }
}
