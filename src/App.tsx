import { BrowserRouter as Router, Routes, Route, Link } from "react-router";
import { Home } from "./pages/Home";
import { GameDetails } from "./pages/GameDetails";
import TextField from "@mui/material/TextField";

const Header = () => {
  return (
    <header>
      <div className="flex justify-between items-center py-4 bg-red-700 px-20">
        <h1 className="text-4xl">Game Rating</h1>
        <nav>
          <Link to="/">Home</Link>
        </nav>
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
      <Router>
        <Header />
        <div className="p-20">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/game/:id" element={<GameDetails />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
