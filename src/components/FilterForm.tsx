import React from 'react';
import ProductData from '../types/ProductData';
import SearchInput from './SearchInput';
import getUniqueValues from '../auxiliary/getUniqueValues';
import { filterSlice } from '../store/reducers/filterSlice';
import { useAppDispatch, useAppSelector } from '../hooks/redux';

//Форма с селекторами для фильтрации товаров

interface SelectorsFormProps {
    data: ProductData[] | undefined;
}

const FilterForm: React.FC<SelectorsFormProps> = ({ data }) => {
    const { volumeFilter, colorFilter } = useAppSelector(
        (state) => state.filter
    );
    const { updateVolumeFilter, updateColorFilter } = filterSlice.actions;
    const dispatch = useAppDispatch();

    //С помощью вспомогательной функции получаем списоку уникальных значений
    //цвета и объема, чтобы отобразить их как варианты выпадающих списков

    const volumeValues = data
        ? getUniqueValues(data.map((item) => item.volume))
        : [];
    const colorValues = data
        ? getUniqueValues(data.map((item) => item.color))
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
                        value={volumeFilter}
                        onChange={(event) =>
                            dispatch(updateVolumeFilter(event.target.value))
                        }
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
                        value={colorFilter}
                        onChange={(event) =>
                            dispatch(updateColorFilter(event.target.value))
                        }
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
