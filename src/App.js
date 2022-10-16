
import "primereact/resources/themes/lara-light-indigo/theme.css";  //theme
import "primereact/resources/primereact.min.css";                  //core css
import "primeicons/primeicons.css";                                //icons
 
import './App.css';
import Suporte from "./pages/suporte";
import FaqComponent from "./components/findr-faq-component";
import FindrLogin from "./pages/login-findr";
import Cadastro from "./pages/cadastro";
import Perfil from "./pages/perfil";
import Match from "./pages/match"
import Rotas from "./routes";
import { useEffect } from "react";

function App() {

    function addClass() {
      var addStyleToMenu = document.querySelector(".menu-findr ul li:nth-child(6)");
      if(addStyleToMenu != undefined){
        addStyleToMenu.classList.add("btn-exit")
      }
    }

    useEffect(() => {
      addClass();
    })

  return (
    <>
    <Rotas/>
    </>
     );
}

export default App;
