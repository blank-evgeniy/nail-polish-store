import React from 'react';
import ProductData from '../types/ProductData';
import { Link } from 'react-router-dom';
import ToCartButton from './ToCartButton';
import { useMediaQuery } from 'react-responsive';

interface ProductCardproductData {
    productData: ProductData;
    onModalOpen: (product: ProductData) => void;
}

const ProductCard: React.FC<ProductCardproductData> = ({
    productData,
    onModalOpen,
}) => {
    //В мобильной версии полная информация о карточках отображается в модальном окне,
    //переход на которое осуществляется по data-bs-target="#productModal" у кнопки
    const isMobile = useMediaQuery({ maxWidth: 767 });

    //--------------мобильная версия------------------------
    if (isMobile)
        return (
            <div className="card">
                <div className="row align-items-center g-0">
                    <div className="col-3">
                        <img
                            src={`${productData.image}`}
                            className="img-fluid rounded-start"
                            alt="..."
                        />
                    </div>
                    <div className="col-7">
                        <div className="card-body p-3">
                            <h5 className="card-title fs-6">
                                {productData.title}
                            </h5>
                            <p className="card-text">
                                {productData.price} руб.
                            </p>
                        </div>
                    </div>
                    <button
                        className="col-2 btn-default"
                        data-bs-toggle="modal"
                        data-bs-target="#productModal"
                        onClick={() => onModalOpen(productData)}
                    >
                        <svg
                            viewBox="0 0 512 512"
                            height="48px"
                            width="48px"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M294.1 256L167 129c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.3 34 0L345 239c9.1 9.1 9.3 23.7.7 33.1L201.1 417c-4.7 4.7-10.9 7-17 7s-12.3-2.3-17-7c-9.4-9.4-9.4-24.6 0-33.9l127-127.1z"></path>
                        </svg>
                    </button>
                </div>
            </div>
        );

    //--------------компьютерная версия------------------------
    return (
        <div
            className="card rounded-0 p-0 container-fluid h-100"
            style={{ maxWidth: '200px' }}
        >
            <img
                src={`${productData.image}`}
                alt={productData.title}
                className="rounded-top-0 card-img-top"
            ></img>
            <div className="card-body">
                <h6 className="card-title">{productData.title}</h6>
                {/* <p className="card-text">{productData.description}</p> */}
            </div>
            <ul
                className="list-group list-group-flush"
                style={{ fontSize: '0.8rem' }}
            >
                {productData.color && (
                    <li className="list-group-item">{`Цвет: ${productData.color}`}</li>
                )}
                {productData.volume && (
                    <li className="list-group-item">{`Объём: ${productData.volume} мл`}</li>
                )}
                {productData.effect && (
                    <li className="list-group-item">{`Эффект: ${productData.effect}`}</li>
                )}
            </ul>
            <div className="card-body text-center">
                {productData.inStock ? (
                    <>
                        <p className="card-text fw-bolder fs-5">{`${productData.price} руб.`}</p>
                        <ToCartButton {...productData} />
                    </>
                ) : (
                    <>
                        <p className="card-text fw-semibold fs-6">
                            нет в наличии
                        </p>
                        <Link to="/contacts" className="link-secondary">
                            свяжитесь с нами, чтобы заказать
                        </Link>{' '}
                    </>
                )}
            </div>
        </div>
    );
};

export default ProductCard;
