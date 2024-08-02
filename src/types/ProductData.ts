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

export interface CartProductData extends ProductData {
    amount: number;
}

export default ProductData;
