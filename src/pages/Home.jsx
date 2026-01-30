import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  // Estilos rápidos para las secciones
  const heroSectionStyle = {
    padding: '120px 20px',
    textAlign: 'center',
    background: 'linear-gradient(rgba(0,0,0,0.65), rgba(0,0,0,0.65)), url("https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=1200&q=80")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    color: 'white'
  };

  const sectionStyle = {
    padding: '80px 2rem',
    maxWidth: '1200px',
    margin: '0 auto'
  };

  return (
    <div>
      {/* SECCIÓN HERO - Impacto Visual y CTA */}
      <section style={heroSectionStyle}>
        <div className="container">
          <h1 style={{ fontSize: '3.5rem', marginBottom: '1.5rem', color: 'var(--primary-cyan)' }}>
            ACP LOGISTICS SAC
          </h1>
          <p style={{ fontSize: '1.25rem', maxWidth: '800px', margin: '0 auto 2.5rem', lineHeight: '1.6' }}>
            Soluciones integrales de alto impacto en logística internacional. Especialistas en transporte aéreo, marítimo, terrestre y agenciamiento de aduana.
          </p>
          <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/servicios">
              <button className="btn-primary" style={{ padding: '1rem 2rem', fontSize: '1.1rem' }}>
                Ver Servicios
              </button>
            </Link>
            {/* Botón de WhatsApp - Requerimiento Fase 1  */}
            <a 
              href="https://wa.me/51946243145" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-primary" 
              style={{ backgroundColor: '#25D366', textDecoration: 'none', padding: '1rem 2rem', fontSize: '1.1rem' }}
            >
              Atención Inmediata
            </a>
          </div>
        </div>
      </section>

      {/* SECCIÓN RESUMEN NOSOTROS - Validación MTC  */}
      <section style={sectionStyle}>
        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
          <h2 style={{ fontSize: '2.5rem', color: 'var(--secondary-gray)' }}>Líderes en Logística</h2>
          <div style={{ width: '80px', height: '4px', backgroundColor: 'var(--primary-cyan)', margin: '1rem auto' }}></div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px' }}>
          <div>
            <h3 style={{ color: 'var(--primary-cyan)', marginBottom: '1rem' }}>Experiencia y Confianza</h3>
            <p style={{ color: '#555', marginBottom: '1.5rem' }}>
              Nos especializamos en el diseño y desarrollo de plataformas de alto impacto para el sector logístico, asegurando el cumplimiento de los requisitos de fiscalización del MTC.
            </p>
            <Link to="/nosotros" style={{ color: 'var(--primary-cyan)', fontWeight: 'bold', textDecoration: 'none' }}>
              Conoce nuestra Misión y Visión →
            </Link>
          </div>
          <div style={{ borderRadius: '15px', overflow: 'hidden' }}>
            <img 
              src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=600&q=80" 
              alt="Logística Internacional" 
              style={{ width: '100%', display: 'block' }} 
            />
          </div>
        </div>
      </section>

      {/* SECCIÓN PILARES DE SERVICIO - Fase 1  */}
      <section style={{ backgroundColor: 'var(--light-bg)', padding: '80px 20px' }}>
        <div style={sectionStyle}>
          <h2 style={{ textAlign: 'center', marginBottom: '50px', color: 'var(--secondary-gray)' }}>Nuestros 4 Pilares Operativos</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px' }}>
            {['Transporte Aéreo', 'Transporte Marítimo', 'Transporte Terrestre', 'Agenciamiento de Aduana'].map((pilar) => (
              <div key={pilar} style={{ 
                padding: '30px 20px', 
                backgroundColor: 'white', 
                textAlign: 'center', 
                borderRadius: '10px',
                borderBottom: '4px solid var(--primary-cyan)'
              }}>
                <strong style={{ fontSize: '1.1rem', color: 'var(--secondary-gray)' }}>{pilar}</strong>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '40px' }}>
            <Link to="/servicios" className="btn-primary" style={{ textDecoration: 'none', display: 'inline-block' }}>
              Explorar Catálogo Completo
            </Link>
          </div>
        </div>
      </section>

      {/* CALL TO ACTION FINAL */}
      <section style={{ padding: '80px 20px', textAlign: 'center' }}>
        <h2 style={{ marginBottom: '1.5rem' }}>¿Necesita una cotización personalizada?</h2>
        <p style={{ marginBottom: '2.5rem', color: '#666' }}>Estamos listos para gestionar su carga con eficiencia técnica y profesional.</p>
        <Link to="/contacto">
          <button className="btn-primary" style={{ padding: '1.2rem 3rem', fontSize: '1.2rem' }}>
            Contactar Ahora
          </button>
        </Link>
      </section>
    </div>
  );
};

export default Home;