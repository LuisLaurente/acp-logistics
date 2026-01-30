import React from 'react';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#f8f9fa', padding: '2rem 0', borderTop: `4px solid var(--primary-cyan)` }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
          
          {/* Columna 1: Datos Principales */}
          <div>
            <h3>ACP LOGISTICS SAC</h3>
            <p><strong>Oficina Principal:</strong><br />
            Av. Mz. A Lt. 6 Urb. Aero industrial Gambeta - Callao, Perú</p>
            <p><strong>Teléfono:</strong> (+51) 1 631-3737 </p>
            <p><strong>WhatsApp:</strong> (+51) 946 243 145 </p>
            <p><strong>Email:</strong> grupo@caplogistic.com.pe</p>
          </div>

          {/* Columna 2: Sedes a Nivel Nacional (Requerimiento MTC) */}
          <div>
            <h3>Nuestras Sedes</h3>
            <p style={{ fontSize: '0.9rem' }}>
              Tumbes, Paita, Callao, Pisco, Iquitos, Pucallpa, Iñapari, Desaguadero, Tacna, Cusco, Arequipa.
            </p>
          </div>

          {/* Columna 3: Horario de Atención */}
          <div>
            <h3>Horario</h3>
            <p>Lunes a Viernes: 8:20 a.m. - 6:00 p.m. </p>
            <p>Sábados: 8:20 a.m. - 12:00 p.m. </p>
          </div>
        </div>

        {/* Sello de la Agencia y Copyright */}
        <div style={{ marginTop: '2rem', textAlign: 'center', borderTop: '1px solid #ddd', paddingTop: '1rem' }}>
          <p>© 2026 ACP Logistics. Todos los derechos reservados.</p>
          <a href="#" className="agency-seal">Diseñado por Ricardo Urbina & Luis Laurente</a> 
        </div>
      </div>
    </footer>
  );
};

export default Footer;