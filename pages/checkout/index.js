import { useState } from "react";

export default function CheckoutPage() {
  const [checkout, setCheckout] = useState(false);
  return (
    <div>
      {checkout ? (
        <PayPal />
      ) : (
        <button
          onClick={() => {
            setCheckout(true);
          }}
        >
          Checkout
        </button>
      )}
    </div>
  );
}
