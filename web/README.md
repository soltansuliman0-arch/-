# React Web Frontend Setup

## Installation

```bash
cd web
npm install
```

## Development

```bash
npm run dev
```

Server runs on: http://localhost:3000

## Build

```bash
npm run build
```

## Features

- ✅ Complete marketplace interface
- ✅ Service browsing and search
- ✅ Order management
- ✅ Real-time messaging
- ✅ User profiles
- ✅ Service provider dashboard
- ✅ Responsive design with Tailwind CSS
- ✅ Redux state management
- ✅ React Hook Form validation

## Project Structure

```
web/
├── src/
│   ├── pages/
│   │   ├── Auth/
│   │   │   ├── Login.jsx
│   │   │   └── Register.jsx
│   │   ├── Home.jsx
│   │   ├── Services.jsx
│   │   ├── ServiceDetail.jsx
│   │   ├── Orders.jsx
│   │   ├── Messages.jsx
│   │   ├── Profile.jsx
│   │   └── Dashboard.jsx
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   └── ProtectedRoute.jsx
│   ├── store/
│   │   ├── store.js
│   │   └── slices/
│   │       ├── authSlice.js
│   │       ├── serviceSlice.js
│   │       ├── orderSlice.js
│   │       └── messageSlice.js
│   ├── hooks/
│   │   └── useAuth.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── package.json
├── vite.config.js
├── tailwind.config.js
└── .env.example
```
