import React from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import "./App.scss";
import Main from "./containers/Main";
import BlogPost from "./containers/blogs/BlogPost";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/blog/:slug" component={BlogPost} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
