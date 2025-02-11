import HomePage from "./pages/Home"
import AboutPage from "./pages/About"
import { MainLayout } from "./layouts/main"
import ProjectsPage from "./pages/Projects"
import { QueryClient ,QueryClientProvider } from "@tanstack/react-query"
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom"

const queryClient= new QueryClient();

const router= createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout/>}>
      <Route index={true} element={<HomePage/>}></Route>
      <Route>
        <Route path="about" element={<AboutPage/>}></Route>
        <Route path="projects" element={<ProjectsPage/>}></Route>
      </Route>
    </Route>
  )
)

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router}></RouterProvider>
    </QueryClientProvider>
  )
}
export default App