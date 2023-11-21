import SideBar from "./components/SideBar";
import Home from "./components/Home";

function App() {
  return (
    <div className="container mx-auto px-[160px] pt-40">
      <div className="flex gap-5">
        <div className="basis-[360px] pb-40">
          <SideBar />
        </div>
        <Home />
      </div>
    </div>
  );
}

export default App;
