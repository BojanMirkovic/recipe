import React from 'react'
import Popular from '../components/Popular'
import styled from 'styled-components'
import Veggie from '../components/Veggie'
//Home page is consist from two components Popular,Veggie
function Home() {
  return (
    <Wrapper>
      
        <Veggie/>
        <Popular/>
    </Wrapper>
  )
}
const Wrapper = styled.div`

  width: 100%;
  
`;

export default Home