import { collection, getDocs, Query, query, where } from 'firebase/firestore';
import ProductData from '../types/ProductData';
import { db } from '../firebaseConfig';

export const getProducts = async (section: string) => {
    const q = query(
        collection(db, 'products-demo'),
        where('category', '==', section)
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
