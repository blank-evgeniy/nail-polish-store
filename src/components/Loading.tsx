const Loading = () => {
    return (
        <div style={{ position: 'absolute', top: '50%', left: '50%' }}>
            <div className="m-1 spinner-border text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    );
};

export default Loading;
