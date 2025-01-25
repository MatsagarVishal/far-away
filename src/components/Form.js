export default function Form() {
  return (
    <div className="form">
      <span>what do you need for trip??😊</span>
      <form>
        <select>
          <option value="1" key="">
            1
          </option>
        </select>
        <input type="text" placeholder="Enter Item" value="" />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}
