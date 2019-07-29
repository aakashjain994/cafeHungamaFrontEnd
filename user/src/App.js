import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./components/Home/Home";
import EventDetails from "./widget/Events/EventDetails";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Checkout from "./BookTicket/Checkout";
import {ContextProvider} from './Context';
import BookSlots from "./BookTicket/BookSlots";
function App () {
  return (
    <ContextProvider>
    <div>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/event/:id" component={BookSlots} />
        <Route path="/checkout" component={Checkout} />
      </Switch>
      <div className="Footer">
        <Footer />
      </div>
    </div>
    </ContextProvider>
  );
}

export default App;