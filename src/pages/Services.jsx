import React from 'react';

const Services = () => {
  // Lista de servicios extendida basada en el requerimiento del cliente
  const coreServices = [
    { title: 'Transporte Aéreo', icon: '✈️', desc: 'Conexiones rápidas y seguras para carga de alta prioridad.' },
    { title: 'Transporte Marítimo', icon: '🚢', desc: 'Gestión de contenedores (FCL/LCL) con las principales navieras.' },
    { title: 'Transporte Terrestre', icon: '🚛', desc: 'Distribución nacional y transporte de carga pesada.' },
    { title: 'Agenciamiento de Aduana', icon: '📋', desc: 'Asesoría técnica y legal para el despacho de sus mercancías.' }
  ];

  const additionalServices = [
    "Asesoramiento de importaciones y exportaciones",
    "Flete Internacional / Servicio Courier",
    "Seguro Internacional y Resguardo",
    "Almacén Simple y Temporal",
    "Distribución y Cuadrillas",
    "OTM (Operaciones de transporte multimodal)"
  ];

  const allies = [
    "KLM", "DELTA", "AVIANCA", "FEDEX", "DHL", "MAERSK", "MSC", "COSCO", "HAPAG"
  ];

  return (
    <div style={{ minHeight: '100vh' }}>
      {/* HEADER SERVICIOS */}
      <div style={{ backgroundColor: 'var(--primary-cyan)', color: 'white', padding: '60px 2rem', textAlign: 'center' }}>
        <h1 style={{ color: 'white' }}>Nuestros Servicios Logísticos</h1>
        <p>Soluciones integrales de transporte y aduanas adaptadas a su negocio.</p>
      </div>

      {/* PILARES PRINCIPALES */}
      <section style={{ padding: '60px 2rem', maxWidth: '1200px', margin: '0 auto' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '40px', color: 'var(--secondary-gray)' }}>Pilares Operativos</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '25px' }}>
          {coreServices.map((s, i) => (
            <div key={i} style={{ padding: '30px', border: '1px solid #eee', borderRadius: '10px', textAlign: 'center' }}>
              <div style={{ fontSize: '3rem', marginBottom: '15px' }}>{s.icon}</div>
              <h3 style={{ color: 'var(--primary-cyan)' }}>{s.title}</h3>
              <p style={{ color: '#666', fontSize: '0.9rem' }}>{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CATÁLOGO ADICIONAL */}
      <section style={{ backgroundColor: 'var(--light-bg)', padding: '60px 2rem' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{ marginBottom: '30px' }}>Especialidades Logísticas</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '15px' }}>
            {additionalServices.map((item, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '10px', backgroundColor: 'white', borderRadius: '5px' }}>
                <span style={{ color: 'var(--primary-cyan)' }}>✔</span>
                <span style={{ fontWeight: '500' }}>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ALIADOS ESTRATÉGICOS (FASE 2) */}
      <section style={{ padding: '60px 2rem', textAlign: 'center' }}>
        <h2 style={{ color: 'var(--secondary-gray)', marginBottom: '40px' }}>Nuestros Aliados Estratégicos</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '30px', opacity: 0.6 }}>
          {allies.map(ally => (
            <span key={ally} style={{ fontWeight: 'bold', fontSize: '1.2rem', color: '#999' }}>{ally}</span>
          ))}
        </div>
        <p style={{ marginTop: '20px', fontSize: '0.8rem', color: '#777' }}>
          Contamos con el respaldo de más de 20 aerolíneas y navieras líderes a nivel mundial.
        </p>
      </section>
    </div>
  );
};

export default Services;