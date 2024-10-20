import { Link } from "react-router-dom"

export const NotFound: React.FC = () =>{
    return (
        <div className="h-[100vh] flex items-center justify-center space-x-10 mt-[-80px]">
            <h3 className="text-8xl font-semibold mb-[20px]">404</h3>
            <div className="flex-col space-y-4">
                <h3 className="text-2xl font-bold ml-5">Sorry we couldn't find this page.</h3>
                <p className="text-base font-normal text-gray-700 mr-1 border-l-2 pl-5">But dont worry, you can find plenty of other things on <div>our homepage.</div></p>
                <Link to="/"><button className="text-sm py-2 px-4 bg-[#1D4ED8] hover:bg-blue-900 text-white rounded-md font-medium ml-5 mt-5">Back to homepage</button></Link>
            </div>
        </div>
    )
}