import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import * as ROUTES from "./constants/routes";
import ScrollToTop from "./helpers/scrollToTop";

import Home from "./pages/home";

export default function App() {
  return (
    <Router>
      <ScrollToTop />
        <Switch>
          <Route path={ROUTES.HOME}>
            <Home />
          </Route>
        </Switch>
    </Router>
  );
}
