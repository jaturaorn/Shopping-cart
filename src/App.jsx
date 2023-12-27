import { useState } from "react";

const productsData = [
  { id: 1, name: "Product A", price: 20 },
  { id: 2, name: "Product B", price: 30 },
  { id: 3, name: "Product C", price: 25 },
];

const App = () => {
  // State สำหรับเก็บข้อมูลสินค้าในตะกร้า
  const [cartItems, setCartItems] = useState([]);

  // เพิ่มสินค้าลงในตะกร้า
  const addToCart = (product) => {
    const existingItem = cartItems.find((item) => item.id === product.id);

    if (existingItem) {
      // หากมีสินค้าอยู่ในตะกร้าแล้ว บวกจำนวน
      setCartItems((prevItems) =>
        prevItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      // หากสินค้ายังไม่มีในตะกร้า ใหม่เพิ่มลงไป
      setCartItems((prevItems) => [...prevItems, { ...product, quantity: 1 }]);
    }
  };

  const handleReset = () => {
    setCartItems([]);
  };

  const handleDelete = (id) => {
    setCartItems((cartItems) => cartItems.filter((item) => item.id !== id));
  };

  return (
    <ShoppingCart
      cartItems={cartItems}
      addToCart={addToCart}
      onReset={handleReset}
      onDelete={handleDelete}
    />
  );
};

export default App;

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
