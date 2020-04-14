import React from "react";
import Nav from "./components/Nav";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Home } from "./container/Home";
import { Course } from "./container/Course";
import { CartItems } from "./container/CartItems";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Nav />
      </div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/course/:course_id" component={Course} />
        <Route path="/cart" component={CartItems} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
