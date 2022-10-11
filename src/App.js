import { Route, Routes } from "react-router-dom";
import Explore from "./Components/Explore Plus/Explore";
import Home from "./Components/Home/Home";


function App() {
  return (
    <div>
      <Routes>
        {/* <Route path="/" element={<Home></Home>}></Route> */}
        <Route path="/" element={<Explore></Explore>}></Route>
      </Routes>
    </div>
  );
}

export default App;
