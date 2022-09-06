import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getorders } from './orderAPI';

// State - data (init)
const initialState = {
    orders: []
};

export const getordersAsync = createAsyncThunk(
    'order/getorders',
    async () => {
        const response = await getorders();
        return response.data;
    }
);

export const orderSlice = createSlice({
    name: 'order',
    initialState,
    reducers: {
        addToCart:(state,action)=>{
            console.log(state.orders)
        }
    },
    //  async  (3)
    //   happens when async done - callback
    extraReducers: (builder) => {
        builder
            .addCase(getordersAsync.fulfilled, (state, action) => {
                console.log(action.payload)
                state.orders= action.payload
            });
    },
});

// export sync method
export const { addToCart } = orderSlice.actions;

// export any part of the state
export const selectorders = (state) => state.order.orders;
// export the reducer to the applicaion
export default orderSlice.reducer;
