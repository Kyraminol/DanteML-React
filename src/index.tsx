import React from 'react'
import ReactDOM from 'react-dom'
import Routes from './Routes'
import { CircularProgress, ThemeProvider } from '@mui/material'
import theme from './helpers/theme'
import GlobalStyles from './helpers/globalStyle'
import './helpers/i18n'

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <React.Suspense fallback={<CircularProgress/>}>
        <GlobalStyles />
        <Routes />
      </React.Suspense>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
