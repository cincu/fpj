import useLocalStorageState from "use-local-storage-state";

export default function ShoppingCartPage() {
  const [cartItems, setCartItems] = useLocalStorageState("shoppingCart", []);
  const handleRemoveItem = (itemId) => {
    const updatedCartItems = cartItems.filter((item) => item.id !== itemId);
    setCartItems(updatedCartItems);
    localStorage.setItem("shoppingCart", JSON.stringify(updatedCartItems));
  };
  return (
    <div>
      <h2>Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <ul>
          {cartItems.map((item) => (
            <li key={item.id}>
              <img src={item.imageUrl} alt={item.title} width="100" />
              <p>{item.title}</p>
              <p>
                Quantity: <input type="number" defaultValue={item.quantity} />
              </p>
              <p>Price: {item.price}</p>
              <button onClick={() => handleRemoveItem(item.id)}>
                Delete Item
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
