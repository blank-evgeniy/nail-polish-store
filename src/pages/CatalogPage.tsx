import { useQuery } from 'react-query';
import { Link, useParams } from 'react-router-dom';
import { getProducts } from '../api/getProducts';
import { getDocQuery } from '../api/getData';
import CategoriesData from '../types/CategoriesData';
import FilterForm from '../components/FilterForm';
import ProductsList from '../components/ProductsList';
import Heading from '../components/Heading';
import ErrorPage from './ErrorPage';

//Страница с товарами
//Данные получаем с firestore, используя React Query
//TODO: заменить на RTK Query по возможности

const CatalogPage = () => {
    const { category } = useParams<string>();

    const { data: categoryData, isError: categoryError } = useQuery(
        category!,
        () => getDocQuery<CategoriesData>('categories-demo', category!)
    );

    const {
        data: productsData,
        isLoading,
        isError: productsError,
    } = useQuery(['products', category], () => getProducts(category!));

    if (categoryError || productsError)
        return (
            <ErrorPage message="Категория товаров, которую вы ищете, не существует" />
        );

    return (
        <div className="container-xl" style={{ paddingTop: '92px' }}>
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb fs-5 mt-5">
                    <li className="breadcrumb-item">
                        <Link to="/categories" className="link-secondary">
                            Все категории
                        </Link>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                        {categoryData?.title}
                    </li>
                </ol>
            </nav>
            <Heading className="text-center mt-2 mb-5">
                {categoryData?.title}
            </Heading>

            <FilterForm data={productsData} />

            <ProductsList
                productsData={productsData}
                isError={productsError}
                isLoading={isLoading}
            />
        </div>
    );
};

export default CatalogPage;
