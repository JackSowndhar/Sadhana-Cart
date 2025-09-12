import { useDispatch, useSelector } from "react-redux";
import { MAXIMUM_QUANTITY, MINIMUM_QUANTITY } from "src/Data/globalVariables";
import { updateProductsState } from "src/Features/productsSlice";
import s from "./CustomNumberInput.module.scss";

const CustomNumberInput = () => {
  const { ProductQuantity } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  function increaseQuantity() {
    if (ProductQuantity >= MAXIMUM_QUANTITY) return;
    updateQuantity(ProductQuantity + 1);
  }

  function decreaseQuantity() {
    if (ProductQuantity <= MINIMUM_QUANTITY) return;
    updateQuantity(ProductQuantity - 1);
  }

  function handleQuantityChange(e) {
    const value = parseInt(e.target.value, 10);
    if (!isNaN(value)) updateQuantity(value);
  }

  function updateQuantity(value) {
    dispatch(
      updateProductsState({
        key: "ProductQuantity", 
        value,
      })
    );
  }

  return (
    <div className={s.customNumberInput}>
      <button
        type="button"
        onClick={decreaseQuantity}
        aria-label="Decrease quantity by 1"
      >
        -
      </button>

      <input
        type="number"
        onChange={handleQuantityChange}
        value={ProductQuantity}
        min={MINIMUM_QUANTITY}
        max={MAXIMUM_QUANTITY}
        aria-label="Product quantity input"
      />

      <button
        type="button"
        onClick={increaseQuantity}
        aria-label="Increase quantity by 1"
      >
        +
      </button>
    </div>
  );
};

export default CustomNumberInput;
