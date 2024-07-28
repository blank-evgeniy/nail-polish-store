import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import ProductData from '../../types/ProductData';

interface CartProduct extends ProductData {
    amount: number;
}

export interface CartState {
    cart: CartProduct[];
    totalPrice: number;
}

const initialState: CartState = {
    cart: [],
    totalPrice: 0,
};

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addedProductToBasket(state, action: PayloadAction<ProductData>) {
            const index = state.cart.findIndex(
                (product) => product.id === action.payload.id
            );

            state.totalPrice += action.payload.price;

            if (index >= 0) {
                state.cart[index].amount++;
            } else {
                state.cart.push({ ...action.payload, amount: 1 });
            }
        },
        removeProductToBasket(state, action: PayloadAction<ProductData>) {
            const index = state.cart.findIndex(
                (product) => product.id === action.payload.id
            );

            if (index >= 0) {
                state.cart.splice(index, 1);
                state.totalPrice -= action.payload.price;
            }
        },
        clearBasket: () => initialState,
    },
});

export default cartSlice.reducer;
