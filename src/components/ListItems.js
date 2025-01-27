// const listOfItems = [
//   { id: 1, discription: "Passbook", quantity: 1, isPacked: true },
//   { id: 2, discription: "Underwear", quantity: 2, isPacked: false },
//   { id: 3, discription: "Socks", quantity: 4, isPacked: true },
//   { id: 4, discription: "shoes", quantity: 2, isPacked: true },
// ];

export default function ListItems({ itemList, onItemDelete }) {
  return (
    <div className="items">
      <ul>
        {itemList.map((item) => {
          return <Item item={item} onItemDelete={onItemDelete} key={item.id} />;
        })}
      </ul>
    </div>
  );
}

function Item({ item, onItemDelete }) {
  function handleDelete(id) {
    console.log(id);

    onItemDelete(id);
  }
  return (
    <li className={item.isPacked ? "packed" : ""}>
      <span>{item.quantity}</span>
      {item.discription}
      <button onClick={() => handleDelete(item.id)}>❌</button>
    </li>
  );
}
