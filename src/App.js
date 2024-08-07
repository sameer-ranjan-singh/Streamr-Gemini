import './App.css';
import Body from "./features/Body"
import appStore from './store/store';
import { Provider } from 'react-redux';

function App() {
  return (
    <Provider store = {appStore}>
      <Body/>
    </Provider>
  );
}

export default App;
