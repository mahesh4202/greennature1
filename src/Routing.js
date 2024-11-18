import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomeMain from './Main';
import Category1 from './Category1';
import Category2 from './Category2';
import Category3 from './Category3';
import Category4 from './Category4';

const Routing = () => {
  return (
    <Routes>
        <Route path= "/" exact Component={HomeMain} />
        <Route path= "/Category1" exact Component={Category1} />
        <Route path= "/Category2" exact Component={Category2} />
        <Route path= "/Category3" exact Component={Category3} />
        <Route path= "/Category4" exact Component={Category4} />
    </Routes>
  )
}

export default Routing
