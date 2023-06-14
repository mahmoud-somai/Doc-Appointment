import React from 'react'
import './Book.css'
import { Link } from 'react-router-dom'

const Book = () => {
  return (
    <div class="book_myCard">
    <div class="book_innerCard">
        <div class="book_frontSide">
            <p class="book_title">Need A Doctor</p>
        </div>
        <div class="book_backSide">
          <Link to={"/user/booking"}>
            <p class="book_title">Book Now</p>
            </Link>
        </div>
    </div>
</div>
  )
}

export default Book