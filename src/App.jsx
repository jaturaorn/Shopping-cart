import { useState } from "react";
import ShoppingCart from "./component/ShoppingCart";

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
