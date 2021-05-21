import "./App.scss";
import {
   BrowserRouter as Router,
   Switch,
   Route,
   Link,
} from "react-router-dom";
import Home from "./pages/Home";

function App() {
   return (
      <div className="App">
         <Router>
            <Switch>
               <Route path="/">
                  <Home />
               </Route>
            </Switch>
         </Router>
      </div>
   );
}

export default App;
