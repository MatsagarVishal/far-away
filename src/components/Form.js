export default function Form() {
  return (
    <div className="form">
      what do you need for trip??😊
      <form>
        <select>
          <option value="" key="">
            1
          </option>
        </select>
        <input type="text" placeholder="Enter Item" />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}
