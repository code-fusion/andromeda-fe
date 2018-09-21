import React from 'react';
import {render} from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';
import { PersistGate } from 'redux-persist/lib/integration/react';

import './reset.css';
import './index.scss';
import App from './App';

import {store, persistor} from './store';

const rootElement = document.getElementById('root');

render(
	<Provider store={store}>
		<PersistGate loading={null} persistor={persistor}>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</PersistGate>
	</Provider>
	, rootElement);

registerServiceWorker();
