import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom"
import { PostsPage } from "./pages/Posts"
import { QueryClient ,QueryClientProvider } from "@tanstack/react-query";
import { MainLayout } from "./layouts/main";
import { ErrorBoundary } from "./components/errorBoundary";
import { PostById } from "./pages/PostById";
import { PostComments } from "./components/PostComments";
import { NotFound } from "./pages/NotFound";
import { UsersPage } from "./pages/Users";

const router= createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout/>} errorElement={<ErrorBoundary/>}>
      <Route index={true} element={<p>Home page</p>}></Route>
      <Route>
        <Route path="posts" element={<PostsPage/>}></Route>
        <Route path="post/:id" element={<PostById/>}>
          <Route path="post/:id/comments" element={<PostComments/>}></Route>
        </Route>
        <Route path="users" element={<UsersPage/>}></Route>
        <Route path="*" element={<NotFound/>}></Route>
      </Route>
    </Route>
  )
)
const queryClient = new QueryClient();
function App(){
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router}>
        <h1 className="text-3xl font-bold underline">Hello world!</h1>
      </RouterProvider>
    </QueryClientProvider>
  )
}
export default App