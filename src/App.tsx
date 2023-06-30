import './i18next/config';
import './App.css';
import {BrowserRouter} from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './Redux/store';
import { Router } from './Router/Router';
import { Header } from './components/Header';

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <div className='Header'>
          <div className='Container'>
            <Header/>
          </div>
        </div>
        <div className='Content'>
          <div className='Container'>
            <Router/>
          </div>
        </div>
        <div className='Footer'>
          <div className='Container'>

          </div>
        </div>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
