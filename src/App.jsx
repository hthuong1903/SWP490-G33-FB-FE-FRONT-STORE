import { useState } from "react"
import reactLogo from "./assets/react.svg"
import "./App.css"
import Button from "@mui/material/Button"
import { Box } from "@mui/material"
import MainLayout from "./assets/layout/MainLayout"
import Home from "./pages/Home"
import { Route, Routes } from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
