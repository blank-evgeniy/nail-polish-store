import React from 'react';
import ProductData from '../types/ProductData';
import ToCartButton from './ToCartButton';
import { Link } from 'react-router-dom';

interface ModalProductInfoproductData {
    productData: ProductData | null;
}

const ModalProductInfo: React.FC<ModalProductInfoproductData> = ({
    productData,
}) => {
    return (
        <div
            className="modal fade"
            id="productModal"
            tabIndex={-1}
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
        >
            <div className="modal-dialog">
                {productData && (
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1
                                className="modal-title fs-5"
                                id="exampleModalLabel"
                            >
                                {productData.title}
                            </h1>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            ></button>
                        </div>
                        <div className="modal-body text-center">
                            <img
                                src={`${productData.image}`}
                                alt={productData.title}
                                className="rounded-top-0"
                            ></img>
                            <ul
                                className="list-group list-group-flush"
                                style={{ fontSize: '0.8rem' }}
                            >
                                <li className="list-group-item">
                                    {productData.description}
                                </li>
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
                            <div className="text-center ">
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
                                        <Link
                                            to="/contacts"
                                            className="link-secondary"
                                        >
                                            свяжитесь с нами, чтобы заказать
                                        </Link>{' '}
                                    </>
                                )}
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button
                                type="button"
                                className="btn btn-secondary"
                                data-bs-dismiss="modal"
                            >
                                Закрыть
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ModalProductInfo;
