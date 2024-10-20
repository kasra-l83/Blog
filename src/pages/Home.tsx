import { IoMdCheckmarkCircleOutline } from "react-icons/io";

export const HomePage: React.FC= () =>{
    return (
        <div className="max-w-[1100px] mx-auto flex justify-between items-center mb-10">
            <div className="flex-col space-y-10">
                <h1 className="text-5xl font-bold text-lightPurple">Free Modern React Templates for every need.</h1>
                <p className="text-base font-medium text-[gray]">Easily customizable modern React UI Templates and Components built using TailwindCSS which are also lightweight and simple to setup. All components are modular and fully responsive for great mobile experience as well as big desktop screens. Brand Colors are also fully customizable. Free for personal as well as commercial use.</p>
                <div className="flex-col space-y-3">
                    <div className="flex space-x-10">
                        <li className="flex text-base text-[gray]"><IoMdCheckmarkCircleOutline className="size-5 text-lightPurple mr-1"/>7 Landing Page Demos</li>
                        <li className="flex text-base text-[gray]"><IoMdCheckmarkCircleOutline className="size-5 text-lightPurple mr-1"/>8 Inner Pages</li>
                    </div>
                    <div className="flex space-x-10">
                        <li className="flex text-base text-[gray]"><IoMdCheckmarkCircleOutline className="size-5 text-lightPurple mr-1"/>52 Components</li>
                        <li className="flex text-base text-[gray]"><IoMdCheckmarkCircleOutline className="size-5 text-lightPurple mr-1"/>Uses TailwindCSS</li>
                    </div>
                    <div className="flex space-x-10">
                        <li className="flex text-base text-[gray]"><IoMdCheckmarkCircleOutline className="size-5 text-lightPurple mr-1"/>Fully Responsive</li>
                        <li className="flex text-base text-[gray]"><IoMdCheckmarkCircleOutline className="size-5 text-lightPurple mr-1"/>Fully Customizable</li>
                    </div>
                </div>
                <div className="flex space-x-5">
                    <button className="text-base py-4 px-10 font-bold bg-lightPurple hover:bg-darkPurple text-[white] rounded-md">Explore Demos</button>
                    <button className="text-base py-4 px-10 font-bold bg-lightGray hover:bg-darkGray text-[black] rounded-md">View Components</button>
                </div>
            </div>
            <img src="img/laptap.png" className="w-[586px] h-60"/>
        </div>
    )
}