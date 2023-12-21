import "./App.css";
import StickyLayout from "./components/StickyLayout";
import About from "./components/About";

function App() {
  return (
    <div>
      <StickyLayout children={<About />}></StickyLayout>
    </div>
  );
}

export default App;
