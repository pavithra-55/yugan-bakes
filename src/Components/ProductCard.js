import './css/ProductCard.css';

const ProductCard = ({ product, addToCart }) => {
  return (
    <div className="card m-2 product-card" style={{ width: "19rem" }}>
      <img src={product.image} className="card-img-top product-img-card" alt={product.name} />
      <div className="card-body text-center">
        <h5 className="card-title">{product.name}</h5>
        <p className="card-text">Price: ₹{product.price}</p>
        <button className="btn btn-success m-1" onClick={() => addToCart(product)}>
          Add to Cart 🛒
        </button>
        <button className="btn btn-primary m-1">Order Now</button>
      </div>
    </div>
  );
};

export default ProductCard;
