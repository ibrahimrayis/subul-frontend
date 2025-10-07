import './CommonPage.css';

export default function Notifications() {
  // TODO: Fetch notifications from API
  // const [notifications, setNotifications] = useState([]);
  // useEffect(() => {
  //   api.getNotifications().then(data => setNotifications(data));
  // }, []);

  return (
    <div className="page">
      <div className="page-header">
        <div>
          <h1 className="page-title gradient-text">Notifications</h1>
          <p className="page-subtitle">View all system notifications and alerts</p>
        </div>
        <button className="btn btn-secondary">Mark All as Read</button>
      </div>

      <div className="card">
        <div className="notifications-list">
          <div className="empty-state" style={{ padding: '3rem', textAlign: 'center' }}>
            <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ margin: '0 auto 1rem', opacity: 0.3 }}>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg>
            <p>No notifications at this time</p>
          </div>
        </div>
      </div>
    </div>
  );
}
