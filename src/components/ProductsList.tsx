import React, { useEffect } from 'react';
import { ProductCardsSkeleton } from './Skeleton';
import filterProducts from '../auxiliary/filterProducts';
import searchProducts from '../auxiliary/searchProducts';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import ProductCard from './ProductCard';
import { useLocation } from 'react-router-dom';
import { filterSlice } from '../store/reducers/filterSlice';
import ProductData from '../types/ProductData';
import Pagination from './Pagination';

interface ProductsListProps {
    productsData: ProductData[] | undefined;
    isLoading: boolean;
    isError: boolean;
}

const ProductsList: React.FC<ProductsListProps> = ({
    productsData,
    isError,
    isLoading,
}) => {
    const PRODUCTS_ON_PAGE = 12;
    const location = useLocation();

    const { currentPage, searchValue, volumeFilter, colorFilter } =
        useAppSelector((state) => state.filter);
    const { resetFilters } = filterSlice.actions;
    const dispatch = useAppDispatch();

    const filteredProducts = filterProducts(
        searchProducts(searchValue, productsData),
        volumeFilter,
        colorFilter
    );

    useEffect(() => {
        dispatch(resetFilters());
    }, [location]);

    return (
        <div className="row">
            {isLoading && <ProductCardsSkeleton />}
            {isError && (
                <div className="text-center">
                    Произошла непредвиденная ошибка
                </div>
            )}
            {productsData &&
                filteredProducts
                    .slice(
                        (currentPage - 1) * PRODUCTS_ON_PAGE,
                        currentPage * PRODUCTS_ON_PAGE
                    )
                    .map((product) => (
                        <div
                            key={product.id}
                            className="col-xxl-2 col-xl-3 col-sm-4 col-6"
                        >
                            <ProductCard {...product} key={product.id} />
                        </div>
                    ))}
            <Pagination
                pagesCount={Math.ceil(
                    filteredProducts.length / PRODUCTS_ON_PAGE
                )}
                currentPage={currentPage}
            />
        </div>
    );
};

export default ProductsList;
