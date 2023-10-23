import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import axios from "axios";
export default function paymentPage() {
  async function paypalCreateOrder(price) {
    try {
      let response = await axios.post("/api/paypal/createorder", {
        user_id: store.getState().auth.user._id,
        order_price: price.current.value,
      });
      return response.data.data.order.order_id;
    } catch (err) {
      console.error("Some Error Occured while creating the order");
      return null;
    }
  }

  async function paypalCaptureOrder(orderID) {
    try {
      let response = await axios.post("/api/paypal/captureorder", {
        orderID,
      });
      if (response.data.success) {
        console.log("Amount Added to Wallet");
      }
    } catch (err) {
      console.error("Some Error Occurred while capturing the order");
    }
  }

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

// import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

// export default function paymentPage() {
//   async function paypalCreateOrder(data, actions) {
//     // Make a POST request to your backend to create the PayPal order
//     return await fetch("/api/paypal/createorder", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({ order_price: 100, user_id: "user123" }), // pass props for actual data
//     })
//       .then((res) => res.json())
//       .then((data) => data.order_id);
//   }

//   async function paypalCaptureOrder(data, actions) {
//     // Capture the order when the user approves the payment
//     return await fetch("/api/paypal/captureorder", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({ orderID: data.orderID }),
//     })
//       .then((res) => res.json())
//       .then((data) => {
//         if (data.success) {
//           // Payment was successful, you can redirect or show a success message
//         } else {
//           // Handle payment failure
//         }
//       });
//   }

//   return (
//     <>
//       <h2>Payment Page</h2>
//       <div className="container--price">
//         <p>price(E)</p>
//       </div>
//       <PayPalScriptProvider
//         options={{
//           "client-id": process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID,
//           currency: "EUR",
//           intent: "capture",
//         }}
//       >
//         <PayPalButtons
//           style={{
//             color: "gold",
//             shape: "rect",
//             label: "pay",
//             height: 50,
//           }}
//           createOrder={async (data, actions) => {
//             let order_id = await paypalCreateOrder();
//             return order_id + "";
//           }}
//           onApprove={async (data, actions) => {
//             let response = await paypalCaptureOrder(data.orderID);
//             if (response) return true;
//           }}
//         />
//       </PayPalScriptProvider>
//     </>
//   );
// }
