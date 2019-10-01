import { reducers } from '../reducers/reducers';
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';

export const store = createStore(reducers, applyMiddleware(thunk));