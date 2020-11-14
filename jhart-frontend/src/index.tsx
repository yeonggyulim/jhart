import * as React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer, { rootSaga } from './modules';
import './sass/main.scss';
import App from './router';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
	rootReducer,
	composeWithDevTools(applyMiddleware(sagaMiddleware)),
);

sagaMiddleware.run(rootSaga);

// TODO: app 시작할 때, dispatch해서 category 가져온 후에 헤더 렌더링 구현 필요

const rootElement: HTMLElement = document.getElementById('app');

render(
	<Provider store={store}>
		<App />
	</Provider>,
	rootElement,
);
