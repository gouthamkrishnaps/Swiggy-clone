import React from 'react'
import './Banner.css'
import img1 from './images/banner1.webp'
import img2 from './images/banner2.webp'
import img3 from './images/banner3.webp'
import img4 from './images/banner4.webp'
import img5 from './images/banner5.webp'
import img6 from './images/banner6.webp'

function AddBanner() {

  return (
    <div>
      <div style={{display:'flex',overflowX:'scroll',gap:'10px'}} className="banners ">
        <img style={{width:'400px'}} src={img1} alt="no image" />
        <img style={{width:'400px'}} src={img2} alt="no image" />
        <img style={{width:'400px'}} src={img3} alt="no image" />
        <img style={{width:'400px'}} src={img4} alt="no image" />
        <img style={{width:'400px'}} src={img5} alt="no image" />
        <img style={{width:'400px'}} src={img6} alt="no image" />
      </div>
    </div>
  )
}

export default AddBanner