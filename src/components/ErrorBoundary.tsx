import { NotFoundPage } from "../pages/NotFound"
import { Link, UNSAFE_ErrorResponseImpl, useRouteError } from "react-router-dom"

export const ErrorBoundary: React.FC= () =>{
  const error= useRouteError();
  if ((error as UNSAFE_ErrorResponseImpl).status=== 404) return <NotFoundPage/>;

  return (
    <section className="h-screen flex items-center justify-center space-x-10">
      <h3 className="text-8xl font-semibold mb-5">{(error as UNSAFE_ErrorResponseImpl).status}</h3>
      <div className="space-y-4">
        <h3 className="text-2xl font-bold ml-5">{(error as UNSAFE_ErrorResponseImpl).statusText}</h3>
        <p className="text-base font-normal text-gray-500 border-l-2 pl-5">{(error as UNSAFE_ErrorResponseImpl).data}</p>
        <Link to="/">
          <button className="text-sm py-2 px-4 bg-purple-500 hover:bg-purple-700 text-white rounded-md font-medium ml-5 mt-5">
            Back to homepage
          </button>
        </Link>
      </div>
    </section>
  )
}