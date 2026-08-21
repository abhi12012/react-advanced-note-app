import ErrorBoundary from "./components/ErrorBoundary";

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import NotesProvider from "./context/NotesProvider";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ErrorBoundary>
      <NotesProvider>
        <App />
      </NotesProvider>
    </ErrorBoundary>
  </StrictMode>
);