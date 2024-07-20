import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();

    return (
        <div className="container-lg d-flex flex-column align-items-center justify-content-center py-5 h-100">
            <p className="fs-3">Добро пожаловать!</p>
            <h1 className="my-3 text-center">Магазин гель-лака для ногтей</h1>
            <button
                onClick={() => navigate('/categories')}
                className="btn btn-primary mt-5"
            >
                Перейти к каталогу
            </button>
        </div>
    );
};

export default Home;
