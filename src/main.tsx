import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './pages/index'

// 样式重置
import '~/assets/style/reset.less'
import 'uno.css'

const app = ReactDOM.createRoot(document.getElementById('root')!)

app.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
