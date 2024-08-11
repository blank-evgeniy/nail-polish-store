import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import ProductData, { CartProductData } from '../../types/ProductData';

export interface CartState {
    cart: CartProductData[];
    totalPrice: number;
}

const initialState: CartState = {
    cart: sessionStorage.getItem('cart')
        ? JSON.parse(sessionStorage.getItem('cart')!)
        : [],
    totalPrice: sessionStorage.getItem('total-price')
        ? Number(JSON.parse(sessionStorage.getItem('total-price')!))
        : 0,
};

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addProductToBasket(state, action: PayloadAction<ProductData>) {
            const index = state.cart.findIndex(
                (product) => product.id === action.payload.id
            );

            state.totalPrice += action.payload.price;

            if (index >= 0) {
                state.cart[index].amount++;
            } else {
                state.cart.push({ id: action.payload.id, amount: 1 });
            }

            sessionStorage.setItem('cart', JSON.stringify(state.cart));
            sessionStorage.setItem(
                'total-price',
                JSON.stringify(state.totalPrice)
            );
        },
        removeProductFromBasket(state, action: PayloadAction<ProductData>) {
            const index = state.cart.findIndex(
                (product) => product.id === action.payload.id
            );

            if (index >= 0) {
                if (state.cart[index].amount > 1) {
                    state.cart[index].amount--;
                } else {
                    state.cart.splice(index, 1);
                }
                state.totalPrice -= action.payload.price;
            }

            sessionStorage.setItem('cart', JSON.stringify(state.cart));
            sessionStorage.setItem(
                'total-price',
                JSON.stringify(state.totalPrice)
            );
        },
    },
});

export default cartSlice.reducer;
