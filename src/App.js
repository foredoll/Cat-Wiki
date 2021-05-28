import "./App.scss";
import {
   BrowserRouter as Router,
   Switch,
   Route,
   Link,
   Redirect,
} from "react-router-dom";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import SingleCat from "./pages/SingleCat";
import Top10 from "./pages/Top10";
import Errors from "./pages/Errors";

function App() {
   return (
      <div className="App">
         <Router>
            <Link to="/">
               <img
                  src="/CatwikiLogo.svg"
                  className="header__logo"
                  alt=""
               />
            </Link>
            <Switch>
               <Route path="/cats/:catName/:catId" exact>
                  <SingleCat />
               </Route>

               <Route path="/top10">
                  <Top10 />
               </Route>

               <Route path="/" exact>
                  <Home />
               </Route>
               <Route path="/error" exact>
                  <Errors />
               </Route>
               <Redirect strict from="/" to="/error" />
            </Switch>
            <Footer />
         </Router>
      </div>
   );
}

export default App;
