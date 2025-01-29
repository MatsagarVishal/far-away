import { useState } from "react";

export default function ListItems({ itemList, onItemDelete, onToggle }) {
  const [sortBy, setSortby] = useState("input");
  let sortedList;

  if (sortBy === "input") sortedList = itemList;
  if (sortBy === "description") {
    sortedList = itemList.slice().sort((a, b) => {
      const nameA = a.discription.toUpperCase(); // ignore upper and lowercase
      const nameB = b.discription.toUpperCase(); // ignore upper and lowercase
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }

      // names must be equal
      return 0;
    });
  }

  if (sortBy === "byPacked") {
    sortedList = itemList.slice().sort((a, b) => {
      return Number(a.isPacked) - Number(b.isPacked);
    });
  }
  // console.log(sortlist);

  return (
    <div className="items">
      <div>
        <ul>
          {sortedList.map((item) => {
            return (
              <Item
                item={item}
                onItemDelete={onItemDelete}
                onToggle={onToggle}
                key={item.id}
              />
            );
          })}
        </ul>
      </div>
      <div>
        <select value={sortBy} onChange={(e) => setSortby(e.target.value)}>
          <option value="input">Sort By Input</option>
          <option value="description">Sort By A-Z</option>
          <option value="byPacked">Sort By Packing Status</option>
        </select>
      </div>
    </div>
  );
}

function Item({ item, onItemDelete, onToggle }) {
  function handleDelete(id) {
    onItemDelete(id);
  }
  return (
    <li className={item.isPacked ? "packed" : ""}>
      <input type="checkbox" onChange={() => onToggle(item.id)} />
      <span>{item.quantity}</span>
      {item.discription}
      <button onClick={() => handleDelete(item.id)}>❌</button>
    </li>
  );
}
