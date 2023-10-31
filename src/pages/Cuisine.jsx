import React, { useEffect, useState } from 'react'
//add functionality to the component
import styled from "styled-components";
import {motion} from "framer-motion";
import {Link,useParams} from "react-router-dom"

function Cuisine() {

    const [cusine,setCusine]=useState([]);
    let params=useParams();//params alow us to change name of page and nvigate to that page

    const getCusine=async(name)=>{
        const data=await fetch(`
        https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&cusine=${name}
        `);
        const recipes=await data.json();
        setCusine(recipes.results)
    }

    useEffect(()=>{
        getCusine(params.type)//caling function and passing params.type as a name of page
    },[params.type]);//whenever we update/change params this will make useEffect to run 
  return (
 <Grid>
    {cusine.map((item)=>{
        return(
            <Card key={item.Grid}>
             <img src={item.image} alt=''/>
             <h4>{item.title}</h4>
            </Card>
        )
    })}
 </Grid>
  )
}

//create style for this component
const Grid=styled.div`
display: grid;
grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
grid-template-columns: repeat(4, 1fr);/*determin number of pics per page*/
grid-gap: 2rem;
text-align: center;
`;
const Card=styled.div`
img {
 width: 100%;

border-radius: 2rem;
}
a {
    text-decoration: none
}
h4 {
    text-align: center;
    padding: 1rem;
}
`

export default Cuisine