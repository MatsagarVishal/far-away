import "./index.css";
import ListItems from "./components/ListItems";
import Footer from "./components/Footer";
import Form from "./components/Form";
import Logo from "./components/Logo";
import { useState } from "react";

function App() {
  const [items, setItems] = useState([]);

  function handleItemsOnAdd(item) {
    setItems((itemList) => [item, ...itemList]);
  }

  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }
  function handleToggleList(id) {
    const newList = items.map((item) =>
      item.id === id ? { ...item, isPacked: !item.isPacked } : item
    );
    setItems((list) => newList);
  }
  return (
    <div className="App">
      <Logo />
      <Form onItemAdd={handleItemsOnAdd} />
      <ListItems
        itemList={items}
        onItemDelete={handleDeleteItem}
        onToggle={handleToggleList}
      />
      <Footer />
    </div>
  );
}

export default App;
