import { Link, UNSAFE_ErrorResponseImpl, useRouteError } from "react-router-dom";
import { NotFound } from "../pages/NotFound";

export const ErrorBoundary: React.FC = () =>{
  const error = useRouteError();
  if ((error as UNSAFE_ErrorResponseImpl).status === 404){
    return <NotFound/>;
  }
  return (
    <div className="h-[100vh] flex items-center justify-center space-x-10 mt-[-80px]">
      <h3 className="text-8xl font-semibold mb-[20px]">{(error as any). status}</h3>
      <div className="flex-col space-y-4">
        <h3 className="text-2xl font-bold ml-5">{(error as any).message}</h3>
        <Link to="/"><button className="text-sm py-2 px-4 bg-[#1D4ED8] hover:bg-blue-900 text-white rounded-md font-medium ml-5 mt-5">Back to homepage</button></Link>
      </div>
    </div>
  )
}