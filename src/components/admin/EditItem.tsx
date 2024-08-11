import React, { useRef, useState } from 'react';
import ProductData from '../../types/ProductData';
import { pushProduct } from '../../api/postData';
import deleteData from '../../api/deleteData';

//Форма изменения продукта в firestore с возможностью
//удаления, изменения цены и наличия
//Перенагруженный компонент, но весь функционал тесно связан
//декомпозиция под вопросом

interface EditItemProps {
    item: ProductData;
}

const EditItem: React.FC<EditItemProps> = ({ item }) => {
    const [inputError, setInputError] = useState<string | null>(null);
    const [isDeleted, setIsDeleted] = useState<boolean>(false);

    const inputPrice = useRef<null | HTMLInputElement>(null);
    const inputInStock = useRef<null | HTMLInputElement>(null);

    const handleUpdate = () => {
        if (!inputPrice.current?.value) {
            setInputError('Введите значение');
            return;
        }
        if (isNaN(Number(inputPrice.current?.value))) {
            setInputError('Введите правильное значение');
            return;
        }

        const newItem = {
            ...item,
            price: parseInt(inputPrice.current.value, 10),
            inStock: inputInStock.current!.checked,
        };

        pushProduct(newItem);
        setInputError(null);
        setIsDeleted(false);
    };

    const handleDelete = () => {
        if (
            confirm(`Вы действительно хотите удалить продукт "${item.title}"?`)
        ) {
            deleteData('products-demo', item.id);
            setIsDeleted(true);
        }
    };

    return (
        <div className="accordion-item">
            <h2 className="accordion-header">
                <button
                    className={
                        isDeleted
                            ? 'accordion-button text-decoration-line-through'
                            : 'accordion-button'
                    }
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target={`#collapse_${item.id}`}
                    aria-expanded="true"
                    aria-controls={`collapse_${item.id}`}
                >
                    {item.id + ' | ' + item.title}
                </button>
            </h2>
            <div
                id={`collapse_${item.id}`}
                className="accordion-collapse collapse"
                data-bs-parent="#accordionEdit"
            >
                <div className="accordion-body">
                    <div className="input-group mb-2">
                        <label
                            className="input-group-text"
                            htmlFor={`input_${item.id}_price`}
                        >
                            Цена
                        </label>
                        <input
                            ref={inputPrice}
                            type="text"
                            defaultValue={item.price}
                            className="form-control"
                            aria-label="Sizing example input"
                            aria-describedby={`input_${item.id}_price`}
                            id={`input_${item.id}_price`}
                        />
                    </div>
                    {inputError && (
                        <div className="form-text text-danger">
                            {inputError}
                        </div>
                    )}

                    <div className="input-group mb-2">
                        <div className="form-check fs-6">
                            <label
                                className="form-check-label"
                                htmlFor={`inStockCheck_${item.id}`}
                            >
                                В наличии
                            </label>
                            <input
                                ref={inputInStock}
                                className="form-check-input"
                                style={{ backgroundColor: 'purple' }}
                                type="checkbox"
                                defaultChecked={item.inStock}
                                id={`inStockCheck_${item.id}`}
                            />
                        </div>
                    </div>

                    <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                        <button
                            className="btn btn-primary me-md-2"
                            onClick={handleUpdate}
                        >
                            {isDeleted ? 'Восстановить' : 'Обновить'}
                        </button>
                        <button
                            className="btn btn-primary"
                            onClick={handleDelete}
                            disabled={isDeleted}
                        >
                            Удалить
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EditItem;
