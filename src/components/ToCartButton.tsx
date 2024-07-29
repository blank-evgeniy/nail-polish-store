import React from 'react';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { cartSlice } from '../store/reducers/cartSlice';
import ProductData from '../types/ProductData';

const ToCartButton: React.FC<ProductData> = (props) => {
    const dispatch = useAppDispatch();
    const { addProductToBasket, removeProductFromBasket } = cartSlice.actions;
    const { cart } = useAppSelector((state) => state.cart);

    const handleAddToCart = () => {
        dispatch(addProductToBasket(props));
    };
    const handleRemoveFromCart = () => {
        dispatch(removeProductFromBasket(props));
    };

    const productsInCart = cart
        .filter((product) => product.id === props.id)
        .map((product) => product.amount);

    if (productsInCart.length > 0)
        return (
            <div
                className="d-flex justify-content-between mx-auto"
                style={{ maxWidth: '160px' }}
            >
                <button
                    style={{ width: '32px', height: '32px' }}
                    className="btn btn-secondary fw-bold p-0"
                    onClick={() => dispatch(handleRemoveFromCart)}
                >
                    -
                </button>
                <span className="badge fs-6 text-bg-primary">
                    {productsInCart}
                </span>
                <button
                    style={{ width: '32px', height: '32px' }}
                    className={
                        productsInCart[0] === 99
                            ? 'btn btn-secondary fw-bold p-0 disabled'
                            : 'btn btn-secondary fw-bold p-0'
                    }
                    onClick={() => dispatch(handleAddToCart)}
                >
                    +
                </button>
            </div>
        );

    return (
        <button
            className="btn btn-secondary"
            onClick={() => dispatch(handleAddToCart)}
        >
            В корзину
        </button>
    );
};

export default ToCartButton;
