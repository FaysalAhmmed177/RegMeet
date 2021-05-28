import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import AllFriends from "./Components/Friends/AllFriends/AllFriends";
import Home from "./Components/Home/Home.js/Home";
import Navbar from "./Components/Home/Navbar/Navbar";
import AllMessages from "./Components/Messages/AllMessages/AllMessages";
import AllNotifications from "./Components/Notifications/AllNotifications/AllNotifications";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/friends">
          <AllFriends />
        </Route>
        <Route path="/notifications">
          <AllNotifications />
        </Route>
        <Route path="/messages">
          <AllMessages />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
