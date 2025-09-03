"use client"
import React from 'react'
import { useState } from 'react';

const Navbar = () => {

    const [selectedItem, setSelectedItem] = useState("Home");

    const handleItemClick = (id) => {
        setSelectedItem(id);
    };
    return (
        <nav className="z-50 glass-nav fixed  top-10 flex justify-self-center">
            <div className="glass-filter"></div>
            <div className="glass-overlay"></div>
            <div className="glass-specular"></div>
            <div className="glass-content">
                <ul className="nav-list flex justify-between">
                    {/* <li><a href="#" className="nav-item  ">Home</a></li> */}
                    <li><a href="/" className={`nav-item ${selectedItem === "Home" ? 'active' : ''}`}
                        onClick={() => {
                            handleItemClick("Home");
                        }}>Home</a></li>
                    <li><a href="/About" className={`nav-item ${selectedItem === "About" ? 'active' : ''}`}
                        onClick={() => {
                            handleItemClick("About");
                        }}>About</a></li>
                    <li><a href="/Contact" className={`nav-item ${selectedItem === "Contact" ? 'active' : ''}`}
                        onClick={() => {
                            handleItemClick("Contact");
                        }}>Contact</a></li>
                    <li><a href="/Services" className={`nav-item ${selectedItem === "Services" ? 'active' : ''}`}
                        onClick={() => {
                            handleItemClick("Services");
                        }}>Services</a></li>
                    {/* <li><a href="#" className="nav-item">About</a></li>
            <li><a href="#" className="nav-item">Services</a></li>
            <li><a href="#" className="nav-item">Contact</a></li> */}
                    {/* <li><a href="#" className="nav-item">Contact</a></li> */}
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
