import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../app/store';

interface UserState {
  uid: number,
  name: string,
  age: number,
  func: () => void,
}

const initialState: UserState = {
  uid: -1,
  name: '',
  age: -1,
  func: {} as (() => void)
};

export const userSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    login: (state) => {
      state.func = () => window.alert('Hello world')
    }
  },
});

export const { login } = userSlice.actions;

export const selectUser = (state: RootState) => state.user;

export default userSlice.reducer;
