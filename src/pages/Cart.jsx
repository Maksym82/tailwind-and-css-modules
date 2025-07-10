
function Cart() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted!");
  };

  return (
    <div className="max-w-md p-5 mx-auto">
      <h1 className="mb-6 text-xl font-bold text-center">Shopping Cart</h1>

      {/* Список товаров */}
      <div className="mb-8 ">
        <h2 className="mb-4 text-lg font-semibold">Your Items:</h2>
        <ul className="space-y-2">
          <li className="flex items-center justify-between pb-2 border-b">
            <span>Product 1</span>
            <span>$25</span>
          </li>
          <li className="flex items-center justify-between pb-2 border-b">
            <span>Product 2</span>
            <span>$45</span>
          </li>
        </ul>
        <p className="mt-4 font-medium">Total: $70</p>
      </div>

      {/* Форма */}
      <form onSubmit={handleSubmit} className="space-y-5">
        <h2 className="text-lg">Enter Your Details:</h2>

        {/* Поле Name */}
        <div>
          <input className="peer" id="name" type="text" placeholder="Enter your full name" required />
          <label className="peer-hover:text-blue-600" htmlFor="name">Name</label>
        </div>

        {/* Поле Email */}
        <div>
          <input id="email" type="email" placeholder="Enter your email address" required />
          <label htmlFor="email">Email</label>
        </div>

        {/* Поле Address */}
        <div>
          <textarea
            id="address"
            placeholder="Enter your delivery address"
            rows="3"
            required
          ></textarea>
          <label htmlFor="address">Address</label>
        </div>

        {/* Поле Payment */}
        <div>
          <select id="payment" required>
            <option value="" disabled>
              Select payment method
            </option>
            <option value="creditCard">Credit Card</option>
            <option value="paypal">PayPal</option>
            <option value="cash">Cash on Delivery</option>
          </select>
          <label htmlFor="payment">Payment Method</label>
        </div>

        {/* Кнопка Submit */}
        <button type="submit">Place Order</button>
      </form>
    </div>
  );
}

export default Cart;
