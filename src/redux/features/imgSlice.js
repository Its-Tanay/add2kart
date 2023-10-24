import { createSlice } from '@reduxjs/toolkit';
import img1 from '../../assets/img1.jpg';
import img2 from '../../assets/img2.jpg';
import img3 from '../../assets/img3.jpg';
import img4 from '../../assets/img4.jpg';

const imgSlice = createSlice({
    name: 'bgImg',
    initialState: {
        bgImgs: [img1, img2, img3, img4],
        currentIndex: 0
    },

    reducers:{
        nextImg: (state) => {
            state.currentIndex = (state.currentIndex + 1) % state.bgImgs.length;
        }
    }
});

export const { nextImg } = imgSlice.actions;
export default imgSlice.reducer;