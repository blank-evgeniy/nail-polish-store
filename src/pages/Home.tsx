import { Link, useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();

    return (
        <div
            style={{ minHeight: 'calc(100vh - 80px)' }}
            className="container-lg d-flex flex-column align-items-center justify-content-center py-1"
        >
            <h2 className="fs-4">Добро пожаловать!</h2>
            <h1 className="fs-3 my-3 text-center">
                Магазин гель-лака для ногтей
            </h1>
            <p className="fs-5 mt-2 text-center">
                Мы официальный представитель ТМ "Serebro" в Калининграде. В
                нашем ассортименте Вы найдёте полную продуктовую линейку для
                nail-мастера, широчайшую палитру классических и авторских
                оттенков.
            </p>
            <p className="fs-5 mt-2 text-center">
                На нашем сайте вы можете ознакомиться с продукцией, чтобы{' '}
                <Link to="/contacts" className="link-secondary">
                    связаться с нами
                </Link>{' '}
                и заказать товар.
            </p>
            <button
                onClick={() => navigate('/categories')}
                className="btn btn-secondary btn-lg mt-3"
            >
                Перейти к каталогу
            </button>
        </div>
    );
};

export default Home;
