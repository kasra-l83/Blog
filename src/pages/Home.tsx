import { GoArrowRight } from "react-icons/go";

export const HomePage: React.FC= () =>{
    return (
        <div className="max-w-[1000px] mx-auto flex space-x-7 mb-10">
            <div className="max-w-[500px] border-2 rounded-md">
                <img src="img/google.png" className="max-h-48 w-full mb-5"/>
                <div className="space-y-3 px-6">
                    <h3 className="text-2xl font-bold">A Search Engine</h3>
                    <p className="text-gray-500">What if you could look up any information in the world? Webpages, images, videos and more. Google has many features to help you find exactly what you're looking for.</p>
                    <button className="flex items-center text-[#DC2777] hover:text-[#aa2762]">Learn more <GoArrowRight /></button>
                </div>
            </div>
            <div className="max-w-[500px] border-2 rounded-md">
                <img src="img/time.png" className="max-h-48 w-full mb-5"/>
                <div className="space-y-3 px-6 mb-5">
                    <h3 className="text-2xl font-bold">The Time Machine</h3>
                    <p className="text-gray-500">Imagine being able to travel back in time or to the future. Simple turn the knob to the desired date and press "Go". No more worrying about lost keys or forgotten headphones with this simple yet affordable solution.</p>
                    <button className="flex items-center text-[#DC2777] hover:text-[#aa2762]">Learn more <GoArrowRight /></button>
                </div>
            </div>
        </div>
    )
}