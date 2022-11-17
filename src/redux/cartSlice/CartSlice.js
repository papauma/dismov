import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { putProductIntoCart } from 'services/productsServices';


export const addProductToCart = createAsyncThunk(
    "CartSlice/addProductToCart",
    async (product, thunkAPI) => {
        const res = await putProductIntoCart(product, thunkAPI)
        if (res.status === 200 && res.statusText === 'OK') {
            return await product
        }
    }
);



export const CartSlice = createSlice({
    name: 'cart',
    initialState: [],
    reducers: {
        addTocart: (state, action) => {            
            state.push(action.payload)
        },
    },
    extraReducers: (builder) => {
        builder.addCase(addTocart, (state, action) => {            
            state.push(action.payload)

        })
        builder.addCase(addProductToCart.fulfilled, (state, action) => {
            // Add user to the state array
            state.push(action.payload);
          })
        .addDefaultCase((state, action) => {})
    }
})

export const {addTocart} = CartSlice.actions
export default CartSlice.reducer