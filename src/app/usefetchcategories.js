import { useEffect, useState } from 'react';

const useFetchCategories = (token) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://nexiblesapp.barecms.com/api/category_master', {
          method: 'GET',
          headers: {
            'Content-type': 'application/json',
            'API-Key': token,
          }
        });
        const result = await response.json();
        if (result.status === 'success') {
          // Filter the data where origin is 'gifting' (case-insensitive)
          const filteredData = result.data.filter(item =>
            item.origin && item.origin.toLowerCase() === 'nexigifting'
          );
          setData(filteredData);
        } else {
          setError(result.error);
        }
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [token]);

  return { data, loading, error };
};

export default useFetchCategories;
