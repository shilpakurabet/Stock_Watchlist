/** @format */

import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home";
import WatchList from "./Components/WatchList";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/watch-list" element={<WatchList />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
