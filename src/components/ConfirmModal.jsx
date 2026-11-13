import { useEffect } from "react";
import { CheckIcon } from "./Icons";
import { formatPrice } from "../utils";

export default function ConfirmModal({ items, totalPrice, onStartNew, onClose }) {
  // Close with the Escape key, and stop the page behind from scrolling
  useEffect(() => {
    const onKey = (event) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div className="overlay" onClick={onClose}>
      <div
        className="modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        onClick={(event) => event.stopPropagation()}
      >
        <CheckIcon />
        <h2 id="modal-title">Order Confirmed</h2>
        <p className="modal-sub">We hope you enjoy your food!</p>

        <div className="summary">
          <ul>
            {items.map((item) => (
              <li key={item.name} className="summary-item">
                <img src={item.thumbnail} alt="" />
                <div className="summary-info">
                  <p className="summary-name">{item.name}</p>
                  <p>
                    <span className="cart-qty">{item.quantity}x</span>
                    <span className="cart-at">@ {formatPrice(item.price)}</span>
                  </p>
                </div>
                <strong>{formatPrice(item.price * item.quantity)}</strong>
              </li>
            ))}
          </ul>
          <div className="summary-total">
            <span>Order Total</span>
            <strong>{formatPrice(totalPrice)}</strong>
          </div>
        </div>

        <button type="button" className="confirm-btn" onClick={onStartNew} autoFocus>
          Start New Order
        </button>
      </div>
    </div>
  );
}