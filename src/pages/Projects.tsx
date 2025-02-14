import { MdOutlineArrowRightAlt } from "react-icons/md"

function ProjectsPage() {
  return (
    <section>
      <h1 className="text-3xl font-bold dark:text-white sm:text-6xl">Projects</h1>
      <h3 className="pt-5 pb-8 border-b text-gray-500 text-lg dark:border-gray-700">Showcase your projects with a hero image (16 x 9)</h3>
      <div className="py-12 flex flex-col gap-8 md:flex-row">
        <div className="border rounded-md w-full dark:border-gray-700">
          <img src="/google.png" alt="" className="w-full mb-3 lg:h-48"/>
          <h3 className="text-2xl px-6 font-semibold mb-3 dark:text-white">A Search Engine</h3>
          <p className="leading-7 text-gray-500 px-6 mb-3">What if you could look up any information in the world? Webpages, images, videos and more. Google has many features to help you find exactly what you're looking for.</p>
          <button className="text-base text-purple-500 ml-6 mb-6 flex gap-x-1 hover:text-purple-700 dark:hover:text-purple-300">
            Learn more <MdOutlineArrowRightAlt className="text-xl mt-1"/>
          </button>
        </div>
        <div className="border rounded-md w-full dark:border-gray-700">
          <img src="/machine.jpg" alt="" className="w-full mb-3 rounded-t-md lg:h-48"/>
          <h3 className="text-2xl px-6 font-semibold mb-3 dark:text-white">The Time Machine</h3>
          <p className="leading-7 text-gray-500 px-6 mb-3">Imagine being able to travel back in time or to the future. Simple turn the knob to the desired date and press "Go". No more worrying about lost keys or forgotten headphones with this simple yet affordable solution.</p>
          <button className="text-base text-purple-500 ml-6 mb-6 flex gap-x-1 hover:text-purple-700 dark:hover:text-purple-300">
            Learn more <MdOutlineArrowRightAlt className="text-xl mt-1"/>
          </button>
        </div>
      </div>
    </section>
  )
}
export default ProjectsPage