import React from 'react'
import { Navbar } from 'react-bootstrap';

const Header =  () => {
    return (
        <>
        <Navbar className="navbar-expand navbar-primary navbar-dark">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" data-widget="pushmenu" href="#" role="button"><em className="fas fa-bars" /></a>
            </li>
            <li className="d-none d-sm-inline-block">
              <a href="#" className="nav-link"><strong>Touch Learn</strong></a>
            </li>
            <li className="nav-item d-none d-sm-inline-block">
              <a href="#" className="nav-link">Home</a>
            </li>
            <li className="nav-item d-none d-sm-inline-block">
              <a href="#" className="nav-link">Contact</a>
            </li>
          </ul>
         {/* <!-- Right navbar links --> */}
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link" data-widget="navbar-search" data-target="#navbar-search3" href="#" role="button">
                <em className="fas fa-search"/>
              </a>
              <div className="navbar-search-block" id="navbar-search3">
                <form className="form-inline">
                  <div className="input-group input-group-sm">
                    <input className="form-control form-control-navbar" type="search" placeholder="Search" aria-label="Search" />
                    <div className="input-group-append">
                      <button className="btn btn-navbar" type="submit">
                        <em className="fas fa-search"/>
                      </button>
                      <button className="btn btn-navbar" type="button" data-widget="navbar-search">
                        <em className="fas fa-times"/>
                      </button>
                    </div>
                  </div>
                </form> 
              </div>
            </li>
            {/* <!-- Notifications Dropdown Menu --> */}
            <li className="nav-item dropdown">
              <a className="nav-link" data-toggle="dropdown" href="#">
                <em className="far fa-bell"/>
                <span className="badge badge-warning navbar-badge">15</span>
              </a>
              <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
                <span className="dropdown-item dropdown-header">15 Notifications</span>
                <div className="dropdown-divider"></div>
                <a href="#" className="dropdown-item">
                  <em className="fas fa-envelope mr-2"/> 4 new messages
                  <span className="float-right text-muted text-sm">3 mins</span>
                </a>
                <div className="dropdown-divider"></div>
                <a href="#" className="dropdown-item">
                  <em className="fas fa-users mr-2"/> 8 friend requests
                  <span className="float-right text-muted text-sm">12 hours</span>
                </a>
                <div className="dropdown-divider"></div>
                <a href="#" className="dropdown-item">
                  <em className="fas fa-file mr-2"/> 3 new reports
                  <span className="float-right text-muted text-sm">2 days</span>
                </a>
                <div className="dropdown-divider"></div>
                <a href="#" className="dropdown-item dropdown-footer">See All Notifications</a>
              </div>
            </li>
            <li className="nav-item">
              <a className="nav-link" data-widget="control-sidebar" data-slide="true" href="#" role="button">
                <em className="fas fa-th-large"/>
              </a>
            </li>
          </ul>
        </Navbar> 

        </>
    )
}

export default Header;
