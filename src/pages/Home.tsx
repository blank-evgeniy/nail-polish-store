import { useNavigate } from 'react-router-dom';
import BgImage from './../img/home_bg.jpg';

//Домашняя страница
//TODO: заменить кнопку на ссылку Link со стилем подобным кнопке

//стили для фона
const sectionStyle: React.CSSProperties = {
    backgroundImage: `url(${BgImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed',
    boxShadow: 'inset 0 0 0 2000px rgba(25, 0, 48, 0.9)',
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
                    <h2 className="fs-6 fw-normal mt-2">
                        магазин гель-лака ТМ "Serebro"
                    </h2>
                    <button
                        onClick={() => navigate('/categories')}
                        className="btn btn-primary mt-4"
                    >
                        Перейти к каталогу
                    </button>
                </div>
            </div>
            <div className="bg-primary">
                <div className="container-lg py-5">
                    <h2 className="fs-4">О нас</h2>
                    <ul className="fs-6 my-3">
                        <li>
                            Официальный представитель ТМ "Serebro collection"
                        </li>
                        <li>На рынке уже 5 лет</li>
                        <li>Всё в наличии</li>
                        <li>Более 1000 довольных клиентов</li>
                    </ul>
                    <h2 className="fs-4">Как заказать?</h2>
                    <ul className="fs-6 my-3">
                        <li>
                            Вы можете перейти к каталогу, чтобы ознакомиться с
                            продукцией, а после выбора открыть наши контакты и
                            позвонить или написать нам, чтобы произвести заказ.
                        </li>
                        <li>
                            Также дял удобства вы можете сохранять товары в
                            корзину, где будет подсчитана конечная цена и
                            представлен их список.
                        </li>
                        <li>
                            Если указано, что товара нет в наличии, вы можете
                            связаться с нами и мы закажем его в ближайшее время.
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default Home;
