import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { GameDetails } from "./pages/GameDetails";
import TextField from "@mui/material/TextField";

const Header = () => {
  return (
    <header>
      <div className="flex justify-between items-center p-3 bg-red-700 px-20">
        <h1>Game Rating</h1>
        <TextField
          id="outlined-basic"
          type="search"
          variant="outlined"
          size="small"
        />
      </div>
    </header>
  );
};

function App() {
  return (
    <>
      <Header />
      <div className="p-20">
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/game/:id" element={<GameDetails />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
