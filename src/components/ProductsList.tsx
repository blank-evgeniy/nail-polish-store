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
import { pagingSlice } from '../store/reducers/pagingSlice';

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
    const productsOnPage = 12;
    const location = useLocation();

    const { searchValue, volumeFilter, colorFilter } = useAppSelector(
        (state) => state.filter
    );
    const { currentPage } = useAppSelector((state) => state.paging);
    const { setPrevPage, setNextPage, setPage } = pagingSlice.actions;
    const { resetFilters } = filterSlice.actions;
    const dispatch = useAppDispatch();

    const filteredProducts = filterProducts(
        searchProducts(searchValue, productsData),
        volumeFilter,
        colorFilter
    );

    useEffect(() => {
        dispatch(resetFilters());
        dispatch(setPage(1));
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
                        (currentPage - 1) * productsOnPage,
                        currentPage * productsOnPage
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
                pagesCount={Math.ceil(filteredProducts.length / productsOnPage)}
                currentPage={currentPage}
                onClickNext={() => dispatch(setNextPage())}
                onClickPrev={() => dispatch(setPrevPage())}
                onClickNumber={(number) => dispatch(setPage(number))}
            />
        </div>
    );
};

export default ProductsList;
