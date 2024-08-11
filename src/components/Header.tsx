import { Link } from 'react-router-dom';
import NavLinks from './NavLinks';

//Собственно шапка страницы, верстка и использование
//Link's для роутинга

const Header = () => {
    return (
        <header>
            <nav
                className="navbar fixed-top bg-primary navbar-expand-lg shadow-sm"
                style={{ height: '92px' }}
            >
                <div className="container-lg">
                    <Link
                        className="navbar-brand text-secondary fs-1 me-auto"
                        to="/"
                    >
                        Serebro39
                    </Link>
                    <div
                        className="offcanvas bg-primary offcanvas-end"
                        tabIndex={-1}
                        id="offcanvasNavbar"
                        aria-labelledby="offcanvasNavbarLabel"
                    >
                        <div className="offcanvas-header">
                            <h5
                                className="offcanvas-title text-secondary navbar-brand fs-1"
                                id="offcanvasNavbarLabel"
                            >
                                Serebro39
                            </h5>
                            <button
                                type="button"
                                className="btn-close btn-close"
                                data-bs-dismiss="offcanvas"
                                aria-label="Close"
                            ></button>
                        </div>
                        <div className="offcanvas-body">
                            <NavLinks />
                        </div>
                    </div>
                    <Link className="nav-icon nav-link" to="/basket">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="28"
                            height="28"
                            fill="currentColor"
                            className="bi bi-bag"
                            viewBox="0 0 16 16"
                        >
                            <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z" />
                        </svg>
                    </Link>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="offcanvas"
                        data-bs-target="#offcanvasNavbar"
                        aria-controls="offcanvasNavbar"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon navbar"></span>
                    </button>
                </div>
            </nav>
        </header>
    );
};

export default Header;
