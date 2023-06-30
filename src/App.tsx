import './i18next/config';
import './App.css';
import {BrowserRouter} from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './Redux/store';
import { Router } from './Router/Router';

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Router/>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
