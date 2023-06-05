import { createSlice } from '@reduxjs/toolkit';

const emailSlice = createSlice({
  name: 'email',
  initialState: {
    email: null,
  },
  reducers: {
    setEmail: (state, action) => {
      state.email = action.payload;
    },
  },
});

export const { setEmail } = emailSlice.actions;
const emailReducer = emailSlice.reducer;
export default emailReducer
