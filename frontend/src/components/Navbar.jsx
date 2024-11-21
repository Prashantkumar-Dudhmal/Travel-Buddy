import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = ()=>{
    return <div>
        <nav>
            <ul className='left'>
            <Link to="/"><li id='navleft'><b>Travel Buddy</b></li></Link>
            </ul>
            <ul className='right'>
            <Link to="/addTrip"><li>Create Trip</li></Link>
            <Link to="/SignIn"><li>SignIn</li></Link>
            <li >Search</li>
            </ul>
        </nav>
    </div>
}
export default Navbar