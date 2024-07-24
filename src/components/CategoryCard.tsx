import React from 'react';
import { Link } from 'react-router-dom';

interface CategoryCardProps {
    title: string;
    image: string;
    id: string;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ id, title, image }) => {
    return (
        <div
            className="card rounded-4 mb-5 p-0 bg-primary container-fluid"
            style={{ maxWidth: '200px' }}
        >
            <Link
                to={`/categories/${id}`}
                className="link-secondary link-underline-opacity-0"
            >
                <img
                    src={`${image}`}
                    alt={title}
                    className="rounded-top-4 card-img-top"
                ></img>
                <div className="card-body container-fluid">
                    <h6 className="card-title text-center">{title}</h6>
                </div>
            </Link>
        </div>
    );
};

export default CategoryCard;
