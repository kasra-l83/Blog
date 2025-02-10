import AboutPage from "./pages/About"
import { MainLayout } from "./layouts/main"
import ProjectsPage from "./pages/Projects"
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom"

const router= createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout/>}>
      <Route>
        <Route path="about" element={<AboutPage/>}></Route>
        <Route path="projects" element={<ProjectsPage/>}></Route>
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