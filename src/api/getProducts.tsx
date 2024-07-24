import {
    collection,
    getDocs,
    limit,
    Query,
    query,
    where,
} from 'firebase/firestore';
import ProductData from '../types/ProductData';
import { db } from '../firebaseConfig';

export const getProducts = async (count: number, section: string) => {
    const q = query(
        collection(db, 'products-demo'),
        where('category', '==', section),
        limit(count)
    ) as Query<ProductData>;

    const docs = await getDocs(q);

    if (docs.empty) {
        throw Error('Данные не найдены');
    }

    const newData: ProductData[] = [];

    docs.forEach((doc) => {
        newData.push({
            ...doc.data(),
            id: doc.id,
        });
    });

    return newData;
};
