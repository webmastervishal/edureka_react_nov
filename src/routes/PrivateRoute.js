import React from "react";
import Cookies from "js-cookie";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = (props) => {
  const access_token = Cookies.get("token");
  const isAuthenticated = !!access_token;

  console.log("isAuthenticated", isAuthenticated);

  //   props = {
  //     component: "",
  //     path: "/dashboard"
  //   }

  if (isAuthenticated) {
    //allow user to access the page/route
    return <Route {...props} />;
    //<Route path="/dashboard" component="" />
  } else {
    //redirect user to login page
    return <Redirect to="/" />;
  }
};

export default PrivateRoute;

// const obj = {
//     name: 'vishal',
//     age: 33,
//     city: 'pune'
// }

// const newObj = {name: obj.name}
// const newnewObj = {city: obj.city}
