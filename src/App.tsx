import TagsPage from "./pages/Tags"
import HomePage from "./pages/Home"
import { Blog } from "./pages/Blog"
import AboutPage from "./pages/About"
import { TagLayout } from "./layouts/tag"
import ProjectsPage from "./pages/Projects"
import { MainLayout } from "./layouts/main"
import BlogByIdPage from "./pages/BlogById"
import { PostByTag } from "./pages/PostByTag"
import { ErrorBoundary } from "./components/ErrorBoundary"
import { QueryClient ,QueryClientProvider } from "@tanstack/react-query"
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom"
import { UserPage } from "./pages/User"
import { UserByIdPage } from "./pages/UserById"

const queryClient= new QueryClient();

const router= createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout/>} errorElement={<ErrorBoundary/>}>
      <Route index={true} element={<HomePage/>}></Route>
      <Route path="about" element={<AboutPage/>}></Route>
      <Route path="projects" element={<ProjectsPage/>}></Route>
      <Route path="tags">
        <Route index={true} element={<TagsPage/>} />
        <Route path=":tag" element={<TagLayout/>}>
          <Route index={true} element={<PostByTag/>} />
        </Route>
      </Route>
      <Route path="/blog" element={<TagLayout/>}>
        <Route index={true} element={<Blog/>} />
        <Route path=":id" element={<BlogByIdPage/>}></Route>
      </Route>
      <Route path="/users" element={<UserPage/>}></Route>
      <Route path="/users/:id" element={<UserByIdPage/>}></Route>
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