import { Link } from "react-router-dom"

export const NotFoundPage: React.FC= () =>{
    return (
        <section className="h-screen flex items-center justify-center space-x-10">
            <h3 className="text-8xl font-semibold mb-5">404</h3>
            <div className="space-y-4">
                <h3 className="text-2xl font-bold ml-5">Sorry we couldn't find this page.</h3>
                <p className="text-base font-normal text-gray-500 border-l-2 pl-5">
                    But dont worry, you can find plenty of other things on <span className="block">our homepage.</span>
                </p>
                <Link to="/">
                    <button className="text-sm py-2 px-4 bg-purple-500 hover:bg-purple-700 text-white rounded-md font-medium ml-5 mt-5">
                        Back to homepage
                    </button>
                </Link>
            </div>
        </section>
    )
}