import React, { useEffect, useState } from "react";
//import styled-components for styling
import styled from "styled-components";
//import splide slide for carousel
import { Splide, SplideSlide } from "@splidejs/react-splide";
//import CSS style for the slide
import '@splidejs/react-splide/css/skyblue';


function Popular() {
  //we create state variabel so ve can asign data to it
  const [popular, setPopular] = useState([]);

  /* we are importing useEffect becouse we want to run function,load this data once
    soon as posiblel when ever we render this component*/
  useEffect(() => {
    //call function
    getPopular();
  }, []); //runs only once

  /* We have to fetch some data from spoonacoolar.com,to achive that we have to
     create arrow function and pass API key to fetch data 
     We are writing API key ${process.env.REACT_API_KEY} like this becouse real key is located in .env and we dont want to expose it to everyone */

  const getPopular = async () => {
    try {
      const api = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=8`
      );
      const data = await api.json(); //its just json form data
      console.log(data);
      setPopular(data.recipes);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    //React is ascking for unik Id thats why we are writing in div tag <div key={recipe.id}>
    <div>
      
        <Wrapper>
          <h3>Popular Pics</h3>
          <Splide options={{
            perPage: 4,
            arrows: false,
            pagination: false,
            drag:'free',
            gap:'5rem'
          }}>
            {popular.map((recipe) => {
              return (
                <SplideSlide key={recipe.id}>
                  <Card key={recipe.id}>
                   <div> <p>{recipe.title}</p></div>
                    <img src={recipe.image} alt={recipe.title} />
                  </Card>
                </SplideSlide>
              );
            })}
          </Splide>
        </Wrapper>
     
    </div>
  );
}

// Define a styled component called 'Wrapper' with CSS styles
// Set margin
const Wrapper = styled.div`
  margin: 14rem 0rem;
`;

// Define a styled component called 'Card' with CSS styles
// Set minimum height
// Set border-radius
// Set border-radius for images within 'Card'
const Card = styled.div`
  min-height: 25rem;
  border-radius: 2rem;
  overflow: hiden;

  img {
    border-radius: 2rem;
    width: 100%; 
    height: 100%;
    left: 0;
    position: absolute;
    object-fit:cover;   
  }
  p{
    position: absolute;
    z-index:10;
    left: 50%;
    bottom:0%;
    transform: translate(-50%,0%);
    color: white;
    width:100%;
    text-align: center;
    font-weight: 600;
    font-size: 1rem;
    height: 40%;
    display: flex;
    justify-content: center;
    ailgn-items: center;
  }
`;

export default Popular;