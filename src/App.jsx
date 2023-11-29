import { Routes, Route } from "react-router-dom";
import SideBar from "./components/SideBar";
import Home from "./components/Home";
import Websites from "./components/Websites";
import Quotes from "./components/Quotes";
import { Center, Divider } from "@chakra-ui/react";

function App() {
  return (
    <div className="px-[60px] xl:px-[120px] 2xl:px-[160px] py-16 xl:py-24 2xl:py-32 flex gap-16 xl:gap-20">
      <div className="mr-44">
        <SideBar />
      </div>
      <Center>
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
