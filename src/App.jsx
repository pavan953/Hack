// import { Route, Routes } from "react-router-dom"
// import Layout from "./components/Layout/Layout.jsx"
// import Home from "./components/Pages/Home.jsx"
// // import Ele from "./components/Pages/Ele.jsx"

// function App() {

//   return (
//     <Routes>
//       <Route path="/" element={<Layout />} >
//         <Route path="" element={<Home />} />
//         {/* <Route path="/ele" element={<Ele />} />/ */}
//       </Route>
//     </Routes>
//   )
// }

// export default App
import { Route, Routes } from "react-router-dom"
import Layout from "./components/Layout/Layout.jsx"
import Home from "./components/Pages/Home.jsx"
import About from './components/Pages/about.jsx'
import Services from "./components/Pages/services.jsx"
import Projects from "./components/Pages/projects.jsx"
import Shop from './components/Pages/Shop.jsx'
// import Contact from './components/Pages/c.jsx'
import MapComponent from './components/Pages/Maps.jsx'
// import Ele from "./components/Pages/Ele.jsx"

function App() {

  return (
    <Routes>
      <Route path="/" element={<Layout />} >
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/Shop" element={<Shop/>}/>
        <Route path="/News" element={<News />} />
        <Route path="/Maps" element={<MapComponent />} />
        {/* <Route path="/ele" element={<Ele />} />/ */}
      </Route>
    </Routes>
  )
}

export default App
