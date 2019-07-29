import React from "react";
import logo from "../../logo.png";
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link clLinkssName="navbar-brand ml-5" href="#">
                <img src={logo} alt="logo" style={{ width: "70px" }} />
            </Link>
            <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon" />
            </button>

            <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
            >
                <ul className="navbar-nav m-auto">
                    <li className="nav-item">
                        <Link
                            className="nav-link text-black text-uppercase ml-3"
                            to="/"
                        >
                            Home <span className="sr-only">(current)</span>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            className="nav-link text-black text-uppercase ml-3"
                            to="/canteens"
                        >
                            Canteens
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            className="nav-link text-black text-uppercase ml-3"
                            to="/about"
                        >
                            About Us
                        </Link>
                    </li>
                </ul>
                <Link to="/search">
                    <button
                        className="btn btn-outline-info my-2 my-sm-0"
                        type="submit"
                    >
                        Search for Food
                    </button>
                </Link>
            </div>
        </nav>
    );
}

export default Navbar;
