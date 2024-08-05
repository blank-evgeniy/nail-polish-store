import { useEffect, useState } from 'react';

const useTextReader = () => {
    const [file, setFile] = useState<File | null | undefined>(null);
    const [fileText, setFileText] = useState<string | null>(null);

    useEffect(() => {
        let fileReader = null;
        let isCancel = false;

        if (file) {
            fileReader = new FileReader();
            fileReader.onload = (event) => {
                const result = event?.target?.result;
                if (result && !isCancel) {
                    setFileText(result as string);
                }
            };
            fileReader.readAsText(file);
        }

        return () => {
            isCancel = true;
            if (fileReader && fileReader.readyState === 1) {
                fileReader.abort();
            }
        };
    }, [file]);

    return { fileText, setFile };
};

export default useTextReader;
