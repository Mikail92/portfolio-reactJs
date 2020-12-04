import React from 'react'

import './style.css'

const Header = () => {
    return (
        <header id="header" className="site-header header-style-1">
          <nav className="navigation navbar navbar-default">
            <div className="container">
              <div className="navbar-header">
                <button type="button" className="open-btn">
                  <span className="sr-only">Toggle navigation</span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                </button>
                <a className="navbar-brand" href="index.html">
                  <img src={"assets/images/logo.png"} alt="" />
                </a>
              </div>
              <div id="navbar" className="navbar-collapse collapse navbar-right navigation-holder">
                        <button className="close-navbar"><i className="ti-close"></i></button>
                        <ul className="nav navbar-nav">
                            <li className="menu-item-has-children">
                                <a href={"https://9gag.com/"}>Home</a>
                                <ul className="sub-menu">
                                    <li><a href={"index.html"}>Home</a></li>
                                </ul>
                            </li>
                            <li><a href="about.html">About</a></li>
                            <li className="menu-item-has-children">
                                <a href={"https://9gag.com/"}>Portfolio</a>
                                <ul className="sub-menu">
                                    <li><a href="protfolio-grid.html">Portfolio Grid</a></li>
                                    <li><a href="protfolio-grid-2.html">Portfolio Grid-2</a></li>
                                    <li><a href="protfolio-mashonary.html">Portfolio Mashonary</a></li>
                                    <li><a href="protfolio-list.html">Portfolio List</a></li>
                                    <li><a href="protfolio-cro.html">Portfolio Cro</a></li>
                                </ul>
                            </li>
                            <li className="menu-item-has-children">
                                <a href={"https://9gag.com/"}>Pages</a>
                                <ul className="sub-menu">
                                    <li><a href="about.html">About</a></li>
                                    <li><a href="service-details.html">Service Details</a></li>
                                    <li><a href="project-details.html">Project Details</a></li>
                                    <li><a href="404.html">404 Page</a></li>
                                </ul>
                            </li>
                            <li><a href="contact.html">Contact</a></li>
                            <li className="menu-item-has-children">
                                <a href={"https://9gag.com/"}>Blog</a>
                                <ul className="sub-menu">
                                    <li><a href="blog.html">Blog</a></li>
                                    <li><a href="blog-width-sidebar.html">Blog With Left Sidebar</a></li>
                                    <li className="menu-item-has-children">
                                        <a href="#Level3">Blog Details</a>
                                        <ul className="sub-menu">
                                            <li><a href="blog-single.html">Blog Details</a></li>
                                            <li><a href="blog-single-sidebar.html">Blog Details Left Sidebar</a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    {/*end of nav-collapse*/}
                    <div className="cart-search-contact">
                        <a href={"https://9gag.com/"} className="theme-btn">Lets Talk</a>
                    </div>
            </div>{/* end of container */}
          </nav>
        </header>
    )
}

export default Header;