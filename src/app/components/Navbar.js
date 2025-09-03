"use client"
import React from 'react'
import { useState } from 'react';
import Link from 'next/link';

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
                    {/* <li><Link href="#" className="nav-item  ">Home</Link></li> */}
                    <li><Link href="/" className={`nav-item ${selectedItem === "Home" ? 'active' : ''}`}
                        onClick={() => {
                            handleItemClick("Home");
                        }}>Home</Link></li>
                    <li><Link href="/" className={`nav-item ${selectedItem === "About" ? 'active' : ''}`}
                        onClick={() => {
                            handleItemClick("About");
                        }}>About</Link></li>
                    <li><Link href="/Contact" className={`nav-item ${selectedItem === "Contact" ? 'active' : ''}`}
                        onClick={() => {
                            handleItemClick("Contact");
                        }}>Contact</Link></li>
                    <li><Link href="/Services" className={`nav-item ${selectedItem === "Services" ? 'active' : ''}`}
                        onClick={() => {
                            handleItemClick("Services");
                        }}>Services</Link></li>
                    {/* <li><Link href="#" className="nav-item">About</Link></li>
            <li><Link href="#" className="nav-item">Services</Link></li>
            <li><Link href="#" className="nav-item">Contact</Link></li> */}
                    {/* <li><Link href="#" className="nav-item">Contact</Link></li> */}
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
