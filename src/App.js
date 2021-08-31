import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Read from "./components/Read/Read";
import Nav from "./components/Nav/Nav";
import NotFound from "./components/NotFound/NotFound";
import Create from "./components/Create/Create";
import { UserProvider } from "./components/UserContext/UserContext";
import Delete from "./components/Delete/Delete";
import Edit from "./components/Edit/Edit";

function App() {
  return (
    
    <UserProvider> 
    
      <div className="app">
        <Nav/>
        <hr/>
        <hr/>
        <Router>
          <Switch>
            <Route path="/create">
              
              <Create />
            </Route>
            <Route path="/read/:length">
              <Read />
            </Route>
            <Route path="/edit/:length">
              <Edit />
            </Route>
            <Route path="/delete/:length">
              <Delete />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </Router>
      </div>
    </UserProvider>
  );
}

export default App;
