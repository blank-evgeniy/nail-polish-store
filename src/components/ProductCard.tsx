import React from 'react';
import ProductData from '../types/ProductData';

const ProductCard: React.FC<ProductData> = (props) => {
    return (
        <div
            className="card rounded-0 mb-5 p-0 container-fluid"
            style={{ maxWidth: '200px' }}
        >
            <img
                src={`${props.image}`}
                alt={props.title}
                className="rounded-top-0 card-img-top"
            ></img>
            <div className="card-body">
                <h6 className="card-title">{props.title}</h6>
                <p className="card-text">{props.description}</p>
            </div>
            <ul
                className="list-group list-group-flush"
                style={{ fontSize: '0.8rem' }}
            >
                {props.color && (
                    <li className="list-group-item">{`Цвет: ${props.color}`}</li>
                )}
                {props.volume && (
                    <li className="list-group-item">{`Объём: ${props.volume} мл`}</li>
                )}
                {props.effect && (
                    <li className="list-group-item">{`Эффект: ${props.effect}`}</li>
                )}
            </ul>
            <div className="card-body text-center">
                <p className="card-text fw-bolder fs-5">{`${props.price} руб.`}</p>
                <button className="btn btn-secondary">В корзину</button>
            </div>
        </div>
    );
};

export default ProductCard;
