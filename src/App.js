import './App.css';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Hello from './pages/Hello';

function App () {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/hello-world" component={Hello} />
    </Switch>
  );
}

export default App;