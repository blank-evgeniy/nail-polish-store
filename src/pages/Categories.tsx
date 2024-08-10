import { getDocsQuery } from '../api/getData';
import CategoryCard from '../components/CategoryCard';
import Heading from '../components/Heading';
import { CategoryCardsSkeleton } from '../components/Skeleton';
import { useQuery } from 'react-query';

interface CategoriesData {
    title: string;
    image: string;
    id: string;
}

const Categories = () => {
    const { isLoading, isError, data } = useQuery('categories', () =>
        getDocsQuery<CategoriesData>('categories-demo')
    );

    return (
        <div className="container-xl" style={{ paddingTop: '92px' }}>
            <Heading className="my-5">Категории товаров</Heading>
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
