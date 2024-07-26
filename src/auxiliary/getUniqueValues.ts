const getUniqueValues = (
    listValues: (string | number | undefined)[] | undefined | null
) => {
    if (!listValues) return [];
    return listValues.filter(
        (item, index, array) => array.indexOf(item) === index
    );
};

export default getUniqueValues;
