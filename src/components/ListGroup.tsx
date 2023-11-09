import { useState } from "react";

function ListGroup() {
  let list = ["Red", "Blue", "Green", "Yellow", "Black"];
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <h1>Colours</h1>
      {list.length === 0 && <p>No items found.</p>}
      <ul className="list-group">
        {list.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            onClick={() => setSelectedIndex(index)}
            key={item}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
