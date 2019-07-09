import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

function Footer() {
    return (
        <FooterContainer className="main-footer">
            <div className="footer-middle">
                <div className="container">
                    <div className="row">
                        {/* Column1 */}
                        <div className="col-md-4 col-sm-6">
                            <h4>Foodastic</h4>
                            <ul className="list-unstyled">
                                <p>
                                    Where food lovers come together to build a
                                    foodies heaven in NUS.
                                </p>
                            </ul>
                        </div>
                        {/* Column2 */}
                        <div className="col-md-4 col-sm-6">
                            <h4>Canteen Stalls</h4>
                            <ul className="list-unstyled">
                                <li>
                                    <Link to="/sciencestall">Frontier</Link>
                                </li>
                                <li>
                                    <Link to="/fassstall">Deck</Link>
                                </li>
                            </ul>
                        </div>
                        {/* Column3 */}
                        <div className="col-md-4 col-sm-6">
                            <h4>Top Food</h4>
                            <ul className="list-unstyled">
                                <li>
                                    <Link to="/sciencefooddetails">
                                        Ayam Penyet
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    {/* Footer Bottom */}
                    <div className="footer-bottom">
                        <p className="text-xs-center">
                            &copy;{new Date().getFullYear()} Foodastic - All
                            Rights Reserved
                        </p>
                    </div>
                </div>
            </div>
        </FooterContainer>
    );
}
export default Footer;

const FooterContainer = styled.footer`
    .footer-middle {
        background: var(--mainDark);
        padding-top: 3rem;
        color: var(--mainWhite);
    }

    .footer-bottom {
        padding-top: 3rem;
        padding-bottom: 2rem;
    }

    ul li a {
        color: var(--mainGrey);
    }

    ul li a:hover {
        color: var(--mainLightGrey);
    }
`;
