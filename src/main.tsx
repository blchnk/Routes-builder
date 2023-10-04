import ReactDOM from 'react-dom/client';
import App from './components/app/App.tsx';
import './style/index.scss';
import { Provider } from 'react-redux';
import { store } from './store/store.ts';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
      <App />
  </Provider>
);
