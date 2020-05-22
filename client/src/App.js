import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./components/Login";
import "./styles.scss";
import ProtectedRoute from './components/ProtectedRoute';
import BubblePage from "./components/BubblePage";

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/login" component={Login} />
        {/*Build a PrivateRoute component that will display BubblePage when you're authenticated */}
        <ProtectedRoute path="/bubblepage" component={BubblePage}/>
      </div>
    </Router>
  );
}

export default App;
