import { RemoveIcon, TreeIcon, EmptyCartIcon } from "./Icons";
import { formatPrice } from "../utils";

export default function Cart({ items, totalItems, totalPrice, onRemove, onClear, onConfirm }) {
  return (
    <aside className="cart" aria-label="Shopping cart">
      <h2>Your Cart ({totalItems})</h2>

      {items.length === 0 ? (
        <div className="cart-empty">
          <EmptyCartIcon />
          <p>Your added items will appear here</p>
        </div>
      ) : (
        <>
          <ul className="cart-list">
            {items.map((item) => (
              <li key={item.name} className="cart-item">
                <div>
                  <p className="cart-item-name">{item.name}</p>
                  <p className="cart-item-line">
                    <span className="cart-qty">{item.quantity}x</span>
                    <span className="cart-at">@ {formatPrice(item.price)}</span>
                    <span className="cart-sub">{formatPrice(item.price * item.quantity)}</span>
                  </p>
                </div>
                <button
                  type="button"
                  className="remove-btn"
                  aria-label={`Remove ${item.name} from cart`}
                  onClick={() => onRemove(item.name)}
                >
                  <RemoveIcon />
                </button>
              </li>
            ))}
          </ul>

          <div className="cart-total">
            <span>Order Total</span>
            <strong>{formatPrice(totalPrice)}</strong>
          </div>

          <p className="carbon-note">
            <TreeIcon />
            <span>
              This is a <strong>carbon-neutral</strong> delivery
            </span>
          </p>

          <button type="button" className="confirm-btn" onClick={onConfirm}>
            Confirm Order
          </button>
          <button type="button" className="clear-btn" onClick={onClear}>
            Clear cart
          </button>
        </>
      )}
    </aside>
  );
}