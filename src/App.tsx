import {BrowserRouter, Route, Routes} from "react-router-dom";
import WelcomePage from "./pages/WelcomePage.tsx";
import CalculatorPage from "./pages/CalculatorPage.tsx";
import {BudgetProvider} from "./context/BudgetProvider.tsx";

function App() {

  return (
    <BrowserRouter>
        <BudgetProvider>
            <Routes>
                <Route path={'/'} element={<WelcomePage/>}/>
                <Route path={'/calculator'} element={<CalculatorPage/>}/>
                <Route path={'/*'} element={<WelcomePage/>}/>
            </Routes>
        </BudgetProvider>
    </BrowserRouter>
  )
}

export default App
