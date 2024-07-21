import { useGetDocs } from '../../hooks/useGetData';
import CategoryCard from '../../components/CategoryCard/CategoryCard';

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
                        <div
                            key={category.id}
                            className="col-xxl-2 col-xl-3 col-sm-4 col-6 d-flex align-items-stretch"
                        >
                            <CategoryCard
                                id={category.id}
                                title={category.title}
                                image={category.image}
                            />
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Categories;
