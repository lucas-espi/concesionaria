import React from 'react'
import './header.css'


export const Header = () =>{
    return (
        <div className="header">
            <nav class="navbar navbar-dark bg-dark">
            <i className="bi bi-power icon-out"></i>
            </nav>
            <h1> <i className="bi bi-rocket-takeoff-fill"></i></h1>
        </div>
    )
}