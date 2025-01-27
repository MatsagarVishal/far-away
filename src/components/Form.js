import { useState } from "react";

export default function Form() {
  const [discription, setDiscription] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    console.log(e.target.itemName.value);
  }

  return (
    <div className="form" onSubmit={(e) => handleSubmit(e)}>
      <span>what do you need for trip??😊</span>
      <form>
        <select>
          {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
            <option value={num} key={num}>
              {num}
            </option>
          ))}
        </select>
        <input
          type="text"
          placeholder="Enter Item"
          onChange={(e) => {setDiscription(e.target.value)}}
          value={discription}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}
