import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import reducers from './reducers/reducers';

//El estado inicial tiene que tener los mismos campos que combine reducers
const initialState = {
};

const store = createStore(reducers,initialState,applyMiddleware(thunk));

export default store;