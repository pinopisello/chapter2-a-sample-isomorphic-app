import React from 'react';
import ReactDOM from 'react-dom/server';
import { Provider } from 'react-redux';
import initRedux from '../init-redux';
import * as actions from '../action-creators';
import HTML from '../components/html'
import App from '../components/app'

//E' un express middleware!
export default function renderView(req, res, next) {

//inizializzo redux store con reducers in recipe-reducer.es6
const store = initRedux();

//homepagedataaction e' una function(dispatch, getState) dato che ho creato store con redux-thunk
let homepagedataaction = actions.getHomePageData();

let dispatchedAction= store.dispatch(homepagedataaction);


    //Una volta che lo sore ricevuto dati prelevo lo state e lo rendo disponibile
    // ai components che lo usano, <App> in questo caso
    dispatchedAction.then(() => {
    const dataToSerialize = store.getState();
    
    console.log("data to serialize", dataToSerialize)
    // apphtml = <App/> rendered come string
    //E' il rendering iniziale che fornisce il DOM iniziale ma e' statico.
    //Il codice browser.js creato da webpack crea React components 
    //capaci di reagire eventi e modifare DOM in base al virtual DOM state
    let apphtml = ReactDOM.renderToString(
      <Provider store={store}>
        <App />
      </Provider>
    );

    //La view finale e' <HTML> che e' scheletro html, head, body e visualizza
    //apphtml ed include browser.js dato da webpack
    const renderedHTML = ReactDOM.renderToString(
      <HTML data={`window.__INITIAL_STATE =
        ${JSON.stringify(dataToSerialize)}`}
            html={apphtml} />
    )
    res.send(renderedHTML)

  });
}
