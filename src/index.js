/*!

=========================================================
* Paper Kit React - v1.3.0
=========================================================

* Product Page: https://www.creative-tim.com/product/my-blog-frontend

* Copyright 2021 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/my-blog-frontend/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React,{ Suspense } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";

// styles
import "bootstrap/scss/bootstrap.scss";
import "assets/scss/paper-kit.scss?v=1.3.0";
import "assets/demo/demo.css?v=1.3.0";
// pages
import Tag from './components/Content/post-by-tag.js'
import ProfilePage from "views/examples/ProfilePage.js";
import App from "views/App.js"
import PostDetails from "./components/Content/postDetails.js"
ReactDOM.render(

    <Suspense fallback={<>wait a minute</>}>
    <BrowserRouter>
    <Switch>
      {/* add routes with layouts */}
      
      <Route path="/index" exact component={App} />
      <Route path="/docs/:id" exact component={PostDetails} />
      <Route path="/aboutme" exact component={ProfilePage} />
      <Route path="/tag/:id" exact component={Tag}/>
      <Redirect from="*" to="/index" />
    </Switch>
  </BrowserRouter>
    </Suspense>

  ,
  document.getElementById("root")
);