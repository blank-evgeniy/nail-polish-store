import { useMediaQuery } from 'react-responsive';

export const CategoryCardSkeleton = () => {
    return (
        <div className="col-xxl-2 col-xl-3 col-sm-4 col-6 d-flex justify-content-center align-items-stretch">
            <div
                className="card mb-5 p-0 container-fluid"
                style={{ maxWidth: '200px' }}
                aria-hidden="true"
            >
                <div
                    className="rounded-0"
                    style={{
                        width: '100%',
                        height: '196px',
                        background: 'gray',
                    }}
                ></div>
                <div className="card-body container-fluid">
                    <h6 className="card-title placeholder-glow text-center">
                        <span className="placeholder col-6"></span>
                    </h6>
                </div>
            </div>
        </div>
    );
};

export const CategoryCardsSkeleton = () => {
    return (
        <>
            {...Array(6)
                .fill(0)
                .map(() => <CategoryCardSkeleton />)}
        </>
    );
};

export const ProductCardSkeleton = () => {
    const isMobile = useMediaQuery({ maxWidth: 767 });

    if (isMobile)
        return (
            <div className="card mb-3">
                <div className="row align-items-center g-0">
                    <div className="col-3">
                        <div
                            className="container-fluid rounded-start"
                            style={{
                                height: '100px',
                                background: 'gray',
                            }}
                        ></div>
                    </div>
                    <div className="col-7">
                        <div className="card-body p-3">
                            <h5 className="card-title fs-6">
                                <span className="placeholder col-6"></span>
                            </h5>
                            <p className="card-text">
                                <span className="placeholder col-6"></span>
                            </p>
                        </div>
                    </div>
                    <button className="col-2 btn-default">
                        <svg
                            viewBox="0 0 512 512"
                            height="48px"
                            width="48px"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M294.1 256L167 129c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.3 34 0L345 239c9.1 9.1 9.3 23.7.7 33.1L201.1 417c-4.7 4.7-10.9 7-17 7s-12.3-2.3-17-7c-9.4-9.4-9.4-24.6 0-33.9l127-127.1z"></path>
                        </svg>
                    </button>
                </div>
            </div>
        );
    return (
        <div className="col-xxl-2 col-xl-3 col-sm-4 col-6">
            <div
                className="card rounded-0 mb-5 p-0 container-fluid"
                style={{ maxWidth: '200px' }}
            >
                <div
                    className="rounded-0"
                    style={{
                        width: '100%',
                        height: '196px',
                        background: 'gray',
                    }}
                ></div>
                <div className="card-body">
                    <h6 className="card-title placeholder-glow">
                        <span className="placeholder col-10"></span>
                    </h6>
                    <span className="placeholder col-6"></span>
                    <span className="placeholder col-6"></span>
                    <span className="placeholder col-6"></span>
                    <span className="placeholder col-6"></span>
                    <span className="placeholder col-6"></span>
                </div>
                <ul
                    className="list-group list-group-flush"
                    style={{ fontSize: '0.75rem' }}
                >
                    <li className="list-group-item">
                        <span className="placeholder col-6"></span>
                    </li>
                    <li className="list-group-item">
                        <span className="placeholder col-6"></span>
                    </li>
                    <li className="list-group-item">
                        <span className="placeholder col-6"></span>
                    </li>
                </ul>
                <div className="card-body text-center">
                    <p className="card-text fw-bolder fs-5">
                        <span className="placeholder col-6"></span>
                    </p>
                    <button className="btn btn-secondary">В корзину</button>
                </div>
            </div>
        </div>
    );
};

export const ProductCardsSkeleton = () => {
    return (
        <>
            {...Array(6)
                .fill(0)
                .map(() => <ProductCardSkeleton />)}
        </>
    );
};

export const CartItemSkeleton = () => {
    return (
        <div className="card mb-3">
            <div className="row g-0 align-items-center">
                <div className="col-md-2 col-3 text-center">
                    <div
                        className="img-fluid rounded-start"
                        style={{
                            width: '100%',
                            height: '140px',
                            background: 'gray',
                        }}
                    ></div>
                </div>
                <div className="col-md-7 col-9 fs-6 align-content-center">
                    <div className="card-body">
                        <h5 className="card-title placeholder-glow">
                            <span className="placeholder col-6"></span>
                        </h5>
                        <p className="card-text placeholder-glow">
                            <span className="placeholder col-2"></span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};
