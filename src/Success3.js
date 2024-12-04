import React from 'react'
import Delivery from '../src/Component/Assets/Delivery team 1.jpg'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Cat1 from './Cat1.webp'
import { IoHome } from "react-icons/io5";
import { RiRoadMapFill } from "react-icons/ri";

const Success1 = () => {
  return (
    <Container className='d-flex mt-3'>
      <div style={{ width: "40%" }}>
        <img className='image74' src={ Delivery } />
      </div>
      <div className='mb-3' style={{ width: "60%" }}>
        <div className='d-flex'>
          <Link to='/Category1' style={{ width: "15%" }}>
            <img style={{ width: "100%" }} src={Cat1}></img>
          </Link>
        <div style={{ width: "85%" }}>
          <h1>Order Placed</h1>
          <p>Your order <span><Link>#971345</Link> was placed successfully</span></p>
        </div>
        </div>
        <div>
          <div className='d-flex mb-3' style={{ borderBottom: "2px solid rgb(223, 223, 223)" }}>
            <div style={{ width: "33.33%" , textAlign: "center" }}>
              <div>
                <p style={{ fontSize: "14px" , color: "gray" , margin: "none"}}>Product Name</p>
              </div>
              <div>
                <p style={{ fontSize: "18px" , fontWeight: "800" , color: "black"}}>Flowering Plant(x1)</p>
              </div>
            </div>
            <div style={{ width: "33.33%" , textAlign: "center" }}>
              <div>
                <p style={{ fontSize: "14px" , color: "gray" , margin: "none"}}>Payment Mode</p>
              </div>
              <div>
                <p style={{ fontSize: "18px" , fontWeight: "800" , color: "black"}}>Credit Card</p>
              </div>
            </div>
            <div style={{ width: "33.33%" , textAlign: "center" }}>
              <div>
                <p style={{ fontSize: "14px" , color: "gray" , margin: "none"}}>Delivered by</p>
              </div>
              <div>
                <p style={{ fontSize: "18px" , fontWeight: "800" , color: "black"}}>23/11/2024</p>
              </div>
            </div>
          </div>
            <div className='mb-3' style={{ width: "100%" , textAlign: "Left" , borderBottom: "2px solid rgb(223, 223, 223)" }}>
              <div>
                <p style={{ fontSize: "14px" , color: "gray" , margin: "none"}}>Delivery Address</p>
              </div>
              <div>
                <p style={{ fontSize: "18px" , fontWeight: "800" , color: "black"}}>34-5/2, Road No-3, Crossandra Enclave, Kakinada</p>
              </div>
            </div>
        </div>
        <div className='d-flex'>
          <div style={{ width: "45%" , marginRight: "60px"}} >
            <a>
              <Link to='/'style={{ textDecoration: "none" , textAlign: "center" }} className='button94 review'>Home<IoHome style={{ fontSize: "16px" , marginLeft: "5px" , marginBottom: "5px" }} /></Link>
            </a>
          </div>
          <div style={{ width: "45%"}} >
            <button class="button94 review">Track Order<RiRoadMapFill style={{ fontSize: "16px" , marginLeft: "5px" , marginBottom: "3px" }} /></button>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default Success1