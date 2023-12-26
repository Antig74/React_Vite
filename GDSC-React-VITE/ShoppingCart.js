import { useState } from "react";

const ShoppingCart = () => {
  const [cart, setCart] = useState([]);
  const [item, setItem] = useState({ name: "", quantity: 0, price: 0 });

  const handleChange = (e) => {
    setItem({ ...item, [e.target.name]: e.target.value });
  };

  const addToCart = (e) => {
    e.preventDefault();
    setCart([...cart, item]);
    setItem({ name: "", quantity: 0, price: 0 });
  };

  return (
    <div className="p-6 bg-green-100 min-h-screen">
      <form onSubmit={addToCart} className="mb-4 flex justify-center space-x-2">
        <label>
          Item Name:
          <input
            type="text"
            name="name"
            value={item.name}
            onChange={handleChange}
            placeholder="Item Name"
            className="border p-2 w-1/2"
            autoComplete="name"
          />
        </label>
        <label>
          Quantity:
          <input
            type="number"
            name="quantity"
            value={item.quantity}
            onChange={handleChange}
            placeholder="Quantity"
            className="border p-2 w-1/2"
          />
        </label>
        <label>
          Price:
          <input
            type="number"
            name="price"
            value={item.price}
            onChange={handleChange}
            placeholder="Price"
            className="border p-2 w-1/2"
          />
        </label>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white p-2 w-1/4">
          Add to Cart
        </button>
      </form>

      <div className="flex justify-center">
        <div className="w-3/4">
          <h2 className="text-xl mb-2 text-center">Cart</h2>
          <table className="w-full text-left border-collapse">
            <thead>
              <tr>
                <th className="py-2 px-4 border">Name</th>
                <th className="py-2 px-4 border">Quantity</th>
                <th className="py-2 px-4 border">Price</th>
                <th className="py-2 px-4 border">Total</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item, index) => (
                <tr key={index}>
                  <td className="py-2 px-4 border">{item.name}</td>
                  <td className="py-2 px-4 border">{item.quantity}</td>
                  <td className="py-2 px-4 border">{item.price}</td>
                  <td className="py-2 px-4 border">
                    {item.quantity * item.price}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <h3 className="text-lg mt-2 text-center">
            Total Price:{" "}
            {cart.reduce(
              (total, item) => total + item.quantity * item.price,
              0,
            )}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
