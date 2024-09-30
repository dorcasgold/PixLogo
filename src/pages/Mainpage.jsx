import BackgroundController from "@/components/BackgroundController";
import Header from "@/components/Header";
import IconController from "@/components/IconController";
import LogoPreview from "@/components/LogoPreview";
import SideNav from "@/components/SideNav";
import { useState } from "react";
import {
  ResizablePanelGroup,
  ResizablePanel,
  ResizableHandle,
} from "@/components/ui/resizable"; // Adjust the import path if needed

function Mainpage() {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <main className="font-sans bg-slate-950 text-slate-100 min-h-screen">
      <Header />

      {/* Resizable Panel Group */}
      <ResizablePanelGroup direction="horizontal" className="h-screen">
        {/* Resizable SideNav */}
        <ResizablePanel defaultSize={15} minSize={8} maxSize={15} className="bg-slate-900">
          <div className="h-full">
            <SideNav selectedIndex={(value) => setSelectedIndex(value)} />
          </div>
        </ResizablePanel>

        {/* Resizable Handle */}
        <ResizableHandle withHandle className="bg-slate-700" />

        {/* Main content section */}
        <ResizablePanel defaultSize={80}>
          <div className="grid grid-cols-1 md:grid-cols-6 h-full">
            <div className="md:col-span-3 border shadow-sm border-y-0 border-l-0 border-r-[1px] p-5 overflow-auto">
              {selectedIndex === 0 ? <IconController /> : <BackgroundController />}
            </div>
            <div className="md:col-span-3">
              <LogoPreview />
            </div>
          </div>
        </ResizablePanel>
      </ResizablePanelGroup>
    </main>
  );
}

export default Mainpage;
