import React from "react";
var data = require("./MOCK_DATA.json");

const Dropdown = (props) => {
  const { value, chipSet, onSearch } = props;
  // flitering the data according to the value enter
  // using slice to get number of chips displayed according the input value
  //and then mapping the data 
  return (
    <>
      <div className="dropdown">
        {data
          .filter((chip) => {
            const searchTerm = value.toLowerCase();
            const fullName = chip.full_name.toLowerCase();

            if (chipSet.has(chip.full_name, chip.image)) {
              return null;
            } else {
              return (
                searchTerm &&
                fullName.startsWith(searchTerm) &&
                fullName !== searchTerm
              );
            }
          })
          .slice(0, 5)
          .map((chip) => (
            <div
              onClick={() => onSearch(chip.full_name, chip.image)}
              className="dropdown-row"
              key={chip.id}
            >
              <div>
                <img
                  src={chip.image}
                  alt=""
                  style={{
                    height: 50,
                    width: 40,
                    borderRadius: "50%",
                  }}
                />
              </div>
              <div className="text">
                <h6>
                  {" "}
                  {chip.full_name}
                  <span className="email">{chip.email} </span>
                </h6>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};
export default Dropdown;