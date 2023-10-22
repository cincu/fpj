import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

export default function paymentPage() {
  const paypalCreateOrder = async () => {
    try {
      let response = await axios.post("/api/paypal/createorder", {
        user_id: store.getState().auth.user._id,
        order_price: amountRef.current.value,
      });
      return response.data.data.order.order_id;
    } catch (err) {
      console.error("Some Error Occured while creating the order");
      return null;
    }
  };

  const paypalCaptureOrder = async (orderID) => {
    try {
      let response = await axios.post("/api/paypal/captureorder", {
        orderID,
      });
      if (response.data.success) {
        console.success("Amount Added to Wallet");
      }
    } catch (err) {
      console.error("Some Error Occurred while capturing the order");
    }
  };

  return (
    <>
      <h2>Payment Page</h2>
      <div className="container--price">
        <p>price(E)</p>
      </div>
      <PayPalScriptProvider
        options={{
          "client-id": process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID,
          currency: "EUR",
          intent: "capture",
        }}
      >
        <PayPalButtons
          style={{
            color: "gold",
            shape: "rect",
            label: "pay",
            height: 50,
          }}
          createOrder={async (data, actions) => {
            let order_id = await paypalCreateOrder();
            return order_id + "";
          }}
          onApprove={async (data, actions) => {
            let response = await paypalCaptureOrder(data.orderID);
            if (response) return true;
          }}
        />
      </PayPalScriptProvider>
    </>
  );
}

/* <script src="https://www.paypal.com/sdk/js?client-id=YOUR_CLIENT_ID"></script>

Client ID
AQWCkGf9FehI0eA9W9FYm8qlsM8oZeT1sWWlrT8RlXVt27xM894XBPydGQwTLWbdcGUE2u5B3RN-9ApR */
