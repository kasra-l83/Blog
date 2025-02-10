import { MdEmail } from "react-icons/md"
import { IoLogoGithub } from "react-icons/io5"
import { FaXTwitter, FaLinkedin } from "react-icons/fa6"


function AboutPage() {
  return (
    <section>
      <h1 className="text-3xl font-bold pb-9 border-b sm:text-6xl dark:text-white">About</h1>
      <div className="py-8 flex flex-col text-gray-600 gap-8 dark:text-gray-300 xl:flex-row">
        <div className="flex flex-col min-w-80 items-center">
          <img src="/avatar.png" alt="Avatar" className="size-48 rounded-full"/>
          <h3 className="text-2xl font-bold text-black pt-4 pb-2 dark:text-white">Tails Azimuth</h3>
          <h5 className="text-center px-3">Professor of Atmospheric Science Stanford University</h5>
          <span className="flex pt-6 gap-x-3 text-4xl">
            <MdEmail className="hover:text-purple-500 cursor-pointer" title="Email"/>
            <IoLogoGithub className="hover:text-purple-500 cursor-pointer" title="Github"/>
            <FaLinkedin className="hover:text-purple-500 cursor-pointer" title="Linkedin"/>
            <FaXTwitter className="hover:text-purple-500 cursor-pointer" title="X"/>
          </span>
        </div>
        <div className="space-y-5 text-base leading-7">
          <p className="xl:pr-16">Tails Azimuth is a professor of atmospheric sciences at the Stanford AI Lab. His research interests includes complexity modelling of tailwinds, headwinds and crosswinds.</p>
          <p>He leads the clean energy group which develops 3D air pollution-climate models, writes differential equation solvers, and manufactures titanium plated air ballons. In his free time he bakes raspberry pi.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed neque elit, tristique placerat feugiat ac, facilisis vitae arcu. Proin eget egestas augue. Praesent ut sem nec arcu pellentesque aliquet. Duis dapibus diam vel metus tempus vulputate.</p>
        </div>
      </div>
    </section>
  )
}
export default AboutPage