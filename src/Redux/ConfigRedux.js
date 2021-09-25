import { applyMiddleware, combineReducers, createStore } from "redux";
import ReduxThunk from 'redux-thunk';
import {QuanLyNguoiDungReducer} from './reducer/QuanLyNguoiDungReducer'
import { LoadingReducer } from "./reducer/LoadingReducer"; 
const rootReducer = combineReducers({
    QuanLyNguoiDungReducer,
    LoadingReducer,
});

export const store = createStore(
    rootReducer,
    applyMiddleware(ReduxThunk),
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);