import React from 'react'
import ReactDOM from 'react-dom'
import { ThemeProvider } from 'styled-components'
import GlobalStyle from './global/style'
import { theme } from './global/theme'
import AppRoutes from './routes/Routes'
import HomePage from './screens/Home/Home'

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <AppRoutes />
      <GlobalStyle />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
)