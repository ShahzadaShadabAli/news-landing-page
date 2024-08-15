import BottomSection from "./components/BottomSection";
import LeftSection from "./components/LeftSection";
import Navbar from "./components/Navbar";
import RightSection from "./components/RightSection";

function App() {

  return (
    <main className="bg-off flex justify-center pt-12">
      <div className="w-[80%] max-md:w-[90%]">
      <Navbar />
      <div className="flex w-full gap-[3%] mt-14 max-md:flex-col">
        <LeftSection />
        <RightSection />
      </div>
      <BottomSection />
      </div>
    </main>
  );
}

export default App;
