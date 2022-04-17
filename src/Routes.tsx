// importando bibliotecas
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
// importando componentes
import { NotFound } from "./pages/NotFound/index";
import { Login } from "./pages/Login/index";
import { Endereco } from "./pages/Endereco/index";
// roteamento de paginas
export function AppRoutes() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Endereco />} />
                <Route path="/login" element={<Login />} />
                <Route path="/endereco" element={<Endereco />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </Router>
    )
}