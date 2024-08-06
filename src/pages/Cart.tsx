import { useAppSelector } from '../hooks/redux';
import { useNavigate } from 'react-router-dom';
import Heading from '../components/Heading';
import CartItem from '../components/CartItem';

const Cart = () => {
    const { cart, totalPrice } = useAppSelector((state) => state.cart);
    const navigate = useNavigate();

    return (
        <div className="container-xl">
            <Heading className="my-5">Корзина товаров</Heading>
            {cart.map((product) => (
                <CartItem key={product.id} product={product} />
            ))}
            {/* при наличии продуктов в корзине подсчитывается общая сумма и выводится 
                кнопка-ссылка на контакты для заказа*/}
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
