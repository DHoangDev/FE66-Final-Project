import ReduxThunk from 'redux-thunk';
import { applyMiddleware, combineReducers, createStore } from "redux";

import { BannelReducer } from './Reducer/BannelReducer';
import { QuanLyPhimReducer } from './Reducer/PhimReducer';
import { QuanLyXuatChieuReducer } from './Reducer/QuanLyXuatChieuReducer'
import { QuanLyNguoiDungReducer } from './Reducer/QuanLyNguoiDungReducer'

const rootReducer = combineReducers({
    BannelReducer,
    QuanLyPhimReducer,
    QuanLyXuatChieuReducer,
    QuanLyNguoiDungReducer,
});

export const store = createStore(
    rootReducer,
    applyMiddleware(ReduxThunk),
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);