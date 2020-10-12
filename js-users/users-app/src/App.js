import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import UserList from "./components/UserList";

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={UserList} />
      </Router>
    </div>
  );
}

export default App;
