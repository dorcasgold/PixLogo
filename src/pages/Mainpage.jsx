import BackgroundController from '@/components/BackgroundController'
import Header from '@/components/Header'
import IconController from '@/components/IconController'
import SideNav from '@/components/SideNav'
import { useState } from 'react';

function Mainpage() {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <main className="font-sans bg-slate-950 text-slate-100 h-screen overflow-hidden">
      {/* Header */}
      <Header />

      {/* Flex container for Sidebar and Main content */}
      <div className="flex h-full">

        {/* Sidebar (on small screens, icons only) */}
        <div className="w-16 md:w-64 h-full flex-shrink-0">
          <SideNav selectedIndex={(value) => setSelectedIndex(value)} />
        </div>

        {/* Main content area */}
        <div className="flex-grow grid grid-cols-1 md:grid-cols-2 gap-4 overflow-auto">
          {/* First content block */}
          <div className="border shadow-sm p-5">
            {selectedIndex === 0 ? <IconController /> : <BackgroundController />}
          </div>

          {/* Second content block */}
          <div className="border shadow-sm p-5">
            LogoPreview
          </div>
        </div>
      </div>
    </main>
  );
}


export default Mainpage
