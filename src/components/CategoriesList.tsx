import React from 'react';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import CategoriesData from '../types/CategoriesData';
import { getDocsQuery } from '../api/getData';

//Список категорий
//Данные получаем с firestore, используя React Query
//TODO: заменить на RTK Query по возможности

interface CategoriesListProps {
    onLinkClick: (path: string) => void;
}

const CategoriesList: React.FC<CategoriesListProps> = ({ onLinkClick }) => {
    const { isLoading, isError, data } = useQuery('categories', () =>
        getDocsQuery<CategoriesData>('categories-demo')
    );

    if (isLoading) {
        return (
            <div className="m-1 spinner-border text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        );
    }

    if (isError) {
        return <div>Категории не найдены</div>;
    }

    return (
        <>
            {data &&
                data.map((category) => (
                    <li key={category.id}>
                        <Link
                            className="dropdown-item"
                            to={`/categories/${category.id}`}
                            data-bs-dismiss="offcanvas"
                            onClick={() =>
                                onLinkClick(`/categories/${category.id}`)
                            }
                        >
                            {category.title}
                        </Link>
                    </li>
                ))}
        </>
    );
};

export default CategoriesList;
