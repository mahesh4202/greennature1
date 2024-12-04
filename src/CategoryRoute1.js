import React from 'react'
import './CategoryRoute.css'
import Cat1 from './Cat1.webp'
import { IoMdStar } from "react-icons/io";
import { MdTimer } from "react-icons/md";
import { GoDotFill } from "react-icons/go";
import { TiShoppingCart } from "react-icons/ti";
import { FaRupeeSign } from "react-icons/fa";
import CategoryRouteSearch from './CategoryRouteSearch';
import CategoryRouteOffer1 from './CategoryRouteOffer1.svg'
import CategoryRouteOffer2 from './CategoryRouteOffer2.svg'
import CategoryRouteOffer3 from './CategoryRouteOffer3.svg'
import { Link } from 'react-router-dom'

const CategoryRoute1 = () => {
  return (
    <div className='container'>
        <div class="d-flex mt-3">
            <div style={{ width: "30%" }}>
                <img className='border74' src={Cat1} alt="Snow" style={{ width: "100%" }}/>
            </div>
            <div style={{ width: "70%" , paddingLeft: "30px" , textAlign: "left" }}>
                <div className='borderdown74'>
                    <h1>Succulents</h1>
                    <div className='d-flex' style={{ paddingBottom: "10px" }}>
                        <div style={{ borderRadius: "20px" , color: "white" , backgroundColor: "#05a039" , width: "9%" , height: "40px" }} className='review'><IoMdStar /><span style={{ fontSize: "14px" }}>4.6</span></div>
                        <div className='review' style={{ paddingLeft: "10px" }}>384 Reviews</div>
                        <div className='review' style={{ marginLeft: "10px" , paddingLeft: "5px" , paddingRight: "10px" , borderRadius: "10px" , color: "white" , backgroundColor: "#229ef0" , width: "auto" , height: "40px" }}><MdTimer /><span style={{ fontSize: "14px" }}>30-60 Min delivery</span></div>
                    </div>
                </div>
                <div style={{ marginTop: "10px" }}>
                    <p><span style={{ fontSize: "20px" , alignItems: "center" , textAlign: "left" }}>₹835</span><span className='padding74' style={{ color: "gray" }}><s>₹1749</s></span><span className='padding74' style={{ color: "orangered" , fontWeight: "900"}}>47% OFF</span></p>
                </div>
                <div style={{ backgroundColor: "#daffe6" , padding: "10px 5px"}}>
                    <h4 style={{ fontSize: "12px"}}>Check Delivery Availability</h4>
                    <CategoryRouteSearch />
                </div>
                <div style={{ paddingTop: "10px" }}>
                    <h4>Offers Available</h4>
                    <div>
                        <div className='d-flex borderall74' style={{ padding: "15px" }}>
                            <div className='review' style={{ width: "10%" }}>
                                <img style={{ padding: "0px 10px" , width: "130%" }} src={CategoryRouteOffer1} alt='CategoryRoute' />
                            </div>
                            <div style={{ width: "70%" , textAlign: "left" , display: "flex" , alignItems: "center" }}>
                                Assured cashback upto ₹100 using Paytm UPI Lite/ UPI
                            </div>
                            <button className='review button74' style={{ width: "20%" }}>
                                View T & C
                            </button>
                        </div>
                        <div className='d-flex borderall74' style={{ padding: "15px" }}>
                            <div className='review' style={{ width: "10%" }}>
                                <img style={{ padding: "0px 10px" , width: "130%" }} src={CategoryRouteOffer2} alt='CategoryRoute' />
                            </div>
                            <div style={{ width: "70%" , textAlign: "left" , display: "flex" , alignItems: "center" }}>
                                Assured cashback upto ₹150 using Phonepe Wallet
                            </div>
                            <button className='review button74' style={{ width: "20%" }}>
                                View T & C
                            </button>
                        </div>
                        <div className='d-flex borderall74' style={{ padding: "15px" }}>
                            <div className='review' style={{ width: "10%" }}>
                                <img style={{ padding: "0px 10px" , width: "130%" }} src={CategoryRouteOffer3} alt='CategoryRoute' />
                            </div>
                            <div style={{ width: "70%" , textAlign: "left" , display: "flex" , alignItems: "center" }}>
                                Upto 5% Cashback through MobiKwik UPI upto Rs.200
                            </div>
                            <button className='review button74' style={{ width: "20%" }}>
                                View T & C
                            </button>
                        </div>
                    </div>
                </div>
                <div className='borderall74'>
                    <div style={{ backgroundColor: "#daffe6" , borderTopLeftRadius: "10px" , borderTopRightRadius: "10px" , paddingTop: "10px" , paddingLeft: "10px" , height: "50px"}}>
                        <h3>Product details</h3>
                    </div>
                    <div style={{ paddingTop: "10px" }}>
                        <p style={{ paddingLeft: "10px" }}><GoDotFill /><span style={{ paddingLeft: "10px" }}>Plant Type: Agave</span></p>
                        <p style={{ paddingLeft: "10px" }}><GoDotFill /><span style={{ paddingLeft: "10px" }}>Plant Height: 6 Inches Approx</span></p>
                        <p style={{ paddingLeft: "10px" }}><GoDotFill /><span style={{ paddingLeft: "10px" }}>Plant Location: Indoors</span></p>
                    </div>
                    <div style={{ backgroundColor: "#daffe6" , paddingTop: "10px" , paddingLeft: "10px" , height: "50px"}}>
                        <h3>Description</h3>
                    </div>
                    <div style={{ paddingTop: "10px" }}>
                        <p style={{ paddingLeft: "10px" }}><span style={{ paddingLeft: "10px" }}>Embrace nature's allure and elevate your gifting and home decor with this remarkable Plant. It's a masterpiece that captures attention. This succulent brings an air of sophistication to any setting, making it an impeccable gift choice. Its low-maintenance nature ensures it thrives effortlessly, adding a touch of green elegance to windowsills, desks, or shelves. An embodiment of nature's beauty, this Plant is not just a gift; it's a statement piece that transforms spaces into botanical sanctuaries.</span></p>
                    </div>
                    <div style={{ backgroundColor: "#daffe6" , paddingTop: "10px" , paddingLeft: "10px" , height: "50px"}}>
                        <h3>Caring Tips</h3>
                    </div>
                    <div style={{ paddingTop: "10px" }}>
                        <p style={{ paddingLeft: "10px" }}><GoDotFill /><span style={{ paddingLeft: "10px" }}>It flourishes with high humidity.</span></p>
                        <p style={{ paddingLeft: "10px" }}><GoDotFill /><span style={{ paddingLeft: "10px" }}>Add a liquid fertilizer on the monthly basis.</span></p>
                        <p style={{ paddingLeft: "10px" }}><GoDotFill /><span style={{ paddingLeft: "10px" }}>Do not over-water these plants. Watering every 7 10 days should be enough.</span></p>
                        <p style={{ paddingLeft: "10px" }}><GoDotFill /><span style={{ paddingLeft: "10px" }}>The image is indicative in nature. As plants are natural products, shape and size may be of varying scale.</span></p>
                        <p style={{ paddingLeft: "10px" }}><GoDotFill /><span style={{ paddingLeft: "10px" }}>For flowering plants, the flower can be fully bloomed, semi bloomed or in bud stage.</span></p>
                        <p style={{ paddingLeft: "10px" }}><GoDotFill /><span style={{ paddingLeft: "10px" }}>It can be delivered the same day as order placement.</span></p>
                    </div>
                </div>
                <div>
                    <div>
                        <button class="button94 review">Add to Cart<TiShoppingCart style={{ fontSize: "20px" , marginLeft: "5px" , marginBottom: "3px" }} /></button>
                    </div>
                    <div>
                        <a>
                            <Link to='/CateSuccess'style={{ textDecoration: "none" , textAlign: "center" }} className='button94 review'>Buy now<FaRupeeSign style={{ fontSize: "20px" , marginLeft: "5px" , marginBottom: "3px" }} /></Link>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CategoryRoute1