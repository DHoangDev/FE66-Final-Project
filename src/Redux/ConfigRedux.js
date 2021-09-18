import { applyMiddleware, combineReducers, createStore } from "redux";
import ReduxThunk from 'redux-thunk';

const rootReducer = combineReducers({

});

export const store = createStore(
    rootReducer,
    applyMiddleware(ReduxThunk),
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);