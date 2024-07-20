import { Link, useLocation } from 'react-router-dom';
import './Header.scss';

const categories = [
    {
        title: 'Все категории',
        link: '/categories',
    },
    {
        title: 'Топы',
        link: '/categories/topy',
    },
    {
        title: 'Базы',
        link: '/categories/basy',
    },
];

const Header = () => {
    const currentUrl = useLocation().pathname;

    return (
        <header>
            <nav className="navbar navbar-expand-lg shadow">
                <div className="container-lg">
                    <a className="navbar-brand" href="#">
                        SEREBRO 39
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
                    <div
                        className="collapse navbar-collapse"
                        id="navbarSupportedContent"
                    >
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li
                                className={
                                    currentUrl === '/'
                                        ? 'nav-item active'
                                        : 'nav-item'
                                }
                            >
                                <Link className="nav-link" to="/">
                                    Главная
                                </Link>
                            </li>
                            <li className="nav-item dropdown">
                                <Link
                                    className="nav-link dropdown-toggle"
                                    to="/categories"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    Каталог товаров
                                </Link>
                                <ul className="dropdown-menu">
                                    {categories.map((category) => (
                                        <li key={category.link}>
                                            <Link
                                                className="dropdown-item"
                                                to={category.link}
                                            >
                                                {category.title}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </li>
                            <li
                                className={
                                    currentUrl === '/contacts'
                                        ? 'nav-item active'
                                        : 'nav-item'
                                }
                            >
                                <Link className="nav-link" to="/contacts">
                                    Контакты
                                </Link>
                            </li>
                        </ul>

                        <Link className="nav-icon nav-link" to="/basket">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="32"
                                height="32"
                                className="bi bi-cart-check m-2"
                                viewBox="0 0 16 16"
                            >
                                <path d="M11.354 6.354a.5.5 0 0 0-.708-.708L8 8.293 6.854 7.146a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0z" />
                                <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1zm3.915 10L3.102 4h10.796l-1.313 7zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0m7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0" />
                            </svg>
                            Корзина товаров
                        </Link>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;
