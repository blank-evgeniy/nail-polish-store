import React from 'react';
import ProductData from '../types/ProductData';
import SearchInput from './SearchInput';

interface SelectorsFormProps {
    data: ProductData[] | undefined;
}

const FilterForm: React.FC<SelectorsFormProps> = ({ data }) => {
    const volumeValues = data
        ? data
              .map((product) => {
                  return product.volume;
              })
              .filter((product, i, ar) => ar.indexOf(product) === i)
        : [];

    const colorValues = data
        ? data
              .map((product) => {
                  return product.color;
              })
              .filter((product, i, ar) => ar.indexOf(product) === i)
        : [];

    return (
        <div className="container-sm mb-4">
            <SearchInput />

            <div className="row align-items-stretch">
                <div className="col">
                    <p>Выберите объём:</p>
                    <select
                        className="form-select mb-3"
                        aria-label="Объём лака"
                        defaultValue={'DEFAULT'}
                    >
                        <option value="DEFAULT">Все</option>
                        {volumeValues.map((value) => (
                            <option key={value} value={value}>
                                {value} мл
                            </option>
                        ))}
                    </select>
                </div>
                <div className="col">
                    <p>Выберите цвет:</p>
                    <select
                        className="form-select mb-3"
                        aria-label="Цвет лака"
                        defaultValue={'DEFAULT'}
                    >
                        <option value="DEFAULT">Все</option>
                        {colorValues.map((value) => (
                            <option key={value} value={value}>
                                {value}
                            </option>
                        ))}
                    </select>
                </div>
            </div>
        </div>
    );
};

export default FilterForm;
