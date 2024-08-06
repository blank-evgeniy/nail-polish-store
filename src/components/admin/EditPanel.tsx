import { useQuery } from 'react-query';
import EditItem from './EditItem';
import { getProducts } from '../../api/getProducts';
import { useState } from 'react';
import { getDocsQuery } from '../../api/getData';
import CategoriesData from '../../types/CategoriesData';

const INITIAL_CATEGORY = 'basy';

const EditPanel = () => {
    const [category, setCategory] = useState<string>(INITIAL_CATEGORY);

    const { data: categories } = useQuery('categories', () =>
        getDocsQuery<CategoriesData>('categories-demo')
    );

    const { data } = useQuery(['products', category], () =>
        getProducts(category)
    );

    return (
        <>
            <div className="dropdown my-3">
                <button
                    className="btn btn-secondary dropdown-toggle"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                >
                    Выберите категорию
                </button>
                <ul className="dropdown-menu">
                    {categories?.map((item) => (
                        <li key={item.id}>
                            <button
                                className="dropdown-item"
                                onClick={() => setCategory(item.id)}
                            >
                                {item.title}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="accordion" id="accordionEdit">
                {data &&
                    data.map((item) => <EditItem key={item.id} item={item} />)}
            </div>
        </>
    );
};

export default EditPanel;
