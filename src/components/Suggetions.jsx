import React from 'react'


function Suggetions() {
  return (
    <div>
        <div className='d-flex justify-content-between align-items-center fs-5 mb-4'>
            <div>
                <button style={{width:'250px'}} className='btn border-secondary p-3'>Chinese Restaurent Near Me</button>
            </div>
            <div>
                <button style={{width:'250px'}} className='btn border-secondary p-3'>Korean Restaurent Near Me</button>
            </div>
            <div>
                <button style={{width:'250px'}} className='btn border-secondary p-3'>South Indian Restaurent Near Me</button>
            </div>
            <div>
                <button style={{width:'250px'}} className='btn border-secondary p-3'>India Restaurent Near Me</button>
            </div>
            <div>
                <button style={{width:'250px'}} className='btn border-secondary p-3'>Kerala Restaurent Near Me</button>
            </div>
        </div>
    </div>
  )
}

export default Suggetions