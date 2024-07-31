import { useAppSelector } from '../hooks/redux';
import ToCartButton from '../components/ToCartButton';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
    const { cart, totalPrice } = useAppSelector((state) => state.cart);
    const navigate = useNavigate();

    return (
        <div className="container-xl">
            <h1 className="text-center my-5">Корзина товаров</h1>
            {cart.map((product) => (
                <div key={product.id} className="card mb-3">
                    <div className="row g-0 align-items-center">
                        <div className="col-md-2 col-3 text-center">
                            <img
                                src={product.image}
                                style={{ width: '140px' }}
                                className="img-fluid rounded-start"
                                alt="..."
                            />
                        </div>
                        <div className="col-md-7 col-9 fs-6 align-content-center">
                            <div className="card-body">
                                <h5 className="card-title">{product.title}</h5>
                                <p className="card-text fw-semibold">
                                    {product.price * product.amount} руб.
                                </p>
                            </div>
                        </div>
                        <div className="col-md-3 col-12 p-4 align-content-center">
                            <ToCartButton {...product} />
                        </div>
                    </div>
                </div>
            ))}
            {/* при наличии продуктов в корзине подсчитывается общая сумма и выводится 
                кнопка-ссылка на контакты для заказать */}
            {cart.length > 0 ? (
                <div className="text-center pb-5">
                    <p className="fs-5">
                        Итого: <b>{totalPrice} руб.</b>
                    </p>
                    <button
                        onClick={() => {
                            navigate('/contacts');
                        }}
                        className="btn btn-secondary btn-lg mt-2"
                    >
                        Заказать
                    </button>
                </div>
            ) : (
                <p className="fs-5 text-center">Ваша корзина пуста</p>
            )}
        </div>
    );
};

export default Cart;
