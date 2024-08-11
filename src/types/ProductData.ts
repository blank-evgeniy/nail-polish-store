//Интерфейс данных товаров, получаемых с firestore
interface ProductData {
    id: string;
    title: string;
    section: string;
    description: string;
    color?: string;
    volume?: number;
    effect?: string;
    price: number;
    image: string;
    inStock: boolean;
}

//Интерфейс данных товаров, хранящихся в корзине
//Для соблюдения единого источника истины, храним
//только id товаров, по которым делаем запрос на firestore
export interface CartProductData {
    id: string;
    amount: number;
}

export default ProductData;
