import { MainLayout } from "./layouts/main"
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom"

const router= createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout/>}></Route>
  )
)

function App() {
  return (
    <RouterProvider router={router}></RouterProvider>
  )
}
export default App