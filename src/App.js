import { createBrowserRouter, RouterProvider, createRoutesFromElements, Route } from "react-router-dom/dist";
import Home from "./pages/Home";
import About from "./pages/About";
import Items from "./pages/Items"

function App() {

  /**First method  */
  const router = createBrowserRouter(
    [
      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/items", element: <Items /> }
    ]
  )


  /**Seconde Method */
  // const routes = createRoutesFromElements(
  //   <>
  //     <Route path="/" element={<Home />} />
  //     <Route path="/about" element={<About />} />
  //     <Route path="/items" element={<Items />} />
  //   </>
  // )
  // const router = createBrowserRouter(routes);


  return <>
    {/* 'router' in colour in below line is the attribute of "RouterProvider" and 'router' in braces'{}' is 
  the const variable declared above storing 'createBrowserRouter' */}
    <RouterProvider router={router} />
  </>;
}

export default App;
