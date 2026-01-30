import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  // Función para determinar si una ruta está activa
  const isActive = (path) => location.pathname === path;

  const navStyles = {
    backgroundColor: '#ffffff',
    padding: '1rem 0',
    boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
    position: 'sticky',
    top: 0,
    zIndex: 1000,
  };

  const containerStyles = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 2rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  };

  const logoStyles = {
    textDecoration: 'none',
    fontSize: '1.5rem',
    fontWeight: 'bold',
    display: 'flex',
    alignItems: 'center',
  };

  const linkStyles = (path) => ({
    textDecoration: 'none',
    color: isActive(path) ? 'var(--primary-cyan)' : 'var(--secondary-gray)',
    fontWeight: '600',
    fontSize: '1rem',
    transition: 'color 0.3s ease',
    marginLeft: '1.5rem'
  });

  return (
    <nav style={navStyles}>
      <div style={containerStyles}>
        {/* LOGO INSTITUCIONAL  */}
        <Link to="/" style={logoStyles}>
          <span style={{ color: 'var(--secondary-gray)' }}>ACP</span>
          <span style={{ color: 'var(--primary-cyan)', marginLeft: '5px' }}>LOGISTICS</span>
        </Link>

        {/* BOTÓN MENÚ MÓVIL  */}
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          style={{ 
            display: 'none', // Se activaría con Media Queries en CSS
            background: 'none', 
            border: 'none', 
            fontSize: '1.5rem', 
            cursor: 'pointer' 
          }}
          className="mobile-menu-btn"
        >
          ☰
        </button>

        {/* ENLACES DE NAVEGACIÓN  */}
        <div style={{ display: 'flex', alignItems: 'center' }} className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
          <Link to="/" style={linkStyles('/')}>Inicio</Link>
          <Link to="/nosotros" style={linkStyles('/nosotros')}>Nosotros</Link>
          <Link to="/servicios" style={linkStyles('/servicios')}>Servicios</Link>
          
          {/* BOTÓN CTA: COTIZADOR DINÁMICO  */}
          <Link to="/contacto" style={{ textDecoration: 'none' }}>
            <button className="btn-primary" style={{ marginLeft: '1.5rem' }}>
              Cotizar
            </button>
          </Link>
        </div>
      </div>

      {/* Estilos embebidos para la funcionalidad móvil básica */}
      <style>{`
        @media (max-width: 768px) {
          .nav-links {
            display: ${isMenuOpen ? 'flex' : 'none'} !important;
            flex-direction: column;
            position: absolute;
            top: 100%;
            left: 0;
            width: 100%;
            background: white;
            padding: 1rem 0;
            box-shadow: 0 5px 10px rgba(0,0,0,0.1);
          }
          .nav-links a, .nav-links button {
            margin: 10px 0 !important;
          }
          .mobile-menu-btn {
            display: block !important;
          }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;