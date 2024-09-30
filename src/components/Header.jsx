import { DownloadIcon } from "lucide-react"

function Header() {
  return (
    <div className="p-4 shadow-sm border-t-0 border-x-0 border-b-[1px] flex justify-between items-center md:px-5">
      <div className="flex gap-2 items-center">
        <img src="/logo.png" alt="logo" className="w-10" />
        <p className="text-2xl font-semibold ">PixLogo</p>
      </div>
      <button className="flex gap-2 items-center bg-slate-300 font-medium px-3 py-2 text-slate-900 cursor-pointer rounded hover:text-slate-200 hover:bg-slate-700 transition">
        <DownloadIcon /> Download
      </button>
    </div>
  )
}

export default Header