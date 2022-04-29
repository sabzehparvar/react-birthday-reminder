import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import List from "./List";
import data from "./data";

const App = () => {
  const [people, setPeople] = useState(data);

  return (
    <>
      <div className="container p-5 birthday-card ">
        <div className="card mt-5">
          <h4 className=" card-body text-center birthday" dir="rtl">
            {people.length !== 0
              ? `امروز ${people.length} تولد داریم`
              : `امروز هیچ تولدی نداریم`}
          </h4>
          <div className=" card-body border-top ">
            <List people={people} handleDelete={handleDelete}></List>
          </div>

          <div className="text-center">
            <button
              onClick={() => {
                setPeople([]);
              }}
              className="btn btn-md btn-warning shadow p-2 w-75 mb-5"
            >
              حذف کردن همه
            </button>
          </div>
        </div>
      </div>
    </>
  );

  function handleDelete(user) {
    const id = user.id;
    const users = [...people];

    const newUsers = users.filter((user) => {
      return user.id !== id;
    });
    setPeople(newUsers);
  }
};

export default App;
