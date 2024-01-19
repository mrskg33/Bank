import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./NavBar";
import Shop from "./Shop";
import Home from "./Home";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<NavBar />}>
          <Route index element={<Home />} />
          <Route path="shop" element={<Shop />} />
        </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
