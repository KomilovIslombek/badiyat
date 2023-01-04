import React from 'react';
import './Header.scss';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
    const location = useLocation();
    console.log();
    return (
        <div className='Header'>
            <div className="radius">
                <div className="container">
                    <nav>
                        <div className="nav__row">
                            <div className="nav__logo">
                                <div><Link to='/'>BADIYAT</Link></div>
                            </div>
                            <ul className="nav__menu">
                                <li className={location.pathname == '/' ? 'active' : ''}><Link to="/">Bosh sahifa</Link></li>
                                <li className={location.pathname == '/books' ? 'active' : ''}><Link to="/books">Kitoblar</Link></li>
                                <li>Nazm</li>
                                <li>Maqolalar</li>
                                <li>Forum</li>
                            </ul>
                            <div className="nav__profile">
                                <li className="menu-item menu-item-has-children">
                                    <div className='profile'>
                                        <img style={{'borderRadius': '50%', 'marginRight': '10px'}} src="https://t.me/i/userpic/320/eAB_mNZWp9Q7xQdVGRZAEcIO4H-mPO5sKCfBhv-pGsQ.jpg" width="33px" alt="user" />
                                        <span className="ml-0 category-label">
                                            islombek 
                                            <span className="nav-label"><i className="fas fa-chevron-down"></i></span>
                                        </span>
                                    </div>
                                    <ul className="sub-menu">
                                        <li className="menu-item menu-item-has-children">
                                            <a href="/profile">Mening sahifam</a>
                                        </li>
                                        <li className="menu-item menu-item-has-children">
                                            <Link to="/exit">Akkauntdan chiqish</Link>
                                        </li>
                                    </ul>
                                </li>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    );
};


export default Header;