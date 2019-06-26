import React from "react";
//import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/layouts/NavBar";
import Footer from "./components/layouts/Footer";
// React Router Import
import { Switch, Route } from "react-router-dom";
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
            <Switch>
                <Route path="Orbital-2019/" component={Home} />
                <Route path="Orbital-2019/canteens" component={Canteens} />
                <Route path="Orbital-2019/about" component={About} />
                <Route path="Orbital-2019/details" component={Details} />
                <Route path="Orbital-2019/fooddetails" component={FoodDetails} />
                <Route path="Orbital-2019/fassfooddetails" component={fassFoodDetails} />
                <Route path="Orbital-2019/stalls" component={Stalls} />
                <Route path="Orbital-2019/stalls2" component={Stalls2} />
                <Route path="Orbital-2019/actualstall" component={ActualStall} />
                <Route component={NotFoundPage} />
            </Switch>
            <Footer />
        </div>
    );
}

export default App;
