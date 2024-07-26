import { Route, Routes } from "react-router-dom"
import Layout from "./components/Layout/Layout.jsx"
import Home from "./components/Pages/Home.jsx"
// import Ele from "./components/Pages/Ele.jsx"

function App() {

  return (
    <Routes>
      <Route path="/" element={<Layout />} >
        <Route path="" element={<Home />} />
        {/* <Route path="/ele" element={<Ele />} />/ */}
      </Route>
    </Routes>
  )
}

export default App
