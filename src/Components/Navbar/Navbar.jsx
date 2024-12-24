import React, { useState } from 'react'
import './navbar.css'
import { MdOutlineTravelExplore } from 'react-icons/md'
import { IoIosCloseCircle } from 'react-icons/io'
import { TbGridDots } from "react-icons/tb";
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [active, setActive] = useState('navBar')

  // function to toggle navBar
  const showNav = () => {
    setActive('navBar  activeNavbar')
  }

  // function to remove navBar
  const removeNavbar = () => {
    setActive('navBar  ')
  }

  return (
    <section className="navBarSection">
      <header className="header flex">

        <div className="logoDiv">
          <Link to="#" className="logo flex">
            <h1> <MdOutlineTravelExplore className="icon" /> AjTravels</h1>
          </Link>
        </div>

        <div className={active}>
          <ul className="navLists flex">

            <li className="navItem">
              <Link to="#" className="navLink">Home</Link>
            </li>

            <li className="navItem">
              <Link to="#" className="navLink">Packages</Link>
            </li>

            <li className="navItem">
              <Link to="#" className="navLink">Shop</Link>
            </li>

            <li className="navItem">
              <Link to="#" className="navLink">About</Link>
            </li>

            <li className="navItem">
              <Link to="#" className="navLink">Pages</Link>
            </li>

            <li className="navItem">
              <Link to="#" className="navLink">News</Link>
            </li>

            <li className="navItem">
              <Link to="#" className="navLink">Contact</Link>
            </li>

            <button className='btn'>
              <Link to="#"> BOOK NOW </Link>
            </button>
          </ul>

          <div onClick={removeNavbar} className="closeNavbar">
            <IoIosCloseCircle className="icon" />
          </div>
        </div>

        <div onClick={showNav}
          className="toggleNavbar">
          <TbGridDots className='icon' />

        </div>

      </header>
    </section>
  )
}

export default Navbar