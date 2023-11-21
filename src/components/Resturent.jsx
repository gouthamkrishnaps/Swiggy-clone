import React from 'react'
import { Button, Card, Col, Row } from 'react-bootstrap';
import useFetch from '../hooks/useFetch';
import './Banner.css'

function Resturent() {
    /* fetch('https://www.themealdb.com/api/json/v1/1/categories.php').then((response)=>{
        console.log(response.json().then((products)=>{
            console.log(products);
            
        }));
    }).catch((error)=>{
        console.log(error);
    }) */
    const data = useFetch('https://www.themealdb.com/api/json/v1/1/categories.php')
    //const food = data.categories
    console.log(data);
  return (
    <div>
        <div style={{display:'flex',overflowX:'scroll',gap:'10px'}} className=' d-flex justify-content-center align-items-center'>

        {   data.length>0?
            data.map((item)=>(
                
                        <div>
                            <img src={item.strCategoryThumb} alt="" style={{width:'200px'}}/>
                            <h6 className='text-center'>{item.strCategory}</h6>
                        
                    </div>
                
           
             )):<p>hai</p>
           
        }
        </div>
        {/* <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={item.strCategoryThumb} />
                <Card.Body>
                    <Card.Title>{item.strCategory}</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
                </Card> */}
        
    </div>
  )
}

export default Resturent