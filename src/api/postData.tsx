import { doc, setDoc } from 'firebase/firestore';
import { db } from '../firebaseConfig';
import ProductData from '../types/ProductData';

export function pushProducts(data: ProductData[]) {
    data.forEach((product) => pushProduct(product));
}

export async function pushProduct(element: ProductData) {
    const { id, ...rest } = element;
    setDoc(doc(db, 'products-demo', id), rest);
}
