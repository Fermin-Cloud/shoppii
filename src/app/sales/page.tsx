"use client"

export default function Page() {
  return (
    <div className="relative flex size-full min-h-screen flex-col bg-[#f8fbfa] justify-between group/design-root overflow-x-hidden">
      <div>
        <div className="flex items-center bg-[#f8fbfa] p-4 pb-2 justify-between">
          <h2 className="text-[#0e1a13] text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center pl-12">
            Sales
          </h2>
          <div className="flex w-12 items-center justify-end">
            <button className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 bg-transparent text-[#0e1a13] gap-2 text-base font-bold leading-normal tracking-[0.015em] min-w-0 p-0">
              <div
                className="text-[#0e1a13]"
                data-icon="Plus"
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
                  <path d="M224,128a8,8,0,0,1-8,8H136v80a8,8,0,0,1-16,0V136H40a8,8,0,0,1,0-16h80V40a8,8,0,0,1,16,0v80h80A8,8,0,0,1,224,128Z"></path>
                </svg>
              </div>
            </button>
          </div>
        </div>
        <Sales />
      </div>
      <div>
        <div className="flex justify-stretch">
          <div className="flex flex-1 gap-3 flex-wrap px-4 py-3 justify-between">
            <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-[#e8f2ec] text-[#0e1a13] text-sm font-bold leading-normal tracking-[0.015em]">
              <span className="truncate">Clear</span>
            </button>
            <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-[#39e079] text-[#0e1a13] text-sm font-bold leading-normal tracking-[0.015em]">
              <span className="truncate">Checkout</span>
            </button>
          </div>
        </div>
        <div className="h-5 bg-[#f8fbfa]"></div>
      </div>
    </div>
  );
}

const productos = [
  {
    nombre: "T-Shirt",
    precio: "$10",
    cantidad: 1,
    imagen:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDRbwTmwrnQTa7SXxz25IkSsxCN7wf3a2Z0mImOcHAyXL9OA0CIW5ayA9SVKK3vuG2dsI7-MEFs3E0xVZ0bRgFKR-qgmKonMlWi9Jb-wYsoe47X9-talSKmyLkK-5zqQqlN2gLmtnumcNtjk7TcgZ1g35wJhxgBxuvHyZD3o05mGXE3TojTLS00_AXcdo092hRM-mLDLwVaZY0z_anS14YOOHOhX1mW-UFrKmd6eY49yhlOMDYA4hdxKjiaB8M6hDbYnURyYSmB_Mg",
  },
  {
    nombre: "Jeans",
    precio: "$20",
    cantidad: 1,
    imagen:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCu69rNfCwNfCMrkz7Jt9mZg432R6Qc83m0vA-rchwrRR1-0cH7rQLnFlKMwPKWDeLtS-EHCZ7YTvqoAJdQX17V-DU6D-wnXhQvgmaQAVSzw7490_l2b0jasUTVjDyvesvtT1W2Nfk2rjNdyXBH2sVSwAgN45jqW-hVIYC5IL63-iTWoXXahXlOI9UFKG9WLhVrMRiNBxN0jqrn-iR8KBq4uZjMXPIM3N1PWZgyriJ3_lZgdgTldBh0Arh7S6WI2zPzl3e9NTE7oIo",
  },
  {
    nombre: "Shoes",
    precio: "$15",
    cantidad: 1,
    imagen:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBITvqBul4cEw4Ya-Hji9iey3uyyzkzmVl1rl2p2RESYFbUx4HZB6Q6APS_eO3j0iMogwfaLkaRLaS68yQW_zuXgK6gE50KrEamVWjvXuFw1hWHsKpIYyRXtOqerWh3xFWOtj4hmJIuIoDvuuC9rzQ8A7ZFArLcxxIWm5BVa1znXXACcqatdjqv37oPrV76Krq-nMJNT1WxTT3D9-yEZCXCqhPcNEr6q180u78mQUBu8QKQZIQ_cQsEiFe82U3mQqH-d1tRWXvR4w0",
  },
];

import { useState } from "react";

export const Sales = () => {
  const [sales, setSales] = useState([{ id: 1, products: productos }]);
  const [activeSaleIndex, setActiveSaleIndex] = useState(0);

  const addNewSale = () => {

    if (sales.length > 3) return

    const newSale = {
      id: sales.length + 1,
      products: [],
    };  
    setSales([...sales, newSale]);
    setActiveSaleIndex(sales.length); 
  };

  return (
    <>
      <div className="pb-3">
        <div className="flex border-b border-[#d1e6d9] px-4 gap-8 items-center">
          {sales.map((sale, index) => (
            <button
              key={sale.id}
              className={`flex flex-col items-center justify-center border-b-[3px] ${
                index === activeSaleIndex
                  ? "border-b-[#39e079] text-[#0e1a13]"
                  : "border-b-transparent text-[#51946b]"
              } pb-[13px] pt-4`}
              onClick={() => setActiveSaleIndex(index)}
            >
              <p className="text-sm font-bold leading-normal tracking-[0.015em]">
                Sale {sale.id}
              </p>
            </button>
          ))}

          <button
            onClick={addNewSale}
            className="text-[#51946b] text-xl font-bold pb-[13px] pt-4"
          >
            +
          </button>
        </div>
      </div>

      <h3 className="text-[#0e1a13] text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">
        Products
      </h3>

      <ul>
        {sales[activeSaleIndex].products.map((item, index) => (
          <li
            key={index}
            className="flex items-center gap-4 bg-[#f8fbfa] px-4 min-h-[72px] py-2"
          >
            <div
              className="bg-center bg-no-repeat aspect-square bg-cover rounded-lg size-14"
              style={{ backgroundImage: `url(${item.imagen})` }}
            ></div>
            <div className="flex flex-col justify-center">
              <p className="text-[#0e1a13] text-base font-medium leading-normal line-clamp-1">
                {item.nombre}
              </p>
              <p className="text-[#51946b] text-sm font-normal leading-normal line-clamp-2">
                {item.cantidad} x {item.precio}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};
