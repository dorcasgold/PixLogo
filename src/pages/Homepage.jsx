import Navbar from "@/components/Navbar"
import { ArrowRight } from "lucide-react"

function Homepage() {
  return (
    <div className='bg-gradient-to-r from-gray-900 to-slate-900 h-screen w-full overflow-hidden'>
      <div className="flex flex-col mx-2">
        <Navbar />
        <div className='text-center mx-2 flex flex-col items-center justify-center translate-y-20 font-extrabold 
        bg-gradient-to-r from-slate-300 to-slate-400 bg-clip-text text-transparent md:gap-10 gap-2'>
          <p className="text-2xl md:text-[55px] md:py-2">
            <span className="text-white">Welcome</span> to <span className="text-white">PixLogo</span>
          </p>
          <p className="text-2xl md:text-[55px] md:py-2 md:leading-[5rem]">
            Your <span className="text-white">Free</span>, <span className="text-white">Easy-to-Use </span>Logo Maker
          </p>
          <p className="text-2xl md:text-[55px] md:py-2 md:leading-[5rem]"> <span className="text-white">Make</span> a <span className="text-white">beautiful</span> logo in seconds. <span className="text-white">Try it for free!</span></p>
          <div className="my-4">
            <button
              className="flex items-center gap-1 bg-slate-200 text-slate-800 p-3 md:px-5 md:text-xl md:py-4 rounded-lg cursor-pointer hover:text-slate-200 hover:bg-slate-700 transition">
              Create Your free Logo <ArrowRight />
            </button>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Homepage