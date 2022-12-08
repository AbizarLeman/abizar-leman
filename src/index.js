import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import reportWebVitals from './reportWebVitals'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import Spinner from './Spinner'

const theme = createTheme({
  palette: {
    primary: {
      main: '#661005',
    },
    secondary: {
      main: '#270038',
    }
  }
})

const App = React.lazy(() => import('./App'))

const container = document.getElementById('root')
const root = createRoot(container)
root.render(
  <React.StrictMode>
    <React.Suspense fallback={<Spinner />}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </React.Suspense>
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
