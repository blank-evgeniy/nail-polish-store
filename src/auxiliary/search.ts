import ProductData from '../types/ProductData';

const search = (query: string, data: ProductData[] | undefined | null) => {
    if (!data) return [];
    return data.filter((item) =>
        item.title.toLowerCase().includes(query.toLowerCase())
    );
};

export default search;
