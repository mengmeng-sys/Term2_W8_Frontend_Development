import { useState } from 'react'
import './App.css'
import AsyncCounter from '@ex3/components/AsyncCounter.jsx'
import ToggleBox from '@ex1/components/ToggleBox.jsx'
// STARTUP CODE
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
// Import your components from /components/...

export default function App() {
  return (
    <BrowserRouter>
      <nav className="p-4 flex gap-4 bg-gray-800 text-white">
        <Link to="/">Toggle</Link>
        <Link to="/AsyncCounter">Counter</Link>
      </nav>

      <Routes>
        {/* GAP: Define the Route for the Home path "/" */}
        <Route path="/" element={<ToggleBox />} />

        {/* GAP: Define the Route for the "/counter" path */}
        <Route path="/AsyncCounter" element={<AsyncCounter />} />
      </Routes>
    </BrowserRouter>
  );
}