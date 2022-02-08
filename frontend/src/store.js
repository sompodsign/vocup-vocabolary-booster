import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import {
    wordCreateReducer,
    wordListReducer,
} from './redux/reducers/wordReducers'

import {
    userLoginReducer, userRegisterReducer,
} from './redux/reducers/userReducers'

import {
    dictWordReducer,
} from './redux/reducers/dictionaryReducer';

const reducer = combineReducers({
    wordList: wordListReducer,
    createdWord: wordCreateReducer,

    userLogin: userLoginReducer,
    userRegister: userRegisterReducer,

    dictWord: dictWordReducer,

})

const wordItemsFromStorage = localStorage.getItem("wordItems")
  ? JSON.parse(localStorage.getItem("wordItems"))
  : [];

const userInfoFromStorage = localStorage.getItem('userInfo') ?
    JSON.parse(localStorage.getItem('userInfo')) : null

const initialState = {
    word: {
      wordItems: wordItemsFromStorage,
    },
    userLogin: { userInfo: userInfoFromStorage },
  };

const middleware = [thunk]

const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store;
