import Menu from "./Menu"
import logo from "../assets/logo.svg"
import { MdSunny } from "react-icons/md"
import { IoMoon } from "react-icons/io5"
import { IoMdMenu } from "react-icons/io"
import { IoSearch } from "react-icons/io5"
import { useEffect, useState } from "react"

function Header() {
  const [theme, setTheme]= useState<"dark" | "light">(() =>{
    return localStorage.getItem("theme") as "dark" | "light" || "light";
  })
  const [open, setOpen]= useState<boolean>(false);

  const themeChanger= () =>{
    if(theme=== "dark"){
      setTheme("light");
      localStorage.setItem("theme", "light");
    }else {
      setTheme("dark");
      localStorage.setItem("theme", "dark");
    }
  }

  useEffect(() =>{
    if (theme=== "dark") {
      document.documentElement.classList.add("dark");
    }else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme])
  
  return (
    <header className="py-10 flex justify-between items-center mx-auto max-w-[720px] lg:max-w-[1024px]">
      <span className='flex items-center gap-x-3'>
        <img src={logo} alt="" />
        <h1 className="text-2xl font-semibold dark:text-white hidden sm:block">TailwindBlog</h1>
      </span>
      <span className="font-medium flex gap-x-7 items-center dark:text-white">
        <ul className="gap-x-7 hidden sm:flex">
          <li>
            <a href="#" className="hover:text-purple-500">Blog</a>
          </li>
          <li>
            <a href="#" className="hover:text-purple-500">Tags</a>
          </li>
          <li>
            <a href="/projects" className="hover:text-purple-500">Projects</a>
          </li>
          <li>
            <a href="/about" className="hover:text-purple-500">About</a>
          </li>
        </ul>
        <IoSearch className="text-2xl hover:text-purple-500"/>
        <button className="text-2xl hover:text-purple-500" onClick={themeChanger}>{theme!== "dark" ? <MdSunny/> : <IoMoon/>}</button>
        <button className="text-3xl hover:text-purple-500 sm:hidden" onClick={() => setOpen(true)}>
          <IoMdMenu/>
        </button>
      </span>
      {open && <Menu close={() => setOpen(false)}/>}
    </header>
  )
}
export default Header