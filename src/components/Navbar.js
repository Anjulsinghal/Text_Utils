import React, { useState } from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'


export default function Navbar(props) {
  return (

    // bg-${props.mode} navbar-${props.mode}
    <nav  style={{backgroundColor: props.mode=== "light"?"white":"#1a0b34", color: props.mode=== "dark"?"white":"black"}} className={`navbar navbar-expand-lg `}>
        <div className="container-fluid">
          <Link className="navbar-brand" style={{color: props.mode=== "dark"?"white":"black"}} to="/">{props.title}</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" style={{color: props.mode=== "dark"?"white":"black"}} aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" style={{color: props.mode=== "dark"?"white":"black"}}  to="/about">{props.about}</Link>
              </li>
              
            </ul>
            {/* <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form> */}
            <div className={`form-check form-switch text-${props.mode=== "light"?"dark":"light"}`}>
              <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
              <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Darkmode</label>
            </div>
          </div>
        </div>
      </nav>
  )
}
Navbar.propTypes = {title: PropTypes.string.isRequired,
                    about: PropTypes.string}
