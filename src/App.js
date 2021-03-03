import './App.css';
import { Route, Switch } from 'react-router-dom';
import Hello from './pages/Hello';
import Home from './pages/Home';

function App () {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/Hello" component={Hello} />
    </Switch>
  );
}

export default App;
