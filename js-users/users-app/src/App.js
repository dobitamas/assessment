import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import AddUser from "./components/AddUser";
import EditUser from "./components/EditUser";
import UserList from "./components/UserList";
import "./style/App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={UserList} />
        <Route exact path="/new" component={AddUser} />
        <Route exact path="/edit/:userId" component={EditUser} />
      </Router>
    </div>
  );
}

export default App;
