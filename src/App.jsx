import { Routes, Route } from "react-router-dom";
import SideBar from "./components/SideBar";
import Home from "./components/Home";
import Websites from "./components/Websites";
import Quotes from "./components/Quotes";
import { Center, Divider } from "@chakra-ui/react";

function App() {
  return (
    <div className="container mx-auto px-[160px] py-32 flex gap-20">
      <div className="flex-shrink-0 mr-44">
        <SideBar />
      </div>
      <Center>
        <Divider orientation="vertical" colorScheme="orange" />
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
