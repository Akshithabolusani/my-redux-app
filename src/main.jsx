import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import store from './assets/store/store.js'//brining store
import { Provider } from 'react-redux'//connecting store via provider

createRoot(document.getElementById('root')).render(
    <Provider store={store}>
    <App />
    </Provider>
 ,
)
