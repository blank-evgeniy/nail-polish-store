const AdminHeader = () => {
    return (
        <header>
            <div className="container-fluid bg-secondary py-3">
                <div className="row">
                    <h1 className="text-primary fs-2 col-11">
                        Административная панель
                    </h1>
                    <div className="col-1">
                        <a className="btn btn-primary" href="/">
                            Выйти
                        </a>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default AdminHeader;
