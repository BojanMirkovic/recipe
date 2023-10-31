//Go to react icons and serch for what you need,icons you want to import
import {FaPizzaSlice, FaHamburger} from 'react-icons/fa'
import {GiNoodles,GiChopsticks} from 'react-icons/gi'
import styled from 'styled-components'
import {NavLink} from 'react-router-dom'

import React from 'react'
//create 3 <NavLink> for each icon. In React we are using NavLink instead of <a> to create links,remedar to import NavLink 
function Category() {
  return (
 <IconsStyled>
       <NavLink to={'/cusine/Italian'}>
            <FaPizzaSlice/>
            <h4>Italian</h4>
        </NavLink>
        <NavLink to={'/cusine/American'}>
            <FaHamburger/>
            <h4>American</h4>
        </NavLink>
        <NavLink to={'/cusine/Thai'}>
            <GiNoodles/>
            <h4>Thai</h4>
        </NavLink>
        <NavLink to={'/cusine/Japanese'}>
            <GiChopsticks/>
            <h4>Japanese</h4>
        </NavLink>
 </IconsStyled>
  )
}
//we are styling our icons
//  
const IconsStyled=styled.div`
display: flex; /* arange elements in one line */
justify-content: center;/*seting icons in the centar*/
margin: 2rem 0rem;

`;

export default Category