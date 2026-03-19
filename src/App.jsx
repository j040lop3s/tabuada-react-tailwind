import { HashRouter, Routes, Route } from "react-router-dom";
import Menu from "./components/Menu";
import Home from "./pages/Home";
import TabuadaPage from "./pages/TabuadaPage";

const App = () => {
    return (
        <HashRouter>
            {/* O Menu fica fora do <Routes> para aparecer em todas as páginas */}
            <Menu />
            
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/tabuada" element={<TabuadaPage />} />
            </Routes>
        </HashRouter>
    );
};

export default App;