import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import List from './List';
import data from "./data";


const App = () => {
  const [people, setPeople] = useState(data);
  return ( <>
    <div className="container p-5 birthday-card ">
      <div className="card mt-5">
        <h4 className=" card-body text-center text-capitalize birthday">birthdays today</h4>
        <div className=" card-body border-top "><List people={people}></List></div>
        
        <div className="text-center">
          <button
            onClick={() => {
              console.log("hiii");
            }}
            className="btn btn-md btn-warning shadow p-2 w-75 mb-5"
          >
            clear all
          </button>
        </div>
      </div>
    </div>
  </> );
}
 
export default App;
