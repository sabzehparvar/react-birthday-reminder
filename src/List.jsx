const List = ({ people }) => {
  return (
    <>
      {people.map((people) => {
        const { id, first_name, last_name, avatar, age } = people;
        return (
          <>
            <div key={id} className="text-center">
              <img
                src={avatar}
                alt={first_name}
                className=" rounded-circle w-25 shadowb "
              />
              <h5 className="p-1 m-2 shadow-sm name">
                {first_name} {last_name}
              </h5>
              <h6 className="p-1 m-2 shadow-sm age mb-5">{age}</h6>
            </div>
          </>
        );
      })}
    </>
  );
};

export default List;
