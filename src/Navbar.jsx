import { FaCartPlus } from "react-icons/fa";

import { useSelector } from "react-redux";

const Navbar = () => {
  const total = useSelector((state) => {
    return state.change.cart
      .map((a) => a.amount)
      .reduce((b, c) => {
        return b + c;
      }, 0);
  });
  console.log(total);

  return (
    <nav>
      <div className="nav-center">
        <h4>TotTAL ITEMS</h4>
        <div className="nav-container">
          <FaCartPlus className="cart-icon" />
          <div className="amount-container">
            <p className="total-amount">{total}</p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
