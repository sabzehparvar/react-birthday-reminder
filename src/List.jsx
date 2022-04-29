const List = ({ people, handleDelete }) => {
  return (
    <>
      {people.map((people) => {
        const { id, first_name, last_name, avatar, age } = people;
        return (
          <>
            <div key={id} className=" row mb-5">
              <img
                src={avatar}
                alt={first_name}
                className=" rounded-circle shadowb col-4 "
              />
              <div className="col-8 d-flex flex-column mt-1">
                <h5 className=" shadow-sm name ">
                  {first_name} {last_name}
                </h5>
                <h6 className=" shadow-sm age ">{age}</h6>
                <button
                  onClick={() => {
                    handleDelete(people);
                  }}
                  className="btn btn-sm btn-outline-danger"
                >
                  حذف
                </button>
              </div>
            </div>
          </>
        );
      })}
    </>
  );
};

export default List;
