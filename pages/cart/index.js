import useLocalStorageState from "use-local-storage-state";
import styles from "./CartPage.module.css";

export default function ShoppingCartPage() {
  const [cartItems, setCartItems] = useLocalStorageState("shoppingCart", []);
  const handleRemoveItem = (itemId) => {
    const updatedCartItems = cartItems.filter((item) => item.id !== itemId);
    setCartItems(updatedCartItems);
    localStorage.setItem("shoppingCart", JSON.stringify(updatedCartItems));
  };
  return (
    <div>
      <div className={styles["main--body"]}>
        <h3>Shopping Cart</h3>
      </div>
      {cartItems?.length > 0 ? (
        <ul>
          {cartItems.map((item) => (
            <li className={styles["cart--container"]} key={item.id}>
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
          <button>check-out</button>
        </ul>
      ) : (
        <p>Your cart is empty</p>
      )}
    </div>
  );
}
