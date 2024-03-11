import ReactDOM from 'react-dom/client';
import { StrictMode } from 'react';
import App from './App';
import { Provider } from 'react-redux';
import store from './store/configureStore';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <StrictMode>
      <App locale="it" />
    </StrictMode>
  </Provider>
);
