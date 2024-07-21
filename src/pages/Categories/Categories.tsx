import { Link } from 'react-router-dom';
import { useGetDocs } from '../../hooks/useGetData';

interface CategoriesData {
    title: string;
    image: string;
    id: string;
}

const Categories = () => {
    const { data, isLoading, error } = useGetDocs<CategoriesData>('sections');

    return (
        <div className="container-lg">
            <h1 className="text-center my-5">Категории товаров</h1>
            {isLoading ? (
                <div className="d-flex justify-content-center">
                    <div className="spinner-border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
            ) : error ? (
                <p>{error}</p>
            ) : !data ? (
                <p>Товары не найдены</p>
            ) : (
                <div className="row">
                    {data.map((category) => (
                        <div key={category.id} className="col-md-3">
                            <div
                                className="card mb-4 flex-d flex-column align-items-center"
                                style={{ width: '240px' }}
                            >
                                <img
                                    src="basy.jpg"
                                    className="mt-3"
                                    style={{
                                        width: '200px',
                                        height: '200px',
                                    }}
                                ></img>
                                <div className="card-body">
                                    <h5 className="card-title text-center">
                                        {category.title}
                                    </h5>
                                    <Link
                                        to={`/categories/${category.id}`}
                                        className="btn btn-primary"
                                    >
                                        Перейти к категории
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Categories;
