import { CartIcon, PlusIcon, MinusIcon } from "./Icons";
import { formatPrice, imagePath } from "../utils";

export default function ProductCard({ product, quantity, onAdd, onIncrease, onDecrease }) {
  const inCart = quantity > 0;

  return (
    <article className="product">
      <div className={inCart ? "product-media selected" : "product-media"}>
        {/* The browser picks the best image for the screen size */}
        <picture>
          <source media="(min-width: 1024px)" srcSet={imagePath(product.image.desktop)} />
          <source media="(min-width: 640px)" srcSet={imagePath(product.image.tablet)} />
          <img src={imagePath(product.image.mobile)} alt={product.name} />
        </picture>

        {inCart ? (
          <div className="qty-control">
            <button
              type="button"
              aria-label={`Decrease quantity of ${product.name}`}
              onClick={onDecrease}
            >
              <MinusIcon />
            </button>
            <span aria-live="polite">{quantity}</span>
            <button
              type="button"
              aria-label={`Increase quantity of ${product.name}`}
              onClick={onIncrease}
            >
              <PlusIcon />
            </button>
          </div>
        ) : (
          <button type="button" className="add-btn" onClick={onAdd}>
            <CartIcon />
            Add to Cart
          </button>
        )}
      </div>

      <p className="product-category">{product.category}</p>
      <h3 className="product-name">{product.name}</h3>
      <p className="product-price">{formatPrice(product.price)}</p>
    </article>
  );
}