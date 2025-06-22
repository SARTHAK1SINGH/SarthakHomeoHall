import React from "react";

const products = [
  {
    id: 1,
    name: "SBL Alfalfa Tonic with Ginseng 500 ML",
    image: "/SBLalfaAlfa.jpg",
    price: "₹280",
  },
  {
    id: 2,
    name: "SBL Alfalfa Tonic with Ginseng 250 ML",
    image: "/SBLalfaAlfa.jpg",
    price: "₹180",
  },
  {
    id: 3,
    name: "SBL Alfalfa Tonic with Ginseng 1000 ML",
    image: "/SBLalfaAlfa.jpg",
    price: "₹400",
  },
];

export default function BuyMedicine() {
  const handleBuy = (productName) => {
    alert(`You selected to buy: ${productName}`);
    // You can implement cart/checkout logic here
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Buy Medicine</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="border rounded-lg shadow-md p-4 text-center"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-40 object-contain mb-4 rounded"
            />
            <h2 className="text-xl font-semibold">{product.name}</h2>
            <p className="text-gray-600 mb-2">{product.price}</p>
            <button
              onClick={() => handleBuy(product.name)}
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Buy
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
