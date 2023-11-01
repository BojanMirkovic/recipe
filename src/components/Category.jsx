//Go to react icons and serch for what you need,icons you want to import
import { FaPizzaSlice, FaHamburger } from "react-icons/fa";
import { GiNoodles, GiChopsticks } from "react-icons/gi";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

import React from "react";
//create 3 <NavLink> for each icon. In React we are using NavLink instead of <a> to create links,remedar to import NavLink
//down below we are styled NavLink
function Category() {
  return (
    <IconsStyled>
      <StyledLink to={"/cuisine/Italian"}>
        <FaPizzaSlice />
        <h4>Italian</h4>
      </StyledLink>
      <StyledLink to={"/cuisine/American"}>
        <FaHamburger />
        <h4>American</h4>
      </StyledLink>
      <StyledLink to={"/cuisine/Thai"}>
        <GiNoodles />
        <h4>Thai</h4>
      </StyledLink>
      <StyledLink to={"/cuisine/Japanese"}>
        <GiChopsticks />
        <h4>Japanese</h4>
      </StyledLink>
    </IconsStyled>
  );
}
//we are styling our icons
//
const IconsStyled = styled.div`
  display: flex; /* arange elements in one line */
  justify-content: center; /*seting icons in the centar*/
  margin: 2rem 0rem;
  align-items: center;
`;

const StyledLink = styled(NavLink)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  margin-right: 2rem;
  text-decoration: none;
  background: linear-gradient(35deg, #494949, #313131);
  width: 6rem;
  height: 6rem;
  cursor: pointer;
  transform: scale(0.8);

  h4 {
    color: white;
    font-size: 0.8rem;
  }

  svg {
    color: white;
    font-size: 1.5rem;
  }
  /*we want to make icons active so that when we click on them they change color*/
  &.active {
    background: linear-gradient(to right, #f27121, #e94057);
    svg {
      color: white;
    }
    h4 {
      color: white;
    }
  }
`;

export default Category;
