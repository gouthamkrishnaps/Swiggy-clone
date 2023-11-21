import React from 'react'
import AddBanner from '../components/AddBanner'
import Category from '../components/Category'
import Resturent from '../components/Resturent'
import Buttons from '../components/Buttons'
import Suggetions from '../components/Suggetions'

function Home() {
  return (
    <div className='container mt-4'>
      <h5>Best offers for you</h5>
      <AddBanner/>
      <h5 className='mt-2'>Hey you, what's on your mind?</h5>
      <Resturent/>
      <hr />
      <h5 className='fw-bolder'>Top restaurant chains in Kochi</h5>
      <Buttons/>
      <Category/>
      <Category/>
      <h5>Best places to eat across cities</h5>
      <Suggetions/>
      <Suggetions/>
      <Suggetions/>
      <h5>Best places near me</h5>
      <Suggetions/>
      <Suggetions/>
      <Suggetions/>
    </div>
  )
}

export default Home