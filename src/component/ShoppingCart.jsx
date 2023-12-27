import ProductList from "./ProductList";

const productsData = [
  { id: 1, name: "Product A", price: 20 },
  { id: 2, name: "Product B", price: 30 },
  { id: 3, name: "Product C", price: 25 },
];

const ShoppingCart = ({ cartItems, addToCart, onReset, onDelete }) => {
  // คำนวณจำนวนรายการในตะกร้า
  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  // คำนวณราคารวม
  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div>
      <h1>Shopping Cart</h1>
      <ProductList
        products={productsData}
        addToCart={addToCart}
        onReset={onReset}
        onDelete={onDelete}
      />
      <div>
        <h2>Shopping Cart</h2>
        <p>Items in Cart: {cartCount}</p>
        <ul>
          {cartItems.map((item) => (
            <li key={item.id}>
              {item.name} x{item.quantity} - ${item.price * item.quantity}
            </li>
          ))}
        </ul>
        <p>Total Price: ${totalPrice}</p>
        <button onClick={() => onReset()}>Reset</button>
      </div>
    </div>
  );
};

export default ShoppingCart;
