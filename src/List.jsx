import { useState } from "react";
import data from "./data";

const List = () => {
  const [people, setPeople] = useState(data);
  return (
    <>
      <div>
        {people.map((people,id) => {
          return (
            <>
              <div key={id}>{people.id}</div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default List;
