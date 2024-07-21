import React, { useState } from 'react';
import { Link } from 'react-router-dom';

interface CategoryCardProps {
    title: string;
    image: string;
    id: string;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ id, title, image }) => {
    const [imageNotFound, setImageNotFound] = useState(false);
    const imageErrorHandler = () => {
        setImageNotFound(true);
    };

    return (
        <div className="card rounded-4 mb-5 bg-primary">
            <Link to={`/categories/${id}`} className="link-secondary">
                {!imageNotFound ? (
                    <img
                        src={`/categories/${image}`}
                        onError={imageErrorHandler}
                        alt={title}
                        className="rounded-top-4 img-fluid"
                    ></img>
                ) : (
                    <div className="bg-secondary container-fluid rounded-top-4">
                        <div className="py-5 text-primary text-center">
                            Изображение не найдено
                        </div>
                    </div>
                )}
                <div className="card-body">
                    <h6 className="card-title text-center">{title}</h6>
                </div>
            </Link>
        </div>
    );
};

export default CategoryCard;
