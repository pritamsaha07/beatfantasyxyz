import { useEffect } from "react";
import {
  Routes,
  Route,
  } from "react-router-dom";
import PageStructure from "./pages/PageStructure";

function App() {
 
  return (
    <Routes>
      <Route path="/" element={<PageStructure />} />
    </Routes>
  );
}
export default App;
