import React, { useState } from 'react';
import './navbar.css';
import { MdOutlineTravelExplore } from 'react-icons/md';
import { IoIosCloseCircle } from 'react-icons/io';
import { TbGridDots } from 'react-icons/tb';
import { Link } from 'react-router-dom'; // Importing Link from react-router-dom

const Navbar = () => {
  const [active, setActive] = useState('navBar');

  // function to toggle navBar
  const showNav = () => {
    setActive('navBar activeNavbar');
  };

  // function to remove navBar
  const removeNavbar = () => {
    setActive('navBar');
  };

  return (
    <section className="navBarSection">
      <header className="header flex">
        <div className="logoDiv">
          <Link to="/" className="logo flex"> {/* Replacing <a> with <Link> */}
            <h1>
              <MdOutlineTravelExplore className="icon" /> AjTravels
            </h1>
          </Link>
        </div>

        <div className={active}>
          <ul className="navLists flex">
            <li className="navItem">
              <Link to="/" className="navLink">Home</Link> {/* Replacing <a> with <Link> */}
            </li>

            <li className="navItem">
              <Link to="/packages" className="navLink">Packages</Link> {/* Replacing <a> with <Link> */}
            </li>

            <li className="navItem">
              <Link to="/shop" className="navLink">Shop</Link> {/* Replacing <a> with <Link> */}
            </li>

            <li className="navItem">
              <Link to="/about" className="navLink">About</Link> {/* Replacing <a> with <Link> */}
            </li>

            <li className="navItem">
              <Link to="/pages" className="navLink">Pages</Link> {/* Replacing <a> with <Link> */}
            </li>

            <li className="navItem">
              <Link to="/news" className="navLink">News</Link> {/* Replacing <a> with <Link> */}
            </li>

            <li className="navItem">
              <Link to="/contact" className="navLink">Contact</Link> {/* Replacing <a> with <Link> */}
            </li>

            <li className="navItem">
              <Link to="/book-now" className="btn">BOOK NOW</Link> {/* Replacing <a> with <Link> */}
            </li>
          </ul>

          <div onClick={removeNavbar} className="closeNavbar">
            <IoIosCloseCircle className="icon" />
          </div>
        </div>

        <div onClick={showNav} className="toggleNavbar">
          <TbGridDots className="icon" />
        </div>
      </header>
    </section>
  );
};

export default Navbar;
