// importando bibliotecas
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
// importando componentes
import { NotFound } from "./pages/NotFound/index";
import { Endereco } from "./pages/Endereco";
import "./styles/reset.css"

// roteamento de paginas
export function AppRoutes() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Endereco />} />
                <Route path="/endereco" element={<Endereco />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </Router>
    )
}