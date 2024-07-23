import { getDocsQuery } from '../api/getData';
import CategoryCard from '../components/CategoryCard';
import { CategoryCardsSkeleton } from '../components/Skeleton';
import { useQuery } from 'react-query';

interface CategoriesData {
    title: string;
    image: string;
    id: string;
}

const Categories = () => {
    const { isLoading, isError, data } = useQuery(
        'categories',
        getDocsQuery<CategoriesData>
    );

    return (
        <div className="container-xl">
            <h1 className="text-center my-5">Категории товаров</h1>
            <div className="row">
                {isLoading ? (
                    <CategoryCardsSkeleton />
                ) : isError ? (
                    <p>Произошла непредвиденная ошибка</p>
                ) : !data ? (
                    <p>Товары не найдены</p>
                ) : (
                    <>
                        {data.map((category) => (
                            <div
                                key={category.id}
                                className="col-xxl-2 col-xl-3 col-sm-4 col-6 d-flex justify-content-center align-items-stretch"
                            >
                                <CategoryCard
                                    id={category.id}
                                    title={category.title}
                                    image={category.image}
                                />
                            </div>
                        ))}
                    </>
                )}
            </div>
        </div>
    );
};

export default Categories;
