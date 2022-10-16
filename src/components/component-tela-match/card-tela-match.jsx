import { useState } from "react";
import "../component-tela-match/card-tela-match.css"


function CardTelaMatch({ name, descriptionProject, requiredArea, requiredLanguages, onAccept, onRefuse }) {
    return (
        <div className="match-information">
            <div className="imagea-usuario"></div>
            <div className="img-user-logado"></div>
            <div className="name-user">
                <h1>{name}</h1>
                <h3>Projeto</h3>
                {descriptionProject}
                <div className="technologics">
                    <div className="tecnologics-and-levels">
                        <div className="tecnolgics-info">
                            <div className="imagem-tecno"></div>
                            <h3>Área Requirida</h3>
                            <p>{requiredArea}</p>
                            <h3>Linguagens requeridas</h3>
                            <p>{requiredLanguages}</p>
                            {/* <div className="bars-levels"></dp */}
                        </div>
                    </div>
                </div>
            </div>
            <button onClick={onAccept}>aceitar</button>
            <button onClick={onRefuse}>recusar</button>
            <div className="imagem-two"></div>
        </div>

    )
}

export default CardTelaMatch;