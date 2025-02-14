import { IoClose } from "react-icons/io5"

interface MenuProps {
  close: () => void
}

function Menu({close}: MenuProps) {
  return (
    <div className="fixed inset-0 bg-white p-6 dark:bg-black dark:text-white">
      <button className="absolute top-12 right-4 text-3xl hover:text-purple-500" onClick={close}>
        <IoClose />
      </button>
      <ul className="flex flex-col gap-y-4 mt-5 text-2xl">
        <li>
          <a href="/" className="hover:text-purple-500">Home</a>
        </li>
        <li>
          <a href="#" className="hover:text-purple-500">Blog</a>
        </li>
        <li>
          <a href="/tags" className="hover:text-purple-500">Tags</a>
        </li>
        <li>
          <a href="/projects" className="hover:text-purple-500">Projects</a>
        </li>
        <li>
          <a href="/about" className="hover:text-purple-500">About</a>
        </li>
      </ul>
    </div>
  )
}
export default Menu