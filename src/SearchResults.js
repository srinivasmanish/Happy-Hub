// src/SearchResults.js
import { useLocation } from "react-router-dom";
import allProducts from "./allproducts";
import { useCart } from "./Cart/Cart"; 


function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const SearchResults = () => {
  const query = useQuery();
  const searchTerm = (query.get("q") || "").toLowerCase();
const { addToCart } = useCart();

  // Filter products by title/category/type/description etc.
  const results = allProducts.filter(item =>
    item.title.toLowerCase().includes(searchTerm) ||
    (item.category && item.category.toLowerCase().includes(searchTerm)) ||
    (item.type && item.type.toLowerCase().includes(searchTerm))
    // add more fields if needed
  );

  return (
    <div className="search-results-container">
      <h2>Search Results</h2>
      <p>
        Showing results for: <strong>{searchTerm}</strong>
      </p>
      {results.length === 0 ? (
        <p>No results found.</p>
      ) : (
        <div className="card-container">
          {results.map(item => (
            <div className="card" key={item.id}>
              <img src={item.image} alt={item.title} />
              <div className="card-content">
                <p className="card-title">{item.title}</p>
                <p className="price">₹{item.price}</p>
                <button
  className="add-to-cart-btn"
  onClick={() => addToCart({ ...item, quantity: 1 })}
>
  Add to Cart
</button>

              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchResults;
