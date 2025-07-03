import {Route, Routes} from "react-router-dom";
import WelcomePage from "../pages/WelcomePage.tsx";
import CalculatorPage from "../pages/CalculatorPage.tsx";

export const AppRoutes = () => {
    return (
        <Routes>
            <Route path={'/'} element={<WelcomePage/>}/>
            <Route path={'/calculator'} element={<CalculatorPage/>}/>
            <Route path={'/*'} element={<WelcomePage/>}/>
        </Routes>
    )
}