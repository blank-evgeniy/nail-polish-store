import {
    collection,
    doc,
    getDoc,
    getDocs,
    Query,
    query,
} from 'firebase/firestore';
import { db } from '../firebaseConfig';

export const getDocsQuery = async <T,>(collectionName: string) => {
    const q = query(collection(db, collectionName)) as Query<T>;
    const docs = await getDocs(q);

    if (docs.empty) {
        throw Error('Данные не найдены');
    }

    const newData: T[] = [];

    docs.forEach((doc) => {
        newData.push({
            ...doc.data(),
            id: doc.id,
        });
    });

    return newData;
};

export const getDocQuery = async <T,>(path: string, id: string) => {
    const docRef = doc(db, path, id);
    const document = await getDoc(docRef);

    if (!document.exists()) {
        throw Error('Данные не найдены');
    }

    return document.data as T;
};
