export default function Item({ item, onItemDelete, onToggle }) {
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
