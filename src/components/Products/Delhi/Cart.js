import { useContext } from "react";
import { CartVal } from "../../../context/context";

const Cart = () => {
  const [total, setTotal] = useContext(CartVal);

  return (
    <>
      {total  ? (
        <>
          <h2>Summary</h2>
          <h4>3 nights starting from date</h4>
          <h5>Total ₹{total}</h5>
          <button>BOOK NOW</button>
          {/* should take to checkout page */}
        </>
      ) : null}
    </>
  );
};

export default Cart;
