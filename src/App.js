import "./App.scss";
import {
   BrowserRouter as Router,
   Switch,
   Route,
   Link,
} from "react-router-dom";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import SingleCat from "./pages/SingleCat";

function App() {
   return (
      <div className="App">
         <Router>
            <Switch>
               <Route path="/cats/:catName/:catId">
                  <SingleCat />
               </Route>

               <Route path="/">
                  <Home />
               </Route>
            </Switch>
            <Footer />
         </Router>
      </div>
   );
}

export default App;
