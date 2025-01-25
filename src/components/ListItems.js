const listOfItems = [
  { id: 1, discription: "Passbook", quantity: 1, isPacked: true },
  { id: 2, discription: "Underwear", quantity: 2, isPacked: false },
  { id: 3, discription: "Socks", quantity: 4, isPacked: true },
  { id: 3, discription: "Socks", quantity: 4, isPacked: true },
  { id: 3, discription: "Socks", quantity: 4, isPacked: true },
  { id: 3, discription: "Socks", quantity: 4, isPacked: true },
  { id: 3, discription: "Socks", quantity: 4, isPacked: true },
  { id: 3, discription: "Socks", quantity: 4, isPacked: true },
  { id: 3, discription: "Socks", quantity: 4, isPacked: true },
  { id: 3, discription: "Socks", quantity: 4, isPacked: true },
  { id: 3, discription: "Socks", quantity: 4, isPacked: true },
  { id: 3, discription: "Socks", quantity: 4, isPacked: true },
  { id: 3, discription: "Socks", quantity: 4, isPacked: true },
  { id: 4, discription: "shoes", quantity: 2, isPacked: true },
];

export default function ListItems() {
  return (
    <div className="items">
      <ul>
        {listOfItems.map((item) => {
          return <Item item={item} id={item.id} />;
        })}
      </ul>
    </div>
  );
}

function Item({ item }) {
  return (
    <li className={item.isPacked ? "packed" : ""}>
      <span>{item.quantity}</span>
      {item.discription}
      <button>❌</button>
    </li>
  );
}
