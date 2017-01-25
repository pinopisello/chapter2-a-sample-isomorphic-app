import {
  createStore,
  combineReducers,
  applyMiddleware,
  compose } from 'redux';
import recipes from './recipe-reducer';
import thunkMiddleware from 'redux-thunk';
import promiseMiddleware from 'redux-promise-middleware';


/*Inizializzazione di redux store:
1)setto root reducer 
2)setto Redux Thunk Middleware  [Redux Thunk middleware allows you to write action creators that return a function instead of an action
 The inner function receives the store methods dispatch and getState as parameters.]
3)setto Redux Promise Middleware[Redux promise middleware enables robust handling of async code in Redux. ]
4)creo e ritorno reduxstore con tutti gli above
*/
export default function (initialStore={}) {//se initialStore non e' passato il default value e' {}
  //1 Definisco il root reducer usando recipe-reducer.es6: http://redux.js.org/docs/api/combineReducers.html#combinereducersreducers
  const reducer = combineReducers({
    recipes
  });
  
  //2 https://github.com/gaearon/redux-thunk#motivation
  //3 https://github.com/pburtchaell/redux-promise-middleware#redux-promise-middleware
  //let reduxMiddleware = [promiseMiddleware(), thunkMiddleware]
   let reduxMiddleware = [thunkMiddleware]
 
  
  //http://redux.js.org/docs/api/compose.html#composefunctions
  return compose(
    applyMiddleware(...reduxMiddleware)//http://redux.js.org/docs/api/applyMiddleware.html#applymiddlewaremiddlewares
  )(createStore)(reducer, initialStore);
}
