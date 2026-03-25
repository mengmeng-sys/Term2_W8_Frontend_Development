export default function OrderCard({ product, price, quantity, onQuantityChange }) {
  return (
    <div className="order">
      <div>
        <h4>{product}</h4>
        <small>$ {price}</small>
      </div>

      <div className="order-quantity">
        <div
          className="order-button"
          onClick={() => quantity > 0 && onQuantityChange(product, -1)}
          style={{ background: quantity === 0 ? "#bfbfbf" : "" }}
        >
          -
        </div>

        <h4>{quantity}</h4>

        <div
          className="order-button"
          onClick={() => onQuantityChange(product, +1)}
        >
          +
        </div>
      </div>
    </div>
  );
}