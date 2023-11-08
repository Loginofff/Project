import { Route, Routes } from "react-router-dom"
import "./App.css"
import { Counter } from "./features/counter/Counter"
import Layout from "./layouts/Layout"
import Error from "./components/error/Error"

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
function App() {
  return (
    <Routes>
    <Route path="/" element={<Layout />}>
      <Route path="counter" element={<Counter />} />
      <Route path="*" element={<Error />} />
    </Route>
    </Routes>
  )
}

export default App
