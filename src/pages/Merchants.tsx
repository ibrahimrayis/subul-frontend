import './CommonPage.css';

export default function Merchants() {
  // TODO: Fetch merchants from API
  // const [merchants, setMerchants] = useState([]);
  // useEffect(() => {
  //   api.getMerchants().then(data => setMerchants(data));
  // }, []);

  return (
    <div className="page">
      <div className="page-header">
        <div>
          <h1 className="page-title gradient-text">Merchants</h1>
          <p className="page-subtitle">Manage merchant accounts and business information</p>
        </div>
        <button className="btn btn-primary">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
          Add Merchant
        </button>
      </div>

      <div className="card">
        <div className="table-container">
          <table className="data-table">
            <thead>
              <tr>
                <th>Business Name</th>
                <th>Owner</th>
                <th>Category</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colSpan={5} className="empty-state">
                  No merchants found. Click "Add Merchant" to create one.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
