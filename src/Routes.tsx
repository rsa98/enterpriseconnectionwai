import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";

import Endereco from "./pages/Endereco/Endereco";
import Login from "./pages/Login/Login";

export function AppRoutes() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Endereco />} />
                <Route path="/endereco" element={<Endereco />} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </Router>
    )
}