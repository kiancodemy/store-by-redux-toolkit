import CartItem from "./CartItem";

import { useDispatch, useSelector } from "react-redux";
import { clear } from "./store/store";

const CartContainer = () => {
  const whole = useSelector((state) => {
    return state.change.cart;
  });
  const cartArray = whole;

  const dispatch = useDispatch();

  const s = useSelector((state) => {
    const sum = state.change.cart
      .map((a) => a.amount * a.price)
      .reduce((b, c) => {
        return b + c;
      }, 0);
    return sum;
  });

  const final = () => {
    dispatch(clear());
  };

  if (cartArray.length === 0) {
    return (
      <section className="cart">
        <header>
          <h2>your bag</h2>
          <h4 className="empty-cart">is currently empty</h4>
        </header>
      </section>
    );
  }
  return (
    <section className="cart">
      <header>
        <h2>your bag</h2>
      </header>

      <div>
        {cartArray.map((whole) => {
          return <CartItem key={whole.id} {...whole} />;
        })}
      </div>

      <footer>
        <hr />
        <div>
          <h5 className="cart-total">
            total Cost <span>{`$ ${s}`}</span>
          </h5>
        </div>
        <button className="btn btn-hipster" onClick={final}>
          clear cart
        </button>
      </footer>
    </section>
  );
};

export default CartContainer;
