import Episode from "./components/Episode";
import Header from "./components/Header";
import Shows from "./components/Shows";
import Season from "./components/Season";
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
        <Routes >
          <Route path="/" element = {<Shows/>}></Route>
          <Route path="/season/:id" element = {<Season/>}></Route>
        </Routes >
      </BrowserRouter>
    </div>
  );
}

export default App;
