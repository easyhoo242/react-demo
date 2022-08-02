import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './pages/App'

// 样式重置
import '~/assets/style/reset.less'
import 'uno.css'

const app = ReactDOM.createRoot(document.getElementById('root')!)

app.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)
