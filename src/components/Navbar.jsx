function Navbar() {
  return (
    <nav className="flex items-center justify-between text-lg text-white mx-4 md:mx-20 my-5 md:text-2xl font-bold">
      <div className="flex gap-3 items-center">
        <p className="">PixLogo</p>
        <img src="logo.png" alt="logo" className="w-10" />
      </div>
      <div className="bg-slate-200 text-slate-800 p-3 md:px-4 md:text-xl md:py-4 rounded-lg cursor-pointer hover:text-slate-200 hover:bg-slate-700 transition">
        <p>Get Started</p>
      </div>
    </nav>
  )
}

export default Navbar