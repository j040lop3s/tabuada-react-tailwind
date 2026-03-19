import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from "./components/Menu";
import Home from "./pages/Home";
import TabuadaPage from "./pages/TabuadaPage";

const App = () => {
    return (
        <BrowserRouter>
            {/* O Menu fica fora do <Routes> para aparecer em todas as páginas */}
            <Menu />
            
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/tabuada" element={<TabuadaPage />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;