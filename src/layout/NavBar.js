import React, { Component } from 'react'
import { Link } from "react-router-dom";
import '../../src/Assets/Style/TopCatergeryStyle.css'


export class NavBar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark fixed-top" style={{ backgroundColor: '#464444' }}>
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">R-News Source</Link>
          <button className="navbar-toggler" type="button" data-mdb-toggle="collapse" data-mdb-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <i className="fas fa-bars"></i>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/everything">EveryThing</Link>
              </li>
            </ul>
            <ul className="navbar-nav d-flex flex-row me-1">
              <li className="nav-item me-3 me-lg-0">
                <Link className="nav-link" to="#"><i className="fas fa-shopping-cart"></i></Link>
              </li>
              <li className="nav-item me-3 me-lg-0">
                <Link className="nav-link" to="#"><i className="fab fa-twitter"></i></Link>
              </li>
            </ul>

          </div>
        </div>

      </nav>

    )
  }
}

export default NavBar
