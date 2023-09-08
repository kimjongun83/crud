import { configureStore } from '@reduxjs/toolkit'
import userReducer from './features/ListUser/listSlice'
import { useDispatch } from 'react-redux'

export const store = configureStore({
  reducer: { user: userReducer }
})

export const useAppDispatch = () => useDispatch();