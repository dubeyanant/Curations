import { Routes, Route } from "react-router-dom";

import SideBar from "./components/SideBar";
import Home from "./components/Home";
import Websites from "./components/Websites";
import Quotes from "./components/Quotes";

function App() {
  return (
    <div className="container mx-auto px-[160px] pt-40">
      <div className="flex gap-5">
        <div className="basis-[360px] pb-40">
          <SideBar />
        </div>
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
