import { useState, useEffect } from 'react';

const useFetchProducts = (token, categoryName) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const response = await fetch(`https://nexiblesapp.barecms.com/api/product/get_list/${categoryName}`, {
          headers: {
            'Authorization': `Bearer ${token}`,
            'API-Key': 'irrv211vui9kuwn11efsb4xd4zdkuq',
          },
        });
        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }
        const data = await response.json();
        setProducts(data.data || []);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    if (categoryName) {
      fetchProducts();
    }
  }, [token, categoryName]);

  return { products, loading, error };
};

export default useFetchProducts;