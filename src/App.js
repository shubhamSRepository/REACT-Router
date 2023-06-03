import { createBrowserRouter, RouterProvider, createRoutesFromElements, Route } from "react-router-dom/dist";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Items from "./pages/Items"
import ItemDetails from "./pages/ItemDetails";
import Error from "./pages/ErrorPage";

function App() {

  /**First method  */
  const router = createBrowserRouter(
    [
      {
        path: "/",
        element: <Navbar />,

        /** 'error element' can handle errors for sibling and children not for parent.
         * It is recommended to keep 'error element' on the top level. 
        */
        errorElement: <Error />,
        children: [
          /**Path for 'Navbar' and 'Home' { path: "", element: <Home /> } both become same "/" 
           * which is not right, so either we can keep path blank  { path: "", element: <Home /> } 
           * that is if there is no path then it will show home page or we can use the below 
           * method that is using 'index'.
           */
          { index: true, element: <Home /> },
          { path: "about", element: <About /> },
          {
            path: "items",
            children: [
              /**here we have done differently not as in case of children of 'Navbar' 
               * because we are not rendering children on same page using 'outlet'. Instead we are setting 
               * heirarchy of elements at similar path and rendering children on different page.
               */
              { index: true, element: <Items /> },
              /**In 'items/:itemId' "itemId" can be considered as a variable but in react it is called "params" */
              { path: ':itemId', element: <ItemDetails /> }
            ]
          }


        ]
      }


      /**using abolute path */
      // {
      //   path: "/",
      //   element: <Navbar />,
      //   children: [
      //     /**Path for 'Navbar' and 'Home' { path: "", element: <Home /> } both become same "/" 
      //      * which is not right, so either we can keep path blank  { path: "", element: <Home /> } 
      //      * that is if there is no path then it will show home page or we can use the below 
      //      * method that is using 'index'.
      //      */
      //     { index: true, element: <Home /> },
      //     { path: "/about", element: <About /> },
      //     { path: "/items", element: <Items /> }
      //   ]
      // }


      /** using relative path */
      // {
      //   path: "/root",
      //   element: <Navbar />,
      //   children: [
      //     { index: true, element: <Home /> },
      //     { path: "about", element: <About /> },
      //     { path: "items", element: <Items /> }
      //   ]
      // }

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
