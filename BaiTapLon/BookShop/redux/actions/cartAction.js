export const removeItemCart = (idItem) => {
    return {
        type: 'REMOVE_ITEM_FROM_CART',
        id:idItem
    };
};

export const pust_quantity = (idItem,quantityBuy) => {
    return {
        type: 'PUST_QUANTITY',
        id:idItem,
        quantity:quantityBuy,
    };
};

export const minus_quantity = (idItem,quantityBuy) => {
    return {
        type: 'MINUS_QUANTITY',
        id:idItem,
        quantity:quantityBuy,
    };
};
