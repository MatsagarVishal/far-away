export default function Footer({ items }) {
  if (!items.length)
    return (
      <div className="footer">
        Start adding some items to your packing list 🚀
      </div>
    );

  const numOfItems = items.length;
  const numOfItemsPacked = items.filter((i) => i.isPacked).length;
  const percentage = (numOfItemsPacked / numOfItems) * 100;
  return (
    <div className="footer">
      {percentage === 100
        ? "You got everything! Ready to go 🛩️🛩️"
        : `You have ${numOfItems} items on your list, and you already packed ${numOfItemsPacked} / ${percentage}%`}
    </div>
  );

}
