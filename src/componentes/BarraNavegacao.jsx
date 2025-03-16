import React from 'react';
import { NavLink } from 'react-router-dom';
import '../estilos/BarraNavegacao.css';

const BarraNavegacao = () => {
    return (
        <div className="navigation">
            <NavLink to="/" className={({ isActive }) => isActive ? "nav-btn active" : "nav-btn"} end>
                <div className="nav-icon">🍎</div>
                <span>Nutrição</span>
            </NavLink>
            <NavLink to="/suplementos" className={({ isActive }) => isActive ? "nav-btn active" : "nav-btn"}>
                <div className="nav-icon">💊</div>
                <span>Suplementos</span>
            </NavLink>
            <NavLink to="/progresso" className={({ isActive }) => isActive ? "nav-btn active" : "nav-btn"}>
                <div className="nav-icon">📊</div>
                <span>Progresso</span>
            </NavLink>
        </div>
    );
};

export default BarraNavegacao;