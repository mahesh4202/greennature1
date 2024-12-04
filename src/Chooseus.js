import React from 'react'
import Chooseuss1 from "../src/Component/Assets/Chooseus1.jpg"
import Chooseuss2 from "../src/Component/Assets/Chooseus2.jpg"
import Chooseuss3 from "../src/Component/Assets/Chooseus3.jpg"
import WhyChooseus1 from "./Component/Assets/WhyChooseus1.jpg"
import WhyChooseus2 from "./Component/Assets/WhyChooseus2.jpg"
import WhyChooseus3 from "./Component/Assets/WhyChooseus3.jpg"

const Chooseus = () => {
  return (
    <div>
      <div className='d-flex' style={{ backgroundColor: "#8effb4" }}>
        <div style={{ width: "30%" }}>
          <img style={{ width: "100%" , height: "auto"}} src={Chooseuss1} alt='Chooseus'/>
        </div>
        <div style={{ width: "70%" }} className='middle'>
          <div>
            <h5 style={{ fontSize: "22px" }} classname='my-3'><span className="firstletter1" style={{ fontSize: "26px" }}>W</span>hy choose us?</h5>
            <div className='mt-3'>
              <h6 style={{ fontSize: "20px" , fontWeight: "700" }}>Hand planted</h6>
              <div className='d-flex'>
                <div>
                  <img src={WhyChooseus1}/>
                </div>
                <div>
                  <p style={{ fontSize: "18px" }} className='middle' >We decided to put together a plant guide, something for you.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='d-flex' style={{ backgroundColor: "#8effb4" }}>
        <div style={{ width: "70%" }} className='middle'>
          <div>
            <h5 style={{ fontSize: "22px" }} classname='my-3'><span className="firstletter1" style={{ fontSize: "26px" }}>W</span>hy choose us?</h5>
            <div className='mt-3'>
              <h6 style={{ fontSize: "20px" , fontWeight: "700" }}>Natural Sunlight</h6>
              <div className='d-flex'>
                <div>
                  <img src={WhyChooseus2}/>
                </div>
                <div>
                  <p style={{ fontSize: "18px" }} className='middle' >Through photosynthesis, plants convert light energy into chemical energy</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={{ width: "30%" }}>
          <img style={{ width: "100%" , height: "auto"}} src={Chooseuss2} alt='Chooseus'/>
        </div>
      </div>
      <div className='d-flex' style={{ backgroundColor: "#8effb4" }}>
        <div style={{ width: "30%" }}>
          <img style={{ width: "100%" , height: "auto"}} src={Chooseuss3} alt='Chooseus'/>
        </div>
        <div style={{ width: "70%" }} className='middle'>
          <div>
            <h5 style={{ fontSize: "22px" }} classname='my-3'><span className="firstletter1" style={{ fontSize: "26px" }}>W</span>hy choose us?</h5>
            <div className='mt-3'>
              <h6 style={{ fontSize: "20px" , fontWeight: "700" }}>Clean air</h6>
              <div className='d-flex'>
                <div>
                  <img src={WhyChooseus3}/>
                </div>
                <div>
                  <p style={{ fontSize: "18px" }} className='middle' >Plants absorb carbon dioxide, water, and light to produce oxygen as a byproduct.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Chooseus;