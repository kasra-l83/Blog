import HomePage from "./pages/Home"
import AboutPage from "./pages/About"
import { MainLayout } from "./layouts/main"
import ProjectsPage from "./pages/Projects"
import { QueryClient ,QueryClientProvider } from "@tanstack/react-query"
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom"
import { TagLayout } from "./layouts/tag"
import TagsPage from "./pages/Tags"

const queryClient= new QueryClient();

const router= createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout/>}>
      <Route index={true} element={<HomePage/>}></Route>
      <Route path="about" element={<AboutPage/>}></Route>
      <Route path="projects" element={<ProjectsPage/>}></Route>
      <Route path="tags">
        <Route index={true} element={<TagsPage/>} />
        <Route path=":id" element={<TagLayout/>}>
          <Route index={true} element={<AboutPage/>} />
        </Route>
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