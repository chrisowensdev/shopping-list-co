
import './App.css';
import { Switch, Route} from 'react-router-dom';

import {Header} from './layout/Header';
import List from './components/List';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
          <Route exact path="/" component={List} />
      </Switch>
    </div>
  );
}

export default App;
