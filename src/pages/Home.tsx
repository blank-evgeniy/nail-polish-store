import { useNavigate } from 'react-router-dom';
import BgImage from './../img/home_bg.jpg';

const sectionStyle = {
    backgroundImage: `url(${BgImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed',
};

const Home = () => {
    const navigate = useNavigate();

    return (
        <div className="min-vh-100 position-relative" style={sectionStyle}>
            <div
                className="container-lg text-center position-absolute top-50 start-50 translate-middle text-white pb-2"
                style={{ paddingTop: '94px' }}
            >
                <h1 className="font-accent fs-3 my-3">
                    <div>магазин гель-лака для ногтей </div>
                    <div className="fs-1">Serebro39</div>
                </h1>
                <h2 className="fs-4 mt-2">
                    официальный представитель ТМ "Serebro" в Калининграде
                </h2>
                <button
                    onClick={() => navigate('/categories')}
                    className="btn btn-primary btn-lg mt-3"
                >
                    Перейти к каталогу
                </button>
            </div>
        </div>
    );
};

export default Home;
