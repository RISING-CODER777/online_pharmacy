
"use client"
import React, { useEffect, useState } from "react";

interface Product {
  id: number;
  name: string;
}

const PreviousPurchases: React.FC = () => {
  const [previousPurchases, setPreviousPurchases] = useState<Product[]>([]);

  useEffect(() => {
    // Retrieve previous purchases from localStorage
    const storedPreviousPurchases = JSON.parse(localStorage.getItem('previousPurchases') || '[]') as Product[];
    setPreviousPurchases(storedPreviousPurchases);
  }, []);

  const removeFromPreviousPurchases = (productId: number) => {
    const updatedPurchases = previousPurchases.filter(item => item.id !== productId);
    setPreviousPurchases(updatedPurchases);

    // Update localStorage
    localStorage.setItem('previousPurchases', JSON.stringify(updatedPurchases));
  }

  const addToPreviousPurchases = (product: Product) => {
    const updatedPurchases = [...previousPurchases, product];
    setPreviousPurchases(updatedPurchases);
    localStorage.setItem('previousPurchases', JSON.stringify(updatedPurchases));
  }

  return (
    <div>
      <h1>Previous Purchases</h1>
      <ul>
        {previousPurchases.map(product => (
          <li key={product.id}>
            <span>{product.name}</span>
            <button onClick={() => removeFromPreviousPurchases(product.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PreviousPurchases;
