import React from 'react';
import ProductData, { CartProductData } from '../types/ProductData';
import ToCartButton from './ToCartButton';
import { useQuery } from 'react-query';
import { getDocQuery } from '../api/getData';
import { CartItemSkeleton } from './Skeleton';

//Карточка продукта корзины
//Данные получаем с firestore, используя React Query
//TODO: заменить на RTK Query по возможности

interface CartItemProps {
    product: CartProductData;
}

const CartItem: React.FC<CartItemProps> = ({ product }) => {
    const { isLoading, isError, data } = useQuery(`product-${product.id}`, () =>
        getDocQuery<ProductData>('products-demo', product.id)
    );

    if (isLoading) return <CartItemSkeleton />;

    if (isError || !data) return <div>Произошла ошибка загрузки данных</div>;

    return (
        <div className="card mb-3">
            <div className="row g-0 align-items-center">
                <div className="col-md-2 col-3 text-center">
                    <img
                        src={data.image}
                        style={{ width: '140px' }}
                        className="img-fluid rounded-start"
                        alt={`${data.title} фото`}
                    />
                </div>
                <div className="col-md-7 col-9 fs-6 align-content-center">
                    <div className="card-body">
                        <h5 className="card-title">{data.title}</h5>
                        <p className="card-text fw-semibold">
                            {data.price * product.amount} руб.
                        </p>
                    </div>
                </div>
                <div className="col-md-3 col-12 p-4 align-content-center">
                    <ToCartButton {...data} />
                </div>
            </div>
        </div>
    );
};

export default CartItem;
