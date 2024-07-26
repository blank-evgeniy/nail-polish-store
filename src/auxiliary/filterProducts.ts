import ProductData from '../types/ProductData';

const filterProducts = (
    data: ProductData[] | undefined | null,
    volume: string,
    color: string
) => {
    if (!data) return [];
    return data
        .filter((item) => {
            if (volume === 'DEFAULT' || !item.volume) return true;
            return String(item.volume) === volume;
        })
        .filter((item) => {
            if (color === 'DEFAULT' || !item.color) return true;
            return String(item.color) === color;
        });
};

export default filterProducts;
