import React from 'react'
import Popular from '../components/Popular'
import Veggie from '../components/Veggie'
//Home page is consist from two components Popular,Veggie
function Home() {
  return (
    <div>
        Home
        <Popular/>
        <Veggie/>
    </div>
  )
}

export default Home