import { Link, useLocation, useNavigate } from 'react-router-dom';
import CategoriesList from './CategoriesList';

const NavLinks = () => {
    const currentUrl = useLocation().pathname;
    const navigate = useNavigate();

    const handleLinkClick = (path: string) => {
        navigate(path);
    };

    return (
        <ul className="navbar-nav justify-content-center flex-grow-1 pe-3">
            <li className="nav-item">
                <Link
                    className={
                        currentUrl === '/'
                            ? 'nav-link mx-lg-2 active'
                            : 'nav-link mx-lg-2'
                    }
                    to="/"
                    data-bs-dismiss="offcanvas"
                    onClick={() => handleLinkClick('/')}
                >
                    О нас
                </Link>
            </li>

            <li className="nav-item dropdown">
                <a
                    className="nav-link link-primary dropdown-toggle mx-lg-2"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                >
                    Каталог товаров
                </a>
                <ul className="dropdown-menu mt-lg-3">
                    <li key="all">
                        <Link
                            className="dropdown-item"
                            to={'/categories'}
                            data-bs-dismiss="offcanvas"
                            onClick={() => handleLinkClick('/categories')}
                        >
                            Все категории
                        </Link>
                    </li>
                    <li>
                        <hr className="dropdown-divider" />
                    </li>
                    <CategoriesList onLinkClick={handleLinkClick} />
                </ul>
            </li>

            <li className="nav-item">
                <Link
                    className={
                        currentUrl === '/contacts'
                            ? 'nav-link mx-lg-2 active'
                            : 'nav-link mx-lg-2'
                    }
                    to="/contacts"
                    data-bs-dismiss="offcanvas"
                    onClick={() => handleLinkClick('/contacts')}
                >
                    Контакты
                </Link>
            </li>
        </ul>
    );
};

export default NavLinks;
