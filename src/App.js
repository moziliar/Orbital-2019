import React from "react";
//import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/layouts/NavBar";
import Footer from "./components/layouts/Footer";
// React Router Import
import { Router, Route} from "react-router-dom";
import createHistory from "history/createBrowserHistory";
// Import Pages
import Home from "./components/pages/Home";
import Canteens from "./components/pages/Canteens";
import About from "./components/pages/About";
import ActualStall from "./components/pages/ActualStall";
import Stalls from "./components/pages/Stalls";
import Stalls2 from "./components/pages/Stalls2";
import Details from "./components/pages/Details";
import FoodDetails from "./components/pages/FoodDetails";
import fassFoodDetails from "./components/pages/fassFoodDetails";
import NotFoundPage from "./components/pages/NotFoundPage";

function App() {
    return (
        <div>
            <Navbar />
                <Router history={createHistory({ basename: process.env.PUBLIC_URL })}>
                    <Route exact path="/" component={Home} />
                    <Route path="/canteens" component={Canteens} />
                    <Route path="/about" component={About} />
                    <Route path="/details" component={Details} />
                    <Route path="/fooddetails" component={FoodDetails} />
                    <Route path="/fassfooddetails" component={fassFoodDetails} />
                    <Route path="/stalls" component={Stalls} />
                    <Route path="/stalls2" component={Stalls2} />
                    <Route path="/actualstall" component={ActualStall} />
                    <Route component={NotFoundPage} />
                </Router>
            <Footer />
        </div>
    );
}

export default App;
