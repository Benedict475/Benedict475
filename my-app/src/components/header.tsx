// Importing React for building the component and Link from react-router-dom for navigation.
import React from "react";
import { Link } from "react-router-dom";

// Defining the Header functional component that renders the navigation bar.
export default function Header() {

    return(
        // Main navigation bar container with accessible attributes.
        <nav className="navbar" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                {/* Brand logo and link to an external website */}
                <a className="navbar-item" href="https://bulma.io">
                    {/* Inline SVG logo illustration */}
                    <svg width="640" height="160" viewBox="0 0 640 160" fill="none" xmlns="http://www.w3.org/2000/svg">
                        {/* SVG path definitions for logo design */}
                        <path fill-rule="evenodd" clip-rule="evenodd" d="..." fill="black" className="bd-svg-black" />
                        <path fill-rule="evenodd" clip-rule="evenodd" d="..." fill="#00D1B2" />
                    </svg>
                </a>

                {/* Navbar burger menu for toggling navigation on small screens */}
                <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                    {/* Representing burger lines */}
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>

            {/* Main navigation menu */}
            <div id="navbarBasicExample" className="navbar-menu">
                {/* Left-aligned links */}
                <div className="navbar-start">
                    {/* Navigation links using react-router-dom for SPA routing */}
                    <Link to='/' className='navbar-item'>Home</Link>
                    <Link to='/movies' className='navbar-item'>Movies</Link>
                    <Link to='/tvshows' className='navbar-item'>Tvshows</Link>

                    {/* Dropdown menu for additional options */}
                    <div className="navbar-item has-dropdown is-hoverable">
                        <a className="navbar-link">
                            More
                        </a>
                        <div className="navbar-dropdown">
                            {/* Additional navigation links */}
                            <Link to='/movies' className='navbar-item'>Movie</Link>
                            <a className="navbar-item is-selected">
                                Jobs
                            </a>
                            <a className="navbar-item">
                                Contact
                            </a>
                            {/* Divider and extra link */}
                            <hr className="navbar-divider"/>
                            <a className="navbar-item">
                                Report an issue
                            </a>
                        </div>
                    </div>
                </div>

                {/* Right-aligned buttons for user actions */}
                <div className="navbar-end">
                    <div className="navbar-item">
                        <div className="buttons">
                            <a className="button is-primary">
                                <strong>Sign up</strong>
                            </a>
                            <a className="button is-light">
                                Log in
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}

