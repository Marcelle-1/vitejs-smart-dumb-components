import { useState, useEffect } from 'react';
import { API_BASE_URL } from '../../settings';
import ProductItem from '../ProductItem';

export default function ProductsList() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch(`${API_BASE_URL}/api/products`)
      .then(async (response) => {
        if (!response.ok) {
          throw new Error('Fail to fetch user data');
        }

        const data = await response.json();
        setProducts(data);
        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);
        alert(error.message);
      });
  }, []);

  if (isLoading) {
    return (
      <div>
        <h2>Products</h2>
        <p>🔄️ Carregando...</p>
      </div>
    );
  }

  return (
    <div>
      <h2>Produtcs</h2>
      <ul className="list">
        {products.map((item) => (
          <ProductItem key={item.id} product={item} />
        ))}
      </ul>
    </div>
  );
}
