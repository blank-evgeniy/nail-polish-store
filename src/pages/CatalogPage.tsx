import { useQuery } from 'react-query';
import { Link, useParams } from 'react-router-dom';
import { getProducts } from '../api/getProducts';
import { getDocQuery } from '../api/getData';
import CategoriesData from '../types/CategoriesData';
import FilterForm from '../components/FilterForm';
import ProductsList from '../components/ProductsList';

const CatalogPage = () => {
    const { category } = useParams<string>();

    const { data: categoryData } = useQuery(category!, () =>
        getDocQuery<CategoriesData>('categories-demo', category!)
    );

    const {
        data: productsData,
        isLoading,
        isError,
    } = useQuery(['products', category], () => getProducts(category!));

    return (
        <div className="container-xl p-3">
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb fs-5">
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
            <h1 className="text-center mt-2 mb-5">
                {categoryData ? (
                    categoryData.title
                ) : (
                    <span className="placeholder col-2"></span>
                )}
            </h1>

            <FilterForm data={productsData} />

            <ProductsList
                productsData={productsData}
                isError={isError}
                isLoading={isLoading}
            />
        </div>
    );
};

export default CatalogPage;
