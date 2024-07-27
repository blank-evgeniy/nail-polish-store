import React from 'react';

interface PaginationProps {
    pagesCount: number;
    currentPage: number;
    onClickNext: () => void;
    onClickPrev: () => void;
    onClickNumber: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
    pagesCount,
    currentPage,
    onClickNext,
    onClickPrev,
    onClickNumber,
}) => {
    if (pagesCount === 1) return <></>;

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
                        onClick={onClickPrev}
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
                                onClick={() => onClickNumber(number)}
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
                        onClick={onClickNext}
                    >
                        Вперед
                    </button>
                </li>
            </ul>
        </nav>
    );
};

export default Pagination;
