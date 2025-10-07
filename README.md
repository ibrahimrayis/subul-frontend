# Subul Frontend

A modern, responsive React-based admin dashboard for the Subul system built with Vite and TypeScript.

![Subul Logo](src/assets/logo.svg)

## 🚀 Features

- **Modern Tech Stack**: Built with React 18, TypeScript, and Vite for blazing-fast development
- **Branded Design**: Gradient color theme inspired by the Subul logo (#667eea to #764ba2)
- **Responsive Layout**: Mobile-first design that works on all devices
- **Modular Architecture**: Organized page components for easy maintenance
- **API Ready**: Pre-configured service layer for backend integration
- **Authentication**: Login page with protected routes
- **Navigation**: Intuitive sidebar navigation with icons
- **Clean UI**: Card-based layout with modern styling

## 📦 Pages

The application includes the following modular pages:

- **Dashboard** - Overview with statistics and recent activity
- **Users** - User management and permissions
- **Merchants** - Merchant accounts and business information
- **Products** - Product catalog management
- **Orders** - Order tracking and management
- **Delivery** - Delivery status and logistics
- **Payments** - Payment transaction management
- **Notifications** - System notifications and alerts
- **Login** - Authentication page

## 🛠️ Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/ibrahimrayis/subul-frontend.git
   cd subul-frontend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure environment variables**
   ```bash
   cp .env.example .env
   ```
   Edit `.env` and set your API base URL:
   ```
   VITE_API_BASE_URL=http://localhost:8000/api
   ```

## 🚀 Development

Start the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

## 🏗️ Build

Build for production:

```bash
npm run build
```

The built files will be in the `dist/` directory.

## 👀 Preview Production Build

Preview the production build locally:

```bash
npm run preview
```

## 🧹 Linting

Run ESLint to check code quality:

```bash
npm run lint
```

## 🎨 Branding

The application uses a gradient color theme based on the Subul logo:

- **Primary Start**: `#667eea`
- **Primary End**: `#764ba2`
- **Gradient**: `linear-gradient(135deg, #667eea 0%, #764ba2 100%)`

### Assets

- **Logo**: Located at `src/assets/logo.svg`
- **Favicon**: Located at `public/favicon.svg`

> **Note**: The current logo and favicon are placeholders. Replace them with your actual Subul branding assets for production use.

## 🔌 API Integration

The application is ready to connect to a backend API. Update the API configuration in:

- `src/services/api.ts` - API service methods
- `.env` - API base URL

### Example API Usage

```typescript
import api from './services/api';

// Login
const response = await api.login({ email, password });
localStorage.setItem('authToken', response.token);

// Fetch data
const users = await api.getUsers({ page: 1, limit: 10 });
const orders = await api.getOrders({ status: 'pending' });
```

## 📁 Project Structure

```
subul-frontend/
├── public/              # Static assets
│   └── favicon.svg      # Favicon
├── src/
│   ├── assets/          # Images, logos, etc.
│   │   └── logo.svg     # Subul logo
│   ├── components/      # Reusable components
│   │   ├── Header.tsx
│   │   ├── Sidebar.tsx
│   │   └── Layout.tsx
│   ├── pages/           # Page components
│   │   ├── Dashboard.tsx
│   │   ├── Users.tsx
│   │   ├── Merchants.tsx
│   │   ├── Products.tsx
│   │   ├── Orders.tsx
│   │   ├── Delivery.tsx
│   │   ├── Payments.tsx
│   │   ├── Notifications.tsx
│   │   └── Login.tsx
│   ├── services/        # API services
│   │   └── api.ts
│   ├── styles/          # Global styles
│   │   └── index.css
│   ├── App.tsx          # Main app component
│   └── main.tsx         # Entry point
├── index.html           # HTML template
├── package.json         # Dependencies
├── tsconfig.json        # TypeScript config
├── vite.config.ts       # Vite config
└── README.md           # Documentation
```

## 🔐 Authentication

The application includes a basic authentication system:

- Login page at `/login`
- Protected routes for authenticated users
- Token storage in localStorage
- Automatic redirect to login for unauthenticated users

> **Demo**: For development, you can login with any email and password. Update `src/pages/Login.tsx` to integrate with your actual authentication API.

## 🎯 TODO

- [ ] Replace placeholder logo and favicon with actual Subul branding
- [ ] Connect to real backend API endpoints
- [ ] Implement data fetching and state management
- [ ] Add form validation and error handling
- [ ] Implement user profile and settings pages
- [ ] Add loading states and skeleton screens
- [ ] Implement search and filtering functionality
- [ ] Add pagination for data tables
- [ ] Implement real-time notifications
- [ ] Add unit and integration tests

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is proprietary and confidential.

## 👥 Contact

For questions or support, please contact the development team.

---

Built with ❤️ using Vite + React + TypeScript