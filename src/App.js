import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/navbar";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import Form from "./components/Form";
import Showdetails from "./components/Showdetails";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details" element={<Showdetails />} />
        <Route path="/create-challenge" element={<Form />} />
      </Routes>
    </>
  );
}

export default App;
