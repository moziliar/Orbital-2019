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
import AddContent from "./components/pages/AddContent";
import SciencePenyetFood from "./components/pages/SciencePenyetFood";
import Details from "./components/pages/Details";
import FoodDetails from "./components/pages/FoodDetails";
import Stalls from "./components/pages/Stalls";
import NotFoundPage from "./components/pages/NotFoundPage";
import Search from "./Search"

function App() {
    return (
        <div>
            <Navbar />
            <Switch>
                <Route exact path="/" component={ Home } />
                <Route path="/canteens" component={ Canteens } />
                <Route path="/about" component={ About } />
                <Route path="/addcontent" component={ AddContent } />
                <Route path="/details" component={ Details } />
                <Route
                    path="/food/:food"
                    component={ FoodDetails }
                />
                <Route
                    path="/stall/:stall"
                    component={ SciencePenyetFood }
                />
                <Route path="/stalls/:handle" component={ Stalls } />
                <Route path="/search" component={ Search } />
                <Route component={NotFoundPage} />
            </Switch>
            <Footer />
        </div>
    );
}

export default App;
