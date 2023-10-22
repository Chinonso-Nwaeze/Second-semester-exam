import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Counter from "./Counter";
import Home from "./Home";
import NotFound from "./NotFound";
import Test from "./Test";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/"element={<Home />} />
        <Route path="/counter"element={<Counter />} />
        <Route path="*"element={<NotFound />} />
        <Route path="/test"element={<Test />} />
      </Routes>
    </Router>
  );
}

export default App;
