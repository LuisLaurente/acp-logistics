import React from 'react';

const Nosotros = () => {
  const sectionStyle = {
    padding: '80px 2rem',
    maxWidth: '1200px',
    margin: '0 auto'
  };

  const cardStyle = {
    padding: '40px',
    backgroundColor: '#ffffff',
    borderRadius: '12px',
    boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
    borderTop: '5px solid var(--primary-cyan)',
    transition: 'transform 0.3s ease'
  };

  return (
    <div style={{ backgroundColor: 'var(--light-bg)', minHeight: '100vh' }}>
      {/* CABECERA DE PÁGINA */}
      <div style={{ 
        backgroundColor: 'var(--secondary-gray)', 
        color: 'white', 
        padding: '60px 2rem', 
        textAlign: 'center' 
      }}>
        <h1 style={{ fontSize: '2.5rem', color: 'var(--white)' }}>Nuestra Empresa</h1>
        <p style={{ maxWidth: '700px', margin: '1rem auto 0', opacity: 0.9 }}>
          Comprometidos con la excelencia en la cadena de suministro global desde el Callao para el mundo.
        </p>
      </div>

      <div style={sectionStyle}>
        {/* QUIÉNES SOMOS */}
        <div style={{ marginBottom: '60px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px', alignItems: 'center' }}>
          <div>
            <h2 style={{ color: 'var(--primary-cyan)', fontSize: '2rem', marginBottom: '1.5rem' }}>¿Quiénes Somos?</h2>
            <p style={{ fontSize: '1.1rem', color: '#555', marginBottom: '1rem' }}>
              <strong>ACP LOGISTICS SAC</strong> es una organización especializada en el diseño y ejecución de soluciones logísticas integrales. 
            </p>
            <p style={{ color: '#666' }}>
              Nuestra expertise se basa en la gestión eficiente de carga internacional, asegurando que cada operación cumpla con los más altos estándares de calidad y las normativas vigentes del sector.
            </p>
          </div>
          <div style={{ 
            height: '300px', 
            backgroundColor: '#ddd', 
            borderRadius: '15px',
            background: 'url("https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=800&q=80")',
            backgroundSize: 'cover'
          }}></div>
        </div>

        {/* MISIÓN Y VISIÓN (Requerimiento MTC) */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '30px' }}>
          <div style={cardStyle}>
            <h3 style={{ color: 'var(--primary-cyan)', marginBottom: '1rem' }}>Misión</h3>
            <p style={{ color: '#555' }}>
              Proveer servicios logísticos de transporte internacional y agenciamiento de aduana que superen las expectativas de nuestros clientes, optimizando tiempos y costos mediante procesos seguros e innovadores.
            </p>
          </div>

          <div style={cardStyle}>
            <h3 style={{ color: 'var(--primary-cyan)', marginBottom: '1rem' }}>Visión</h3>
            <p style={{ color: '#555' }}>
              Consolidarnos como el aliado estratégico líder en logística internacional en el Perú, reconocidos por nuestra capacidad de internacionalización y el uso de herramientas tecnológicas avanzadas.
            </p>
          </div>
        </div>

        {/* VALORES CORPORATIVOS */}
        <div style={{ marginTop: '60px', textAlign: 'center' }}>
          <h2 style={{ marginBottom: '40px', color: 'var(--secondary-gray)' }}>Nuestros Valores</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '20px' }}>
            {['Integridad', 'Compromiso', 'Eficiencia', 'Seguridad', 'Innovación'].map((valor) => (
              <div key={valor} style={{ 
                padding: '15px 30px', 
                border: '1px solid var(--primary-cyan)', 
                borderRadius: '50px',
                color: 'var(--primary-cyan)',
                fontWeight: '600'
              }}>
                {valor}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nosotros;