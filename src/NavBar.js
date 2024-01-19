import React from "react";
import { useSelector } from "react-redux";
import { Link, Outlet } from "react-router-dom";


const NavBar = () => {
    const amount = useSelector(state => state.amount)

   
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            State Bank Of Shwetkamal
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to='/'>Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/shop">Bank</Link>
              </li>
              
            </ul>
            <div>

            </div>
                <button disabled={true} className="btn btn-primary">Your Balance: { amount } </button>
          </div>
        </div>
      </nav>
      <Outlet/>
    </div>
  );
};

export default NavBar;
