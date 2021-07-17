import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home';
import LeagueDetails from './components/LeagueDetails/LeagueDetails';
import NotFound from './components/NotFound/NotFound';

function App() {
  return (
    <div>
      <Router>
         <Switch>

           <Route exact path="/">
             <Home></Home>
           </Route>

           <Route path="/league/:leagueId">
             <LeagueDetails></LeagueDetails>
           </Route>

           <Route path="/*">
             <NotFound></NotFound>
           </Route>

         </Switch>
       </Router>
    </div>
  );
}

export default App;
