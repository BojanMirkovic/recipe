import React, { useEffect, useState } from "react";
//import styled-components for styling
import styled from "styled-components";
//import splide slide for carousel
import { Splide, SplideSlide } from "@splidejs/react-splide";
//import CSS style for the slide
import "@splidejs/react-splide/css/skyblue";

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
    //we are checking if there is something in local sorage and if its nothing we are going to use state variabel to set it
    const check = localStorage.getItem("popular");
    //if there is an item (JSON.parse(check)) we are going to set item in setPopular
    //else we are going to fetch data from API,save in localStorige and setPopular
    if (check) {
      setPopular(JSON.parse(check));
    } else {
      try {
        const api = await fetch(
          `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=8`
        );
        const data = await api.json(); //its just json form data

        console.log(data);
        localStorage.setItem("popular", JSON.stringify(data.recipes)); //localStorige can save only strings thats why we have to strigefy our data.recepies
        setPopular(data.recipes);
        console.log(data.recipes);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
  };

  return (
    //React is ascking for unik Id thats why we are writing in div tag <div key={recipe.id}>
    <div>
      <Wrapper>
        <h3>Popular Pics</h3>
        <Splide
          options={{
            perPage: 4,
            arrows: false,
            pagination: false,
            drag: "free",
            gap: "5rem",
          }}
        >
          {popular.map((recipe) => {
            return (
              <SplideSlide key={recipe.id}>
                <Card key={recipe.id}>
                  <p>{recipe.title}</p>
                  <img src={recipe.image} alt={recipe.title} />
                  <Gredient />
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
  margin: -13rem 0rem;
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
    height: 50%;
    left: 0;
    position: absolute;
    object-fit: cover;
  }
  p {
    position: absolute;
    z-index: 10;
    left: 50%;
    bottom: 0%;
    transform: translate(-50%, 0%);
    color: white;
    width: 100%;
    text-align: center;
    font-weight: 600;
    font-size: 1rem;
    height: 70%;
    display: flex;
    justify-content: center;
    ailgn-items: center;
  }
`;
const Gredient = styled.div`
 z-index: 3;
 position: absolute;
 width:100%
 height:100%
 background: linear-gradient(rgba(0,0,0,0),rgba(0,0,0,0.5));
`;

export default Popular;
