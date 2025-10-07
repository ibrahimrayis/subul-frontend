import './CommonPage.css';

export default function Users() {
  // TODO: Fetch users from API
  // const [users, setUsers] = useState([]);
  // useEffect(() => {
  //   api.getUsers().then(data => setUsers(data));
  // }, []);

  return (
    <div className="page">
      <div className="page-header">
        <div>
          <h1 className="page-title gradient-text">Users</h1>
          <p className="page-subtitle">Manage system users and their permissions</p>
        </div>
        <button className="btn btn-primary">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
          Add User
        </button>
      </div>

      <div className="card">
        <div className="table-container">
          <table className="data-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colSpan={5} className="empty-state">
                  No users found. Click "Add User" to create one.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
