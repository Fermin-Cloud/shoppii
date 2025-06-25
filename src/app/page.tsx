"use client";

import { useState } from "react";

export default function Home() {
  return (
    <div className="relative flex size-full min-h-screen flex-col bg-[#f8fbfa] justify-between group/design-root overflow-x-hidden">
      <div className="flex items-center bg-[#f8fbfa] p-4 pb-2 justify-between">
        <div
          className="text-[#0e1a13] flex size-12 shrink-0 items-center"
          data-icon="ArrowLeft"
          data-size="24px"
          data-weight="regular"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24px"
            height="24px"
            fill="currentColor"
            viewBox="0 0 256 256"
          >
            <path d="M224,128a8,8,0,0,1-8,8H59.31l58.35,58.34a8,8,0,0,1-11.32,11.32l-72-72a8,8,0,0,1,0-11.32l72-72a8,8,0,0,1,11.32,11.32L59.31,120H216A8,8,0,0,1,224,128Z"></path>
          </svg>
        </div>
        <h2 className="text-[#0e1a13] text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center pr-12">
          Your Cart
        </h2>
      </div>

      <ListCart />

      <NavListCart />
    </div>
  );
}

export const NavListCart = () => {
  const [priceTotalSales, setPriceTotalSales] = useState<number>(0);

  return (
    <nav className="block w-full">
      <div className="flex justify-center">
        <div className="flex flex-1 gap-3 max-w-[480px] flex-col items-stretch px-4 py-3">
          <span className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 bg-[#e8f2ec] text-[#0e1a13] text-base font-bold leading-normal tracking-[0.015em] w-full">
            Total: {12000}
          </span>
          <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 bg-[#39e079] text-[#0e1a13] text-base font-bold leading-normal tracking-[0.015em] w-full">
            <span className="truncate">Checkout</span>
          </button>
          <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 bg-[#e8f2ec] text-[#0e1a13] text-base font-bold leading-normal tracking-[0.015em] w-full">
            <span className="truncate">Add More Items</span>
          </button>
        </div>
      </div>
      <div className="h-5 bg-[#f8fbfa]"></div>
    </nav>
  );
};

interface ListCartProps {
  initialCartItems?: CartItemType[];
}

export const ListCart: React.FC<ListCartProps> = ({
  initialCartItems = [],
}) => {
  const [cartItems, setCartItems] = useState<CartItemType[]>(initialCartItems);

  const handleQuantityChange = (id: string, newQuantity: number) => {
    setCartItems((prevItems) =>
      prevItems
        .map((item) =>
          item.id === id ? { ...item, quantity: newQuantity } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };
  const defaultCartItems: CartItemType[] = [
    {
      id: "1",
      name: "Organic Apples",
      price: 12.99,
      imageUrl: "https://via.placeholder.com/150/FF5733/FFFFFF?text=Apples",
      quantity: 2,
    },
    {
      id: "2",
      name: "Whole Wheat Bread",
      price: 8.49,
      imageUrl: "https://via.placeholder.com/150/33FF57/FFFFFF?text=Bread",
      quantity: 1,
    },
    {
      id: "3",
      name: "Almond Milk",
      price: 3.75,
      imageUrl: "https://via.placeholder.com/150/5733FF/FFFFFF?text=Milk",
      quantity: 1,
    },
    {
      id: "4",
      name: "Avocados",
      price: 5.2,
      imageUrl: "https://via.placeholder.com/150/FF33E9/FFFFFF?text=Avocados",
      quantity: 3,
    },
  ];

  const itemsToDisplay = cartItems.length > 0 ? cartItems : defaultCartItems;

  return (
    <ul className="w-full max-w-[1200px] mx-auto">
      {itemsToDisplay.map((item) => (
        <CartItem
          key={item.id}
          item={item}
          onQuantityChange={handleQuantityChange}
        />
      ))}
      {itemsToDisplay.length === 0 && (
        <p className="text-center text-gray-500 py-4">Tu carrito está vacío.</p>
      )}
    </ul>
  );
};

export interface CartItemType {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
  quantity: number;
}

interface CartItemProps {
  item: CartItemType;
  onQuantityChange: (id: string, newQuantity: number) => void;
}

export const CartItem: React.FC<CartItemProps> = ({
  item,
  onQuantityChange,
}) => {
  const [quantity, setQuantity] = useState(item.quantity);

  const handleDecrement = () => {
    const newQuantity = Math.max(1, quantity - 1); // No permite cantidades menores a 1
    setQuantity(newQuantity);
    onQuantityChange(item.id, newQuantity);
  };

  const handleIncrement = () => {
    const newQuantity = quantity + 1;
    setQuantity(newQuantity);
    onQuantityChange(item.id, newQuantity);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value, 10);
    if (!isNaN(value) && value >= 1) {
      setQuantity(value);
      onQuantityChange(item.id, value);
    } else if (e.target.value === "") {
      setQuantity(0);
      ("vacio");
      onQuantityChange(item.id, 0);
    }
  };

  return (
    <li className="flex items-center gap-4 bg-[#f8fbfa] px-4 min-h-[72px] py-2 justify-between">
      <div className="flex items-center gap-4">
        <div
          className="bg-center bg-no-repeat aspect-square bg-cover rounded-lg size-14"
          style={{ backgroundImage: `url("${item.imageUrl}")` }}
        ></div>
        <div className="flex flex-col justify-center">
          <p className="text-[#0e1a13] text-base font-medium leading-normal line-clamp-1">
            {item.name}
          </p>
          <p className="text-[#51946b] text-sm font-normal leading-normal line-clamp-2">
            ${item.price.toFixed(2)}
          </p>
        </div>
      </div>
      <div className="shrink-0">
        <div className="flex items-center gap-2 text-[#0e1a13]">
          <button
            onClick={handleDecrement}
            className="text-base font-medium leading-normal flex h-7 w-7 items-center justify-center rounded-full bg-[#e8f2ec] cursor-pointer"
          >
            -
          </button>
          <input
            className="text-base font-medium leading-normal w-8 p-0 text-center bg-transparent focus:outline-0 focus:ring-0 focus:border-none border-none [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
            type="number"
            value={quantity}
            onChange={handleInputChange}
          />
          <button
            onClick={handleIncrement}
            className="text-base font-medium leading-normal flex h-7 w-7 items-center justify-center rounded-full bg-[#e8f2ec] cursor-pointer"
          >
            +
          </button>
        </div>
      </div>
    </li>
  );
};
