import './CommonPage.css';

export default function Payments() {
  // TODO: Fetch payments from API
  // const [payments, setPayments] = useState([]);
  // useEffect(() => {
  //   api.getPayments().then(data => setPayments(data));
  // }, []);

  return (
    <div className="page">
      <div className="page-header">
        <div>
          <h1 className="page-title gradient-text">Payments</h1>
          <p className="page-subtitle">View and manage payment transactions</p>
        </div>
        <div className="filter-buttons">
          <button className="btn btn-secondary">All</button>
          <button className="btn btn-secondary">Completed</button>
          <button className="btn btn-secondary">Pending</button>
          <button className="btn btn-secondary">Failed</button>
        </div>
      </div>

      <div className="card">
        <div className="table-container">
          <table className="data-table">
            <thead>
              <tr>
                <th>Transaction ID</th>
                <th>Order ID</th>
                <th>Amount</th>
                <th>Method</th>
                <th>Status</th>
                <th>Date</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colSpan={7} className="empty-state">
                  No payments found.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
