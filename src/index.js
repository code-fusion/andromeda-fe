import React from 'react';
import {render} from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';

import './reset.css';
import './index.scss';
import App from './App';

import store from './store';

const rootElement = document.getElementById('root');

render(
	<Provider store={store}>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</Provider>
	, rootElement);

registerServiceWorker();
