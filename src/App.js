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
import ScienceStall from "./components/pages/ScienceStall";
import FassStall from "./components/pages/FassStall";
import SciencePenyetFood from "./components/pages/SciencePenyetFood";
import FassFishballFood from "./components/pages/FassFishballFood";
import Details from "./components/pages/Details";
import ScienceFoodDetails from "./components/pages/ScienceFoodDetails";
import FassFoodDetails from "./components/pages/FassFoodDetails";
import NotFoundPage from "./components/pages/NotFoundPage";

function App() {
    return (
        <div>
            <Navbar />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/canteens" component={Canteens} />
                <Route path="/about" component={About} />
                <Route path="/details" component={Details} />
                <Route
                    path="/sciencefooddetails"
                    component={ScienceFoodDetails}
                />
                <Route path="/fassfooddetails" component={FassFoodDetails} />
                <Route
                    path="/sciencepenyetfood"
                    component={SciencePenyetFood}
                />
                <Route path="/fassfishballfood" component={FassFishballFood} />
                <Route path="/sciencestall" component={ScienceStall} />
                <Route path="/fassstall" component={FassStall} />
                <Route component={NotFoundPage} />
            </Switch>
            <Footer />
        </div>
    );
}

export default App;
