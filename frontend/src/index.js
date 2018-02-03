import React from 'react';
import ReactDOM from 'react-dom';
import './style/index.css';
import App from './App';
import './style/sketchy-bootstrap.css';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom';
import {createStore, applyMiddleware} from 'redux';
import reducer from './reducers';
import { Provider } from 'react-redux';
import thunk from "redux-thunk";

const store = createStore(
    reducer,
    applyMiddleware(thunk),
    //makes store compatible with redux devtools in chrome
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
    <BrowserRouter>
        {/*provider give all components access to store*/}
        <Provider store={store}>
            <App />
        </Provider>
    </BrowserRouter>, document.getElementById('root'));
registerServiceWorker();
