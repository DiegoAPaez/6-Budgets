import {BrowserRouter, Route, Routes} from "react-router-dom";
import WelcomePage from "./pages/WelcomePage.tsx";
import CalculatorPage from "./pages/CalculatorPage.tsx";

function App() {

  return (
    <BrowserRouter>
        <Routes>
            <Route path={'/'} element={<WelcomePage/>}/>
            <Route path={'/calculator'} element={<CalculatorPage/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default App
