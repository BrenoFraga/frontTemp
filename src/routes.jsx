import {BrowserRouter, Route, Routes} from "react-router-dom";
import FindrLogin from "./pages/login-findr";
import Suporte from "./pages/suporte";
import Cadastro from "./pages/cadastro";
import FindrMatch from "./pages/match"
import Perfil from "./pages/perfil";
import HabilitsProject from "./pages/habilits-project";
import HabilitsHabilit from "./pages/habilits-habilit";
import Match from "./pages/match";
import Dashboard from "./pages/dashboard";

function Rotas(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<FindrLogin />} />
                <Route path="/suporte" element={<Suporte />} />
                <Route path="/cadastro" element={<Cadastro />} />
                <Route path="/main" element={<FindrMatch />} />
                <Route path="/perfil" element={<Perfil />} />
                <Route path="/habilits/project" element={<HabilitsProject />} />
                <Route path="/habilits/habilit" element={<HabilitsHabilit />} />
                <Route path="/match" element={<Match />} />
                <Route path="/dashboard" element={<Dashboard />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Rotas;