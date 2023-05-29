import { loadStripe } from "@stripe/stripe-js";
const stripe = await loadStripe(
  "pk_test_51ND2G5Bhab7cMOe0DlfZhtQWqsc2XMnENUmGuX0d8jhar4r19QHEiBa8VHSExqxtd77HuwZIt00tVmNkK55m9qRL00aAmqkRK0"
);

const CheckOut = () => {
  return <div>CheckOut</div>;
};

export default CheckOut;
