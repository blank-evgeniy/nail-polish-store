import React from 'react';

interface PaginationProps {
    pagesCount: number;
    currentPage: number;
}

const Pagination: React.FC<PaginationProps> = ({ pagesCount, currentPage }) => {
    if (pagesCount === 1) return <></>;

    return (
        <nav aria-label="Page navigation">
            <ul className="pagination justify-content-center">
                <li
                    className={
                        currentPage === 1 ? 'page-item disabled' : 'page-item'
                    }
                >
                    <a className="page-link link-secondary" href="#">
                        Назад
                    </a>
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
                            <a className="page-link link-secondary" href="#">
                                {number}
                            </a>
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
                    <a className="page-link link-secondary" href="#">
                        Вперед
                    </a>
                </li>
            </ul>
        </nav>
    );
};

export default Pagination;
