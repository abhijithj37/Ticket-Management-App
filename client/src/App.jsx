import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import TicketDetails from "./Pages/TicketDetails";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path=":id" element={<TicketDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
