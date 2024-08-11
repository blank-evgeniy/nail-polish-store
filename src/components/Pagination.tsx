import React from 'react';
import { useAppDispatch } from '../hooks/redux';
import { filterSlice } from '../store/reducers/filterSlice';

//Пагинация страницы, так как в моем случае она используется
//только на странице с товарами, то я оставил взаймодействие
//со стором в этом компоненте, чтобы не перегружать родительский

interface PaginationProps {
    pagesCount: number;
    currentPage: number;
}

const Pagination: React.FC<PaginationProps> = ({ pagesCount, currentPage }) => {
    const { setPrevPage, setNextPage, setPage } = filterSlice.actions;
    const dispatch = useAppDispatch();

    //Если количество страниц продуктов меньше двух, отображение пагинации
    //не имеет смысла
    if (pagesCount <= 1) return <></>;

    return (
        <nav aria-label="Page navigation">
            <ul className="pagination justify-content-center">
                <li
                    className={
                        currentPage === 1 ? 'page-item disabled' : 'page-item'
                    }
                >
                    <button
                        className="page-link link-secondary"
                        onClick={() => {
                            dispatch(setPrevPage());
                            window.scrollTo(0, 0);
                        }}
                    >
                        Назад
                    </button>
                </li>
                {Array.from({ length: pagesCount }, (_, i) => i + 1).map(
                    (number) => (
                        <li
                            key={number}
                            className={
                                currentPage === number
                                    ? 'page-item active'
                                    : 'page-item'
                            }
                        >
                            <button
                                className="page-link link-secondary"
                                onClick={() => {
                                    dispatch(setPage(number));
                                    window.scrollTo(0, 0);
                                }}
                            >
                                {number}
                            </button>
                        </li>
                    )
                )}
                <li
                    className={
                        currentPage === pagesCount
                            ? 'page-item disabled'
                            : 'page-item'
                    }
                >
                    <button
                        className="page-link link-secondary"
                        onClick={() => {
                            dispatch(setNextPage());
                            window.scrollTo(0, 0);
                        }}
                    >
                        Вперед
                    </button>
                </li>
            </ul>
        </nav>
    );
};

export default Pagination;
