import ReduxThunk from 'redux-thunk';
import {QuanLyNguoiDungReducer} from './Reducer/QuanLyNguoiDungReducer'
import { LoadingReducer } from "./Reducer/LoadingReducer"; 
import { applyMiddleware, combineReducers, createStore } from "redux";

import { BannelReducer } from './Reducer/BannelReducer';
import { QuanLyXuatChieuReducer } from './Reducer/QuanLyXuatChieuReducer'

const rootReducer = combineReducers({
    BannelReducer,
    QuanLyXuatChieuReducer,
    QuanLyNguoiDungReducer,
    LoadingReducer,
});

export const store = createStore(
    rootReducer,
    applyMiddleware(ReduxThunk),
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);