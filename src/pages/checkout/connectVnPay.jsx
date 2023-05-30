import axios from "axios";

function createVnPayOrder() {
  const data = {
    amount: 100000,
    orderInfo: "Thanh toán đơn hàng",
    orderType: "topup",
    returnUrl: "http://localhost:3000/return",
    notifyUrl: "http://localhost:3000/notify",
  };

  axios
    .post("https://sandbox.vnpayment.vn/paymentv2/vpcpay.html", data)
    .then((response) => {
      console.log(response.data);
      // Redirect to VnPay Payment Gateway
      window.location.href = response.data.checkoutUrl;
    })
    .catch((error) => {
      console.log(error);
    });
}

export default createVnPayOrder;
