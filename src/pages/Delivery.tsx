import './CommonPage.css';

export default function Delivery() {
  // TODO: Fetch deliveries from API
  // const [deliveries, setDeliveries] = useState([]);
  // useEffect(() => {
  //   api.getDeliveries().then(data => setDeliveries(data));
  // }, []);

  return (
    <div className="page">
      <div className="page-header">
        <div>
          <h1 className="page-title gradient-text">Delivery</h1>
          <p className="page-subtitle">Monitor delivery status and logistics</p>
        </div>
        <div className="filter-buttons">
          <button className="btn btn-secondary">All</button>
          <button className="btn btn-secondary">In Transit</button>
          <button className="btn btn-secondary">Delivered</button>
        </div>
      </div>

      <div className="card">
        <div className="table-container">
          <table className="data-table">
            <thead>
              <tr>
                <th>Tracking ID</th>
                <th>Order ID</th>
                <th>Driver</th>
                <th>Status</th>
                <th>ETA</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colSpan={6} className="empty-state">
                  No deliveries found.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
