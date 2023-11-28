import useLocalStorageState from "use-local-storage-state";
import styles from "./CartPage.module.css";
import Link from "next/link";

export default function ShoppingCartPage() {
  const [cartItems, setCartItems] = useLocalStorageState("shoppingCart", []);
  const handleRemoveItem = (itemId) => {
    const updatedCartItems = cartItems.filter((item) => item.id !== itemId);
    setCartItems(updatedCartItems);
    localStorage.setItem("shoppingCart", JSON.stringify(updatedCartItems));
  };
  const checkoutItems = [];
  return (
    <div>
      <div className={styles["main--body"]}>
        <h3>Shopping Cart</h3>
      </div>
      {cartItems?.length > 0 ? (
        <ul>
          {cartItems.map((item) => {
            checkoutItems.push({ id: item.id, quantity: item.quantity });
            return (
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
            );
          })}
          <Link href={`/payment-page?items=${JSON.stringify(checkoutItems)}`}>
            <button>check-out</button>
          </Link>
        </ul>
      ) : (
        <p>Your cart is empty</p>
      )}
    </div>
  );
}
