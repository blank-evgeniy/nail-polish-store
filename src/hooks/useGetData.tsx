//Заменены на обычные асинхронные функции(в папке api) для вызова в useQuery
//данные функции в проекте уже не используются, оставил на всякий случай
import {
    collection,
    doc,
    getDoc,
    getDocs,
    Query,
    query,
} from 'firebase/firestore';
import { db } from '../firebaseConfig';
import { useEffect, useState } from 'react';

export const useGetDoc = <T,>(path: string, id: string) => {
    const [data, setData] = useState<T | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const docRef = doc(db, path, id);
        getDoc(docRef)
            .then((response) => {
                if (!response.exists()) {
                    throw Error('Данные не найдены');
                }
                setIsLoading(false);
                setData(response.data() as T);
                setError(null);
            })
            .catch((error) => {
                setIsLoading(false);
                setError(error.message);
            });
    }, [path, id]);

    return { data, isLoading, error };
};

export const useGetDocs = <T,>(path: string) => {
    const [data, setData] = useState<T[] | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const q = query(collection(db, path)) as Query<T>;
        getDocs(q)
            .then((response) => {
                if (response.empty) {
                    throw Error('Данные не найдены');
                }
                const newData: T[] = [];

                response.forEach((doc) => {
                    newData.push({
                        ...doc.data(),
                        id: doc.id,
                    });
                });

                setIsLoading(false);
                setData(newData);
                setError(null);
            })
            .catch((error) => {
                setIsLoading(false);
                setError(error.message);
            });
    }, [path]);

    return { data, isLoading, error };
};
