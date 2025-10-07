import './CommonPage.css';

export default function Products() {
  // TODO: Fetch products from API
  // const [products, setProducts] = useState([]);
  // useEffect(() => {
  //   api.getProducts().then(data => setProducts(data));
  // }, []);

  return (
    <div className="page">
      <div className="page-header">
        <div>
          <h1 className="page-title gradient-text">Products</h1>
          <p className="page-subtitle">Browse and manage product catalog</p>
        </div>
        <button className="btn btn-primary">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
          Add Product
        </button>
      </div>

      <div className="card">
        <div className="table-container">
          <table className="data-table">
            <thead>
              <tr>
                <th>Product</th>
                <th>Merchant</th>
                <th>Category</th>
                <th>Price</th>
                <th>Stock</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colSpan={6} className="empty-state">
                  No products found. Click "Add Product" to create one.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
