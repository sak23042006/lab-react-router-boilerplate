import React from 'react'
import { Link } from 'react-router-dom'
import "../App.css"

const Navbar = () => {
  return (
    <>
        <div className='navbar'>
            <Link style={{textDecoration:"none",color:"white"}} to={"./"}><h1>SAK❤️</h1></Link>
            <div className='links'>
                <Link style={{textDecoration:"none",color:"white"}} to={"./About"}><h3>About</h3></Link>
                <Link style={{textDecoration:"none",color:"white"}} to={"./Contact"}><h3>Contact</h3></Link>
            </div>
        </div>
    </>
  )
}

export default Navbar