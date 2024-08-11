import { useNavigate } from 'react-router-dom';
import BgImage from './../img/home_bg.jpg';

//Домашняя страница
//TODO: заменить кнопку на ссылку Link со стилем подобным кнопке

//стиль для красивого :) фона
const sectionStyle = {
    backgroundImage: `url(${BgImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed',
};

const Home = () => {
    const navigate = useNavigate();

    return (
        <>
            <div className="min-vh-100 position-relative" style={sectionStyle}>
                <div
                    className="container-lg text-center position-absolute top-50 start-50 translate-middle text-white pb-2"
                    style={{ paddingTop: '94px' }}
                >
                    <h1 className="fs-1 font-accent fw-medium">Serebro39</h1>
                    <h2 className="fs-5 fw-normal mt-2">
                        магазин гель-лака ТМ Serebro
                    </h2>
                    <button
                        onClick={() => navigate('/categories')}
                        className="btn btn-primary btn-lg mt-3"
                    >
                        Перейти к каталогу
                    </button>
                </div>
            </div>
            <div className="bg-primary">
                <div className="container-lg py-5">
                    <h2 className="fs-2">О нас</h2>
                    <ul className="fs-5 my-4">
                        <li>
                            официальный представитель ТМ "Serebro collection"
                        </li>
                        <li>на рынке уже 5 лет</li>
                        <li>всё в наличии</li>
                        <li>более 1000 довольных клиентов</li>
                    </ul>
                    <h2 className="fs-2">О сайте</h2>
                    <p className="fs-5 mt-4">
                        На нашем сайте вы можете ознакомиться с продукцией,
                        собрать корзину товаров и связаться с нами, чтобы
                        выполнить заказ.
                    </p>
                    <p className="fs-5">
                        Если товара нет в наличии, вы можете также связаться с
                        нами и мы закажем его в ближайшее время.
                    </p>
                </div>
            </div>
        </>
    );
};

export default Home;
