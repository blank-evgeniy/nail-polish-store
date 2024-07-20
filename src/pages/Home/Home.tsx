import { useNavigate } from 'react-router-dom';
import './Home.scss';

const Home = () => {
    const navigate = useNavigate();

    return (
        <div className="home container-lg d-flex flex-column align-items-center justify-content-center py-5">
            <h2 className="fs-3">Добро пожаловать!</h2>
            <h1 className="my-3 text-center">Магазин гель-лака для ногтей</h1>
            <p className="fs-4 mt-2 text-center">
                В нашем ассортименте Вы найдёте полную продуктовую линейку для
                nail-мастера, широчайшую палитру классических и авторских
                оттенков, а так же многочисленные сезонные коллекции.
            </p>
            <button
                onClick={() => navigate('/categories')}
                className="btn btn-secondary btn-lg mt-5"
            >
                Перейти к каталогу
            </button>
        </div>
    );
};

export default Home;
