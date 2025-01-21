import "./index.css";

function App() {
  return (
    <div className="App">
      <h1>far away</h1>
      <Form />
      <Items />
      <Footer />
    </div>
  );
}

function Form() {
  return (
    <div>
      <form>
        <select>
          <option value="" key="">
            1
          </option>
          <option value="" key="">
            1
          </option>
          <option value="" key="">
            1
          </option>
          <option value="" key="">
            1
          </option>
          <option value="" key="">
            1
          </option>
          <option value="" key="">
            1
          </option>
          <option value="" key="">
            1
          </option>
          <option value="" key="">
            1
          </option>
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

function Items() {
  return (
    <div>
      <span>item1</span>
      <span>item1</span>
      <span>item1</span>
      <span>item1</span>
    </div>
  );
}
function Footer() {
  return <div>you packed X out of X things</div>;
}

export default App;
