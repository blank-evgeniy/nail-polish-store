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

//самый громозкий компонент, при возможности надо декомпозировать
//и распределить его функционал
const ProductsList: React.FC<ProductsListProps> = ({
    productsData,
    isError,
    isLoading,
}) => {
    //TODO: перенести в отдельный файл с константами
    const PRODUCTS_ON_PAGE = 12;
    const location = useLocation();
    const [modalProduct, setModalProduct] = useState<ProductData | null>(null);

    const { currentPage, searchValue, volumeFilter, colorFilter } =
        useAppSelector((state) => state.filter);
    const { resetFilters } = filterSlice.actions;
    const dispatch = useAppDispatch();

    //фильтруем список выводимых продуктов, учитывая поиск и селекты
    const filteredProducts = filterProducts(
        searchProducts(searchValue, productsData),
        volumeFilter,
        colorFilter
    );

    //Храним в стейте данные модального окна и обновляем их при нажатии
    //на кнопку открытия модального окна для динамического отображения
    //данных о конкретном продукте

    const handleModalOpen = (product: ProductData) => {
        setModalProduct(product);
    };

    useEffect(() => {
        dispatch(resetFilters());
    }, [location]);

    if (isLoading)
        return (
            <div className="row row-gap-3">
                <ProductCardsSkeleton />
            </div>
        );

    if (isError)
        return (
            <div className="text-center fs-5">
                Упс! Произошла непредвиденная ошибка!
            </div>
        );

    return (
        <div className="row row-gap-3">
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
            <ModalProductInfo productData={modalProduct} />
        </div>
    );
};

export default ProductsList;
