import ReduxThunk from 'redux-thunk';
import {QuanLyNguoiDungReducer} from './Reducer/QuanLyNguoiDungReducer'
import { LoadingReducer } from "./Reducer/LoadingReducer"; 
import { applyMiddleware, combineReducers, createStore } from "redux";

import { BannelReducer } from './Reducer/BannelReducer';
import { QuanLyPhimReducer } from './Reducer/PhimReducer';
import { QuanLyXuatChieuReducer } from './Reducer/QuanLyXuatChieuReducer'
import {QuanLyDatVeReducer} from './Reducer/QuanLyDatVeReducer'
const rootReducer = combineReducers({
    BannelReducer,
    QuanLyPhimReducer,
    QuanLyXuatChieuReducer,
    QuanLyNguoiDungReducer,
    LoadingReducer,
    QuanLyDatVeReducer,
});

export const store = createStore(
    rootReducer,
    applyMiddleware(ReduxThunk),
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);