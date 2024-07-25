const Loading = () => {
    return (
        <div
            style={{
                position: 'absolute',
                top: 'calc(50% - 22px)',
                left: 'calc(50% - 22px)',
            }}
        >
            <div className="m-1 spinner-border text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    );
};

export default Loading;
