import { Route, Routes } from "react-router"
import HomePage from "./pages/homePage/HomePage"
import { ThemeProvider } from "./context/Theme"
import { LanguageProvider } from "./context/Language"

function App() {
  return (
    <LanguageProvider>
      <ThemeProvider>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
        </Routes>
      </ThemeProvider>
    </LanguageProvider>
  )
}

export default App