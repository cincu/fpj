import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js";
import Navigation from "@/components/Navigation/Navigation";

import axios from "axios";
export default function PaymentPage() {
  async function paypalCreateOrder() {
    try {
      const response = await axios.post("/api/paypal/createorder/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        user_id: store.getState().auth.user._id,
        order_price: amountRef.current.value,
      });
      return response.data.data.order.order_id;
    } catch (err) {
      console.log("error in the paypalCreateOrder function");
      return null;
    }
  }

  async function paypalCaptureOrder(orderID) {
    try {
      let response = await axios.post("/api/paypal/captureorder/", {
        orderID,
      });
      if (response.data.success) {
        console.log("function paypalCaptureOrder works");
      }
    } catch (err) {
      console.log("error in function paypalCaptureOrder");
    }
  }

  return (
    <div>
      <Navigation />
      <h2>payment</h2>
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
    </div>
  );
}
