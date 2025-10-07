import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import Users from './pages/Users';
import Merchants from './pages/Merchants';
import Products from './pages/Products';
import Orders from './pages/Orders';
import Delivery from './pages/Delivery';
import Payments from './pages/Payments';
import Notifications from './pages/Notifications';
import Login from './pages/Login';

// Simple auth check
const isAuthenticated = () => {
  return !!localStorage.getItem('authToken');
};

// Protected route wrapper
function ProtectedRoute({ children }: { children: JSX.Element }) {
  return isAuthenticated() ? children : <Navigate to="/login" replace />;
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Layout />
            </ProtectedRoute>
          }
        >
          <Route index element={<Dashboard />} />
          <Route path="users" element={<Users />} />
          <Route path="merchants" element={<Merchants />} />
          <Route path="products" element={<Products />} />
          <Route path="orders" element={<Orders />} />
          <Route path="delivery" element={<Delivery />} />
          <Route path="payments" element={<Payments />} />
          <Route path="notifications" element={<Notifications />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
