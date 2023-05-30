import createVnPayOrder from "./connectVnPay";

const CheckOut = () => {
  return (
    <div>
      <button onClick={() => createVnPayOrder()}>createVnPayOrder</button>
    </div>
  );
};

export default CheckOut;
