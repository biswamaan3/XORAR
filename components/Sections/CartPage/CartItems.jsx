import { QuantityButton } from "@/components/misc/Buttons";

const items = [
  {
    id: 1,
    name: "Gradient Graphic T-shirt",
    size: "Large",
    color: "White",
    price: 145,
    image: "/assets/img/products/tshirt1.png",
  },
  {
    id: 2,
    name: "Checkered Shirt",
    size: "Medium",
    color: "Red",
    price: 180,
    image: "/assets/img/products/tshirt2.png",
  },
  {
    id: 3,
    name: "Checkered Shirt",
    size: "Medium",
    color: "Red",
    price: 180,
    image: "/assets/img/products/tshirt2.png",
  },
];

export default function CartItems() {
  return (
    <ul className="w-full mx-auto p-5 bg-white rounded-xl border border-gray-200">
      {items.map((item) => (
        <CartItem key={item.id} item={item} />
      ))}
    </ul>
  );
}

function CartItem({ item }) {

  return (
    <li className="cart-item flex flex-col md:flex-row items-center gap-4 md:gap-6 mb-4 pb-5 last:pb-0 border-b last:border-b-0">
      {/* Item Image */}
      <div className="item-image w-32 h-32 bg-gray-200 rounded-md overflow-hidden">
        <img src={item.image} alt={item.name} className="object-cover w-full h-full" />
      </div>

      {/* Item Details and Actions */}
      <div className="grid grid-flow-col gap-3 w-full h-auto">
        <div className="item-details flex flex-col w-full">
          <h2 className="product-name text-lg font-medium">{item.name}</h2>
          <div className="text-sm text-gray-500">
            <span className="text-gray-800">Size: </span>{item.size}
          </div>
          <div className="text-sm text-gray-500">
            <span className="text-gray-800">Color: </span>{item.color}
          </div>
          <p className="dollar-sign mt-3 text-lg font-semibold">${item.price}</p>
        </div>

        <div className="item-actions flex flex-col justify-between items-end h-full">
          <button className="remove-item w-10 h-10 flex items-center justify-center rounded-full duration-300 hover:border-red-300 hover:bg-red-100">
            <img src="/assets/svg/DeleteBin.svg" alt="Remove item" className="w-5 h-5" />
          </button>

          <QuantityButton className="py-1.5 px-3" />
        </div>
      </div>
    </li>
  );
}
