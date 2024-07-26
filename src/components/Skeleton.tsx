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
