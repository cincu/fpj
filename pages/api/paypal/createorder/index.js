import client from "../../../utils/paypal";
import paypal from "@paypal/checkout-server-sdk";
import Order from "../../../db/models/Order";

export default async function handler(request, response) {
  if (request.method != "POST")
    return response.status(404).json({ success: false, message: "Not Found" });

  if (!request.body.order_price || !request.body.user_id)
    return response.status(400).json({
      success: false,
      message: "Please Provide order_price And User ID",
    });

  try {
    const PaypalClient = client();
    const request = new paypal.orders.OrdersCreateRequest();
    request.headers["prefer"] = "return=representation";
    request.requestBody({
      intent: "CAPTURE",
      purchase_units: [
        {
          amount: {
            currency_code: "EUR",
            value: request.body.order_price + "",
          },
        },
      ],
    });
    const response = await PaypalClient.execute(request);
    if (response.statusCode !== 201) {
      console.log("RES: ", response);
      return res
        .status(500)
        .json({ success: false, message: "Some Error Occured at backend" });
    }

    // //store the order in mongodb
    // const order = new Order({
    //   user_id: request.body.user_id,
    //   order_price: parseFloat(request.body.order_price),
    //   order_id: createOrderResponse.result.id,
    // });
    // await order.save();
    // //check above

    response.status(200).json({ success: true, data: { order } });
  } catch (err) {
    console.log("Error at Create Order: ", err);
    return response
      .status(500)
      .json({ success: false, message: "Could Not Found the user" });
  }
}