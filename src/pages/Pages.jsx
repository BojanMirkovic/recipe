import React from 'react'
import Home from './Home'
import { Route,Routes,BrowserRouter } from 'react-router-dom' //we are wrapping all pages with <Routes>
import Cuisine from './Cuisine'
//This component is holding all pages,we are using this component for routing and navigating thru diferent pages
function 
Pages() {
  return (
   
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/cuisine/:type' element={<Cuisine />} />
      
    </Routes>
    
  )
}

export default Pages