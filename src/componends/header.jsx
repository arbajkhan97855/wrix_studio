import React from "react";
import logo from "../assets/logo/logo.png"
import { Link } from "react-router-dom";

export function Header(){
    return(
        <>
          <div className="nav_bar" data-aos="fade-down" data-aos-duration="1000">
        <div className="left nav_img">
            <img src={`${logo}`} alt="loading..." height={100} width={120} className="pt-3" />
        </div>
        <div className="right">
            <Link to="/" className="nav_items">Home</Link>
            <Link to="/about" className="nav_items">About</Link>
            <Link to="/gallery" className="nav_items">Gallery</Link>          
            <Link to="/contact" className="nav_items">Contact</Link>
        </div>
    </div>
        </>
    )
}