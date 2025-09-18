import { Routes, Route, BrowserRouter } from "react-router"
import LoginPage from "./pages/loginPage/LoginPage"


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  )
}


export default App
