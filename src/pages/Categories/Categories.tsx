import { Link } from 'react-router-dom';

const categories = [
    {
        title: 'Базы',
        link: 'basy',
    },
    {
        title: 'Топы',
        link: 'topy',
    },
];

const Categories = () => {
    return (
        <div className="container-lg">
            <h1 className="text-center my-5">Категории товаров</h1>
            <div className="row">
                {categories.map((category) => (
                    <div className="col-md-3">
                        <div
                            className="card mb-4 flex-d flex-column align-items-center"
                            style={{ width: '240px' }}
                        >
                            <img
                                src="basy.jpg"
                                className="mt-3"
                                style={{ width: '200px', height: '200px' }}
                            ></img>
                            <div className="card-body">
                                <h5 className="card-title text-center">
                                    {category.title}
                                </h5>
                                <Link
                                    to={`/categories/${category.link}`}
                                    className="btn btn-primary"
                                >
                                    Перейти к категории
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Categories;
