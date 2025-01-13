
import { QuantityButton } from "@/components/misc/Buttons";


export default function CartItems({cartItems, setCartItems, handleRemoveItem, handleQuantityChange}) {

  return (
    <>
      <ul className="w-full mx-auto p-5 bg-white rounded-xl border border-gray-200">
        {cartItems.length === 0 ? (
          <p className="text-center text-lg">Your cart is empty.</p>
        ) : (
          cartItems.map((item) => (
            <CartItem
              key={item.id}
              item={item}
              onRemove={handleRemoveItem}
              onQuantityChange={handleQuantityChange}
            />
          ))
        )}
      </ul>

    
    </>
  );
}

function CartItem({ item, onRemove, onQuantityChange }) {
  const handleQuantityIncrement = () => {
    onQuantityChange(item.id, item.quantity + 1);
  };

  const handleQuantityDecrement = () => {
    if (item.quantity > 1) {
      onQuantityChange(item.id, item.quantity - 1);
    }
  };
  const handleOnChange = (action) => {
	if (action === "increment") {
	  handleQuantityIncrement();
	} else {
	  handleQuantityDecrement();
	}
  }

  return (
    <li className="cart-item flex flex-col md:flex-row items-center gap-4 md:gap-6 mb-4 pb-5 last:pb-0 border-b last:border-b-0">
      {/* Item Image */}
      <div className="item-image w-32 h-32 bg-gray-200 rounded-md overflow-hidden">
        <img
          src={item.thumbnail}
          alt={item.title}
          className="object-cover w-full h-full"
        />
      </div>

      {/* Item Details and Actions */}
      <div className="grid grid-flow-col gap-3 w-full h-auto">
        <div className="item-details  w-full">
          <div className="w-full flex justify-between items-start">
            <h2 className="cart-product-name text-lg font-medium">{item.title}</h2>
            <button
              onClick={() => onRemove(item.id)}
              className="remove-item w-10 h-10 flex items-center justify-center rounded-full duration-300 hover:border-red-300 hover:bg-red-100"
            >
              <img
                src="/assets/svg/DeleteBin.svg"
                alt="Remove item"
                className="w-5 h-5"
              />
            </button>
          </div>

          <div className="w-full flex justify-between items-end">
            <div>
              <div className="text-sm text-gray-500">
                <span className="text-gray-800">Size: </span>
                {item.size}
              </div>
              <div className="text-sm text-gray-500">
                <span className="text-gray-800">Color: </span>
                {item.colorName}
              </div>
              <p className="dollar-sign mt-3 text-lg font-semibold">
			  ₹ {item.price}
              </p>
            </div>
            <div className="flex items-center gap-2">
              {/* Quantity Buttons */}
              <QuantityButton
                className="py-1.5 px-3"
                onChange={handleOnChange}
				quantity={item.quantity}
              />
            </div>
          </div>
        </div>
      </div>
    </li>
  );
}
