import React, { useEffect, useState } from 'react';
import { useAppDispatch } from '../hooks/redux';
import { filterSlice } from '../store/reducers/filterSlice';
import { useDebounce } from 'use-debounce';
import { useLocation } from 'react-router-dom';

const SearchInput = () => {
    const location = useLocation();

    const [searchValue, setSearchValue] = useState<string>('');
    const [debouncedValue] = useDebounce(searchValue, 1000);

    const { searchValueUpdate } = filterSlice.actions;
    const dispatch = useAppDispatch();

    useEffect(() => {
        setSearchValue('');
    }, [location]);

    useEffect(() => {
        dispatch(searchValueUpdate(debouncedValue));
    }, [debouncedValue]);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchValue(event.target.value);
    };

    return (
        <div className="row mb-3">
            <div className="col">
                <div className="input-group mb-3">
                    <span className="input-group-text" id="search-btn">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="bi bi-search"
                            viewBox="0 0 16 16"
                        >
                            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                        </svg>
                    </span>
                    <input
                        type="search"
                        id="search"
                        className="form-control"
                        placeholder="Введите название продукта..."
                        aria-label="Поиск"
                        ria-describedby="search-btn"
                        value={searchValue}
                        onChange={(e) => handleInputChange(e)}
                    />
                </div>
            </div>
        </div>
    );
};

export default SearchInput;
