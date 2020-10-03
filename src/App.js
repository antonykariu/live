import React from "react";
import { Switch, Route } from "react-router-dom";

const Home = React.lazy(() => import("./components/Home"));
const NotFound = React.lazy(() => import("./components/NotFound"));

const App = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="*" component={NotFound} />
    </Switch>
  );
};

export default App;
