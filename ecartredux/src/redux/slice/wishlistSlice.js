import { createSlice } from "@reduxjs/toolkit";

export const wishlistSlice = createSlice({
    name: 'wishlist',
    initialState: [],
    reducers: {
        addWishList: (state, action) => {
            if (state.find((item) => item.id == action.payload.id)) {
                alert('Item already in your wishlist.')
            } else {
                state.push(action.payload)

            }
        },
        removeWishlistItem: (state, action) => {
            return state.filter((item) => item.id != action.payload)
        }
    }
})
export const { addWishList, removeWishlistItem } = wishlistSlice.actions
export default wishlistSlice.reducer