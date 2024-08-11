import React from 'react';
import { pushProducts } from '../../api/postData';
import useJSONReader from '../../hooks/useTextReader';

//Поле для вставки JSON файла
//TODO: сделать валидацию файла, чтобы быть уверенным
//что в бд поступают продукты правильного формата

const FileInput = () => {
    const { fileText, setFile } = useJSONReader();

    const handleFileLoad = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files![0];
        if (!file.type.match('json')) {
            alert('Тип файла не соотвествует. Выберите файл JSON');
            event.target.value = '';
            return;
        }
        setFile(file);
    };

    const handleSendFile = () => {
        if (!fileText) {
            return;
        }

        const data = JSON.parse(fileText);
        pushProducts(data);
    };
    return (
        <div className="input-group mb-3">
            <label className="input-group-text" htmlFor="inputFile">
                Загрузить JSON
            </label>
            <input
                type="file"
                accept="application/JSON"
                className="form-control"
                id="inputFile"
                onChange={handleFileLoad}
            />
            <button
                className="btn-secondary btn"
                disabled={!fileText}
                onClick={handleSendFile}
            >
                Отправить
            </button>
        </div>
    );
};

export default FileInput;
