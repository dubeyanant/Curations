import { Routes, Route } from "react-router-dom";

import SideBar from "./components/SideBar";
import Home from "./components/Home";
import Websites from "./components/Websites";
import Quotes from "./components/Quotes";

function App() {
  return (
    <div className="container mx-auto px-[160px] py-32 flex gap-20">
      <div className="flex-shrink-0">
        <SideBar />
      </div>
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
