export const CategoryCardSkeleton = () => {
    return (
        <div className="col-xxl-2 col-xl-3 col-sm-4 col-6 d-flex align-items-stretch">
            <div className="card rounded-4 mb-5" aria-hidden="true">
                <img
                    src="/categories/skeleton.jpg"
                    className="card-img-top rounded-top-4"
                    alt="..."
                />
                <div className="card-body">
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
