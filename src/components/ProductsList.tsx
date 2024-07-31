import React, { useEffect, useState } from 'react';
import { ProductCardsSkeleton } from './Skeleton';
import filterProducts from '../auxiliary/filterProducts';
import searchProducts from '../auxiliary/searchProducts';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import ProductCard from './ProductCard';
import { useLocation } from 'react-router-dom';
import { filterSlice } from '../store/reducers/filterSlice';
import ProductData from '../types/ProductData';
import Pagination from './Pagination';
import ModalProductInfo from './ModalProductInfo';

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
    const [modalProduct, setModalProduct] = useState<ProductData>();

    const { currentPage, searchValue, volumeFilter, colorFilter } =
        useAppSelector((state) => state.filter);
    const { resetFilters } = filterSlice.actions;
    const dispatch = useAppDispatch();

    const filteredProducts = filterProducts(
        searchProducts(searchValue, productsData),
        volumeFilter,
        colorFilter
    );

    const handleModalOpen = (product: ProductData) => {
        setModalProduct(product);
    };

    useEffect(() => {
        dispatch(resetFilters());
    }, [location]);

    return (
        <div className="row">
            {isLoading && <ProductCardsSkeleton />}
            {isError && (
                <div className="text-center fs-5">
                    Произошла непредвиденная ошибка
                </div>
            )}
            {filteredProducts.length > 0 ? (
                filteredProducts
                    .slice(
                        (currentPage - 1) * PRODUCTS_ON_PAGE,
                        currentPage * PRODUCTS_ON_PAGE
                    )
                    .map((product) => (
                        <div
                            key={product.id}
                            className="col-xxl-2 col-xl-3 col-md-4 col-12"
                        >
                            <ProductCard
                                productData={product}
                                onModalOpen={(item) => handleModalOpen(item)}
                                key={product.id}
                            />
                        </div>
                    ))
            ) : (
                <div className="text-center fs-5">Продукты не найдены</div>
            )}
            <Pagination
                pagesCount={Math.ceil(
                    filteredProducts.length / PRODUCTS_ON_PAGE
                )}
                currentPage={currentPage}
            />
            {modalProduct && <ModalProductInfo {...modalProduct} />}
        </div>
    );
};

export default ProductsList;
