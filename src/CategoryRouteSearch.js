import React from 'react'
import './CategoryRouteSearch.css'
import { MdMyLocation } from "react-icons/md";

const CategoryRouteSearch = () => {
  return (
    <div>
        <div class="container-input74">
            <input type="text" placeholder="Enter Pincode" name="text" class="input74" />
                <MdMyLocation style={{ fontSize: "24px" }}/>
        </div>
    </div>
  )
}

export default CategoryRouteSearch