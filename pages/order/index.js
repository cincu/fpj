import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js";
import { useState } from "react";
export default function OrderPage() {
  const [succeeded, setSucceeded] = useState(false);
  const [paypalErrorMessage, setPaypalErrorMessage] = useState("");
  const [orderID, setOrderID] = useState(false);
  const [billingDetails, setBillingDetails] = useState("");
  const PAYPAL_CLIENT_ID =
    "AQWCkGf9FehI0eA9W9FYm8qlsM8oZeT1sWWlrT8RlXVt27xM894XBPydGQwTLWbdcGUE2u5B3RN-9ApR";
  const createOrder = (data, actions) => {
    return actions.order
      .create({
        purchase_units: [
          {
            amount: {
              // charge users $499 per order
              value: 499,
            },
          },
        ],
      })
      .then((orderID) => {
        setOrderID(orderID);
        return orderID;
      });
  };
  // handles when a payment is confirmed for paypal
  const onApprove = (data, actions) => {
    return actions.order
      .capture()
      .then(function (details) {
        const { payer } = details;
        setBillingDetails(payer);
        setSucceeded(true);
      })
      .catch((err) => setPaypalErrorMessage("Something went wrong."));
  };
  return (
    <PayPalScriptProvider options={{ "client-id": PAYPAL_CLIENT_ID.clientId }}>
      <PayPalButtons
        style={{
          color: "blue",
          shape: "pill",
          label: "pay",
          tagline: false,
          layout: "horizontal",
        }}
        createOrder={createOrder}
        onApprove={onApprove}
      />
    </PayPalScriptProvider>
  );
}
