export const CategoryCardSkeleton = () => {
    return (
        <div className="col-xxl-2 col-xl-3 col-sm-4 col-6 d-flex justify-content-center align-items-stretch">
            <div
                className="card rounded-4 mb-5 p-0 container-fluid"
                style={{ maxWidth: '200px' }}
                aria-hidden="true"
            >
                <div
                    className="rounded-top-4"
                    style={{
                        width: '100%',
                        height: '196px',
                        background: 'gray',
                    }}
                ></div>
                <div className="card-body container-fluid">
                    <h6 className="card-title placeholder-glow">
                        <span className="placeholder col-6"></span>
                        <span className="placeholder col-6"></span>
                        <span className="placeholder col-6"></span>
                        <span className="placeholder col-6"></span>
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
            <CategoryCardSkeleton />
            <CategoryCardSkeleton />
            <CategoryCardSkeleton />
            <CategoryCardSkeleton />
            <CategoryCardSkeleton />
            <CategoryCardSkeleton />
            <CategoryCardSkeleton />
            <CategoryCardSkeleton />
            <CategoryCardSkeleton />
            <CategoryCardSkeleton />
            <CategoryCardSkeleton />
            <CategoryCardSkeleton />
            <CategoryCardSkeleton />
            <CategoryCardSkeleton />
            <CategoryCardSkeleton />
            <CategoryCardSkeleton />
        </>
    );
};
