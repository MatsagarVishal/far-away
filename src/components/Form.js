import { useState } from "react";

export default function Form({ onItemAdd }) {
  const [discription, setDiscription] = useState("");
  const [quantity, setQuantity] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();

    if (!discription) return;

    const newItem = {
      id: Date.now(),
      discription: discription,
      quantity: quantity,
      isPacked: false,
    };
    onItemAdd(newItem);
    // setting input field after submition of form
    setDiscription("");

    // setting input field after submition of form
    setQuantity(1);
  }

  // controlling the Components of ther form

  function handleDescription(e) {
    // setting description to user input
    setDiscription(e.target.value);
  }

  function handleQuantity(e) {
    // setting Quntity to user input
    setQuantity(+e.target.value);
  }

  return (
    <div className="form" onSubmit={handleSubmit}>
      <span>what do you need for trip??😊</span>
      <form>
        <select value={quantity} onChange={handleQuantity}>
          {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
            <option value={num} key={num}>
              {num}
            </option>
          ))}
        </select>
        <input
          type="text"
          placeholder="Enter Item"
          onChange={handleDescription}
          value={discription}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}
