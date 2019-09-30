import './app/style/main.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './app/reducers/root';
import App from './app/components/app/app';

const template = (
	<Provider store={store}>
	  <App />
	</Provider>
);
ReactDOM.render(template	, document.getElementById('root'));

