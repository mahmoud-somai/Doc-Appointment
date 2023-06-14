import React from 'react'
import wallpaper from "../../assets/abstract_532.jpg"
import './Home.css'
import Book from '../../components/Book/Book';


const Home = () => {
      
  return (
    <> 
      <div class="parent">
        <div class="div1"> 
          <img src={wallpaper}/> 
        </div>  
        <div class="div2">
          <Book/> 
        </div>
      </div>
    </>
  )
}

export default Home