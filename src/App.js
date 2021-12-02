import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { createContext } from "react";
import { useState } from "react";
import Home from "./pages/Home";
import AddService from "./components/Service";

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route exact path="/">
           <Home/>
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/addService">
           <AddService/>
          </Route>
         
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
