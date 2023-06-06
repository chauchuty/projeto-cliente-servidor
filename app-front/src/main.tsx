import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { AppContext } from './hooks/app.context';
import Access from './types/access.model';
import router from './routes/app.routes';

// Routes


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <AppContext.Provider value={{} as Access}>
      <RouterProvider router={router} />
    </AppContext.Provider>
  </React.StrictMode>,
)
