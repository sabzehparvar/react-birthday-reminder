import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import List from './List';

const App = () => {
  return ( <>
    <div className="container p-5 birthday-card ">
      <div className="card mt-5">
        <h4 className=" card-body">5 birthdays today</h4>
        <p className=" card-body border-top "><List></List></p>
        
        <div className="text-center">
          <button
            onClick={() => {
              console.log("hiii");
            }}
            className="btn btn-md btn-primary m-2"
          >
            clear all
          </button>
        </div>
      </div>
    </div>
  </> );
}
 
export default App;
