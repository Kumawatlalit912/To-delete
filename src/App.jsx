import React from 'react'
import Header from './compo/nav/Header'
// import Header from './compo/nav/Header'
import Testing from './compo/testing'
// import SearchBar from './compo/search'

const App = () => {
  return (
    <div style={{backgroundImage:"url('https://ik.imagekit.io/vatxkgeso/myGallery/backgrounds/bg3.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1676964061832')",backgroundPosition:'center',backgroundRepeat:'no-repeat',backgroundSize:'cover',height:'100vh',width:'100vw'}}>
    <Header />
    <Testing />
    
    </div>
  )
}

export default App