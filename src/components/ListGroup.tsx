import { useState } from "react";

interface Props {
  list: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

function ListGroup({ list, heading, onSelectItem }: Props) {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <h1>{heading}</h1>
      {list.length === 0 && <p>No items found.</p>}
      <ul className="list-group">
        {list.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
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
