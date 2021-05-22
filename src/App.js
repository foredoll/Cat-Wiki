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
import Top10 from "./pages/Top10";

function App() {
   return (
      <div className="App">
         <Router>
            <img
               src="CatwikiLogo.svg"
               className="header__logo"
               alt=""
            />

            <Switch>
               <Route path="/cats/:catName/:catId">
                  <SingleCat />
               </Route>

               <Route path="/top10">
                  <Top10 />
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
