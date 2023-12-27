const ProductList = ({ products, addToCart, onDelete }) => (
  <div>
    <h2>Products</h2>
    <ul>
      {products.map((product) => (
        <li key={product.id}>
          {product.name} - ${product.price}{" "}
          <button onClick={() => addToCart(product)}>Add to Cart</button>
          <button onClick={() => onDelete(product.id)}>Delete</button>
        </li>
      ))}
    </ul>
  </div>
);

export default ProductList;
