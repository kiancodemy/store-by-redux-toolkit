import { useDispatch } from "react-redux";
import { add, remove, delet } from "./store/store";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";

const CartItem = ({ id, img, title, price, amount }) => {
  const dispatch = useDispatch();

  const increase = () => {
    dispatch(add({ id: id }));
  };
  const decrease = () => {
    dispatch(delet({ id: id }));
  };

  return (
    <article className="cart-item">
      <img className="reza" src={img} alt={title} />
      <div>
        <h5>{title}</h5>
        <span className="item-price">${price}</span>
      
        <button className="remove-btn" onClick={() => dispatch(remove(id))}>
          remove
        </button>
      </div>
      <div>
      
        <button className="amount-btn" onClick={increase}>
          <FaChevronUp className="amount-icon" />
        </button>

        <span className="amount">{amount}</span>

        <button className="amount-btn" onClick={decrease}>
          <FaChevronDown className="amount-icon" />
        </button>
      </div>
    </article>
  );
};

export default CartItem;
