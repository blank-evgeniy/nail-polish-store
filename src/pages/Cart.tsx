import React from 'react';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { cartSlice } from '../store/reducers/cartSlice';
import ToCartButton from '../components/ToCartButton';

const Cart = () => {
    // const dispatch = useAppDispatch();
    // const { addProductToBasket, removeProductFromBasket } = cartSlice.actions;
    const { cart, totalPrice } = useAppSelector((state) => state.cart);

    return (
        <div className="container-xl">
            <h1 className="text-center my-5">Корзина товаров</h1>
            {cart.map((product) => (
                <div key={product.id} className="card mb-3">
                    <div className="row g-0 align-items-center">
                        <div className="col-md-2 text-center">
                            <img
                                src={product.image}
                                style={{ width: '140px' }}
                                className="img-fluid rounded-start"
                                alt="..."
                            />
                        </div>
                        <div className="col-md-7 align-content-center">
                            <div className="card-body">
                                <h5 className="card-title">{product.title}</h5>
                                <p className="card-text fw-semibold">
                                    {product.price * product.amount} руб.
                                </p>
                            </div>
                        </div>
                        <div className="col-md-3 p-4 align-content-center">
                            <ToCartButton {...product} />
                        </div>
                    </div>
                </div>
            ))}
            {cart.length > 0 ? (
                <p className="fs-5 text-center">
                    Итого: <b>{totalPrice} руб.</b>
                </p>
            ) : (
                <p className="fs-5 text-center">Ваша корзина пуста</p>
            )}
        </div>
    );
};

export default Cart;
