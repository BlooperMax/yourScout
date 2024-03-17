import NavLinks from "../ui/professionals/nav-links";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
<div className="h-screen w-full bg-white relative flex overflow-hidden">

  <aside className="h-full w-16 flex flex-col space-y-10 items-center justify-center relative bg-gray-800 text-white">

    <NavLinks />

  </aside>

<div className="w-full h-full flex flex-col justify-between">

  <header className="h-16 w-full flex items-center relative justify-end px-5 space-x-10 bg-gray-800">

    <div className="flex flex-shrink-0 items-center space-x-4 text-white">
      
      <div className="flex flex-col items-end ">
        <div className="text-md font-medium ">DESCONOCIO</div>
        <div className="text-sm font-regular">WON</div>
      </div>
      
      <div className="h-10 w-10 rounded-full cursor-pointer bg-gray-200 border-2 border-blue-400"></div>
    </div>
  </header>

  <main className="max-w-full h-full flex relative overflow-y-hidden">

    <div className="h-full w-full m-4 flex flex-wrap items-start justify-start rounded-tl grid-flow-col auto-cols-max gap-4 overflow-y-scroll">

        <div className="w-96 h-60 rounded-lg flex-shrink-0 flex-grow bg-gray-400"></div>
        <div className="w-96 h-60 rounded-lg flex-shrink-0 flex-grow bg-gray-400"></div>
        <div className="w-96 h-60 rounded-lg flex-shrink-0 flex-grow bg-gray-400"></div>
        <div className="w-96 h-60 rounded-lg flex-shrink-0 flex-grow bg-gray-400"></div>
        <div className="w-96 h-60 rounded-lg flex-shrink-0 flex-grow bg-gray-400"></div>
        <div className="w-96 h-60 rounded-lg flex-shrink-0 flex-grow bg-gray-400"></div>
        <div className="w-96 h-60 rounded-lg flex-shrink-0 flex-grow bg-gray-400"></div>
        <div className="w-96 h-60 rounded-lg flex-shrink-0 flex-grow bg-gray-400"></div>
        <div className="w-96 h-60 rounded-lg flex-shrink-0 flex-grow bg-gray-400"></div>
      </div>
  </main>
  </div>

</div>
    );
  }