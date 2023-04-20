import './App.css';
// import CityMap from './components/CityMap/CityMap';
import CityLayout from './components/CityMapLayout/CityLayout';
import { Provider } from 'react-redux';
import store from './store/store';
import Shapes from './Shapes';

function App() {
  return (
    <Provider store={store}>
      <CityLayout/>
      {/* <Shapes></Shapes> */}
    </Provider>
  );
}

export default App;
