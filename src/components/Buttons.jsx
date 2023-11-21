import React from 'react'

function Buttons() {
  return (
    <div>
        <div className="buttons d-flex gap-4 p-2">
            <button className='sort-btn btn rounded-pill'>Filter <i class="fa-solid fa-filter"></i></button>
            <button className='sort-btn btn rounded-pill'>Sort By <i class="fa-solid fa-angle-up fa-rotate-180"></i></button>
            <button className='sort-btn btn rounded-pill'>Fast Delivery</button>
            <button className='sort-btn btn rounded-pill'>New on Swiggy</button>
            <button className='sort-btn btn rounded-pill'>Ratings 4.0+</button>
            <button className='sort-btn btn rounded-pill'>Pure Veg</button>
            <button className='sort-btn btn rounded-pill'>Rs.300-Rs.600</button>
            <button className='sort-btn btn rounded-pill'>Less than Rs.300</button>

        </div>
    </div>
  )
}

export default Buttons