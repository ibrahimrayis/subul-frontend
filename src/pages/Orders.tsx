import './CommonPage.css';

export default function Orders() {
  // TODO: Fetch orders from API
  // const [orders, setOrders] = useState([]);
  // useEffect(() => {
  //   api.getOrders().then(data => setOrders(data));
  // }, []);

  return (
    <div className="page">
      <div className="page-header">
        <div>
          <h1 className="page-title gradient-text">Orders</h1>
          <p className="page-subtitle">Track and manage customer orders</p>
        </div>
        <div className="filter-buttons">
          <button className="btn btn-secondary">All</button>
          <button className="btn btn-secondary">Pending</button>
          <button className="btn btn-secondary">Processing</button>
          <button className="btn btn-secondary">Completed</button>
        </div>
      </div>

      <div className="card">
        <div className="table-container">
          <table className="data-table">
            <thead>
              <tr>
                <th>Order ID</th>
                <th>Customer</th>
                <th>Total</th>
                <th>Status</th>
                <th>Date</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colSpan={6} className="empty-state">
                  No orders found.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
