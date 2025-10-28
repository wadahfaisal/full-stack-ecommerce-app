import { FaPlus, FaMinus } from "react-icons/fa";
import { AmountButtonsProps as Props } from "../types/propsTypes";

const AmountButtons = ({ amount, increase, decrease }: Props) => {
  return (
    <div className="amount-btns">
      <button type="button" className="amount-btn" onClick={decrease}>
        <FaMinus />
      </button>
      <h2 className="amount">{amount}</h2>
      <button type="button" className="amount-btn" onClick={increase}>
        <FaPlus />
      </button>
    </div>
  );
};

export default AmountButtons;
