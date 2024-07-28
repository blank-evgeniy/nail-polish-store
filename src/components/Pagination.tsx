import React from 'react';
import { useAppDispatch } from '../hooks/redux';
import { filterSlice } from '../store/reducers/filterSlice';

interface PaginationProps {
    pagesCount: number;
    currentPage: number;
}

const Pagination: React.FC<PaginationProps> = ({ pagesCount, currentPage }) => {
    const { setPrevPage, setNextPage, setPage } = filterSlice.actions;
    const dispatch = useAppDispatch();

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
