import * as React from 'react';
import { render } from 'react-dom';
import App from './router';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer, { rootSaga } from './modules';
import { getCategoryListAsync } from './modules/categories';
import GlobalStyle from './styles/global-styles';
import theme from './styles/theme';
import { ThemeProvider } from './styles/themed-components';
import 'antd/dist/antd.css';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
	rootReducer,
	composeWithDevTools(applyMiddleware(sagaMiddleware)),
);

sagaMiddleware.run(rootSaga);

// TODO: app 시작할 때, dispatch해서 category 가져온 후에 헤더 렌더링 구현 필요
(function loadCategory() {
	try {
		store.dispatch(getCategoryListAsync.request(undefined, undefined));
	} catch (e) {
		console.log(`load categories failed ${e}`);
	}
})();

const rootElement: HTMLElement = document.getElementById('app');

render(
	<>
		<GlobalStyle />
		<ThemeProvider theme={theme}>
			<Provider store={store}>
				<App />
			</Provider>
		</ThemeProvider>
	</>,
	rootElement,
);
