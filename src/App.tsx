import {BrowserRouter} from "react-router-dom";
import {BudgetProvider} from "./context/BudgetProvider.tsx";
import {AppRoutes} from "./routes/AppRoutes.tsx";

function App() {

  return (
    <BrowserRouter>
        <BudgetProvider>
            <AppRoutes/>
        </BudgetProvider>
    </BrowserRouter>
  )
}

export default App
