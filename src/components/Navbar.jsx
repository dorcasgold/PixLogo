import { Link } from "react-router-dom"

function Navbar() {
  return (
    <nav className="flex items-center justify-between text-lg text-white mx-4 md:mx-20 my-5 md:text-2xl font-bold">
      <div className="flex gap-3 items-center">
        <p className="">PixLogo</p>
        <img src="logo.png" alt="logo" className="w-10" />
      </div>
      <Link to="/main">
        <button className="flex gap-2 text-sm items-center bg-slate-300 font-medium px-4 py-3 text-slate-900 cursor-pointer rounded hover:text-slate-200 hover:bg-slate-700 transition">
          Get Started
        </button>
      </Link>
    </nav>
  )
}

export default Navbar