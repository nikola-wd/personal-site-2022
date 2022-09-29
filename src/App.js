import ReactGA from 'react-ga';
import './App.scss';
import Home from './pages/Home/Home';

const TRACKING_ID = 'UA-57406789-1';

ReactGA.initialize(TRACKING_ID);

function App() {
  return <Home />;
}

export default App;
