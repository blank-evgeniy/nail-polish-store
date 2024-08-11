//Спиннер для ленивой загрузки

const Loading = () => {
    return (
        <div className="position-absolute top-50 start-50 translate-middle">
            <div className="m-1 spinner-border text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    );
};

export default Loading;
