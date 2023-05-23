import React from 'react'
import ReactDOM from 'react-dom/client'
import { Navigate, RouterProvider, createBrowserRouter } from 'react-router-dom'
import LoginPage from './pages/login.page'
import SignupPage from './pages/signup.page';
import HomePage from './pages/home.page';
import { AppContext } from './hooks/app.context';
import Access from './types/access.model';

// Routes
const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to="/login" />
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/signup",
    element: <SignupPage />
  },
  {
    path: "/home",
    element: <HomePage />
  }
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <AppContext.Provider value={{} as Access}>
      <RouterProvider router={router} />
    </AppContext.Provider>
  </React.StrictMode>,
)
