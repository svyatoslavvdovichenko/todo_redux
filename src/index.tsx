import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { HashRouter } from "react-router-dom";
import { store } from 'store';
import App from './App';
import './index.css';


ReactDOM.render(
  <HashRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </HashRouter>,
  document.getElementById('root')
);