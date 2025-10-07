import { useEffect, useState } from 'react';
import './Dashboard.css';

interface StatCard {
  title: string;
  value: string;
  change: string;
  icon: JSX.Element;
}

export default function Dashboard() {
  const [stats] = useState<StatCard[]>([
    {
      title: 'Total Users',
      value: '1,234',
      change: '+12.5%',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
    },
    {
      title: 'Total Orders',
      value: '5,678',
      change: '+8.2%',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
        </svg>
      ),
    },
    {
      title: 'Revenue',
      value: '$45,678',
      change: '+23.1%',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: 'Active Merchants',
      value: '234',
      change: '+5.4%',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
    },
  ]);

  useEffect(() => {
    // Fetch dashboard stats from API
    // api.getDashboardStats().then(data => setStats(data));
  }, []);

  return (
    <div className="dashboard">
      <div className="page-header">
        <h1 className="page-title gradient-text">Dashboard</h1>
        <p className="page-subtitle">Welcome to your Subul admin dashboard</p>
      </div>

      <div className="stats-grid">
        {stats.map((stat, index) => (
          <div key={index} className="stat-card card">
            <div className="stat-icon gradient-bg">{stat.icon}</div>
            <div className="stat-content">
              <p className="stat-title">{stat.title}</p>
              <p className="stat-value">{stat.value}</p>
              <p className="stat-change positive">{stat.change} from last month</p>
            </div>
          </div>
        ))}
      </div>

      <div className="dashboard-grid">
        <div className="card dashboard-card">
          <h2 className="card-title">Recent Orders</h2>
          <div className="card-content">
            <p className="placeholder-text">Recent orders will appear here</p>
          </div>
        </div>

        <div className="card dashboard-card">
          <h2 className="card-title">Recent Activity</h2>
          <div className="card-content">
            <p className="placeholder-text">Activity feed will appear here</p>
          </div>
        </div>
      </div>
    </div>
  );
}
