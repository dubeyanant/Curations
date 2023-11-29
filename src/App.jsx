import { Routes, Route } from "react-router-dom";
import SideBar from "./components/SideBar";
import Home from "./components/Home";
import Websites from "./components/Websites";
import Quotes from "./components/Quotes";
import { Center, Divider } from "@chakra-ui/react";
import { AlignJustify } from "lucide-react";

function App() {
  return (
    <div className="px-[60px] xl:px-[120px] 2xl:px-[160px] py-10 md:py-20 lg:py-28 xl:py-32 flex flex-col md:flex-row gap-2 md:gap-16 xl:gap-20 items-start md:items-stretch">
      <div className="flex items-center justify-between w-full visible md:hidden">
        <h2 className="text-2xl font-bold">Curations✨</h2>
        <button>
          <AlignJustify />
        </button>
      </div>
      <div className="fixed md:flex flex-col hidden md:visible">
        <SideBar />
      </div>
      <Center className=" ml-56">
        <Divider orientation="vertical" />
      </Center>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/websites" element={<Websites />} />
          <Route path="/quotes" element={<Quotes />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
