import React from 'react'
import Pagination from '../components/Pagination'
import EventCategory from '../components/EventCategory'
import Cities from '../components/Cities'

const HomePage = () => {
  return (
    <div className='h-full w-full'>
      <Pagination/>
      <EventCategory/>
      <Cities/>
    </div>
  )
}

export default HomePage