import React from "react"
import ReactDOM from "react-dom/client"
import { Provider } from "react-redux"
import { store } from "./app/store"
import App from "./App"
import "./index.css"
// eslint-disable-next-line import/order
import { BrowserRouter } from "react-router-dom"

ReactDOM.createRoot(document.getElementById("root")!).render(
     <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
     </Provider>
)
