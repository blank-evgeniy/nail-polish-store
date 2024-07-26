import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { getProducts } from '../api/getProducts';
import ProductCard from '../components/ProductCard';
import { getDocQuery } from '../api/getData';
import CategoriesData from '../types/CategoriesData';
import { ProductCardsSkeleton } from '../components/Skeleton';
import FilterForm from '../components/FilterForm';
import { useAppSelector } from '../hooks/redux';
import search from '../auxiliary/search';

const CatalogPage = () => {
    const { searchValue } = useAppSelector((state) => state.filter);
    const { category } = useParams<string>();
    const limit = 10;

    const { data: categoryData } = useQuery(category!, () =>
        getDocQuery<CategoriesData>('categories-demo', category!)
    );

    const {
        data: productsData,
        isLoading,
        isError,
    } = useQuery(['products', category], () => getProducts(limit, category!));

    const filteredCharacters = search(searchValue, productsData);

    return (
        <div className="container-xl">
            <h1 className="text-center my-5">
                {categoryData ? (
                    categoryData.title
                ) : (
                    <span className="placeholder col-2"></span>
                )}
            </h1>

            <FilterForm data={productsData} />

            <div className="row">
                {isLoading && <ProductCardsSkeleton />}
                {isError && (
                    <div className="text-center">
                        Произошла непредвиденная ошибка
                    </div>
                )}
                {productsData &&
                    filteredCharacters.map((product) => (
                        <div
                            key={product.id}
                            className="col-xxl-2 col-xl-3 col-sm-4 col-6"
                        >
                            <ProductCard {...product} key={product.id} />
                        </div>
                    ))}
            </div>
        </div>
    );
};

export default CatalogPage;
