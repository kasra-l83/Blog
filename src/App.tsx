import { MainLayout } from "./layouts/main"
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom"
import AboutPage from "./pages/About"

const router= createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout/>}>
      <Route>
      <Route path="about" element={<AboutPage/>}></Route>
      </Route>
    </Route>
  )
)

function App() {
  return (
    <RouterProvider router={router}></RouterProvider>
  )
}
export default App