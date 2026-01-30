import React from 'react';
import QuoteForm from '../components/QuoteForm';

const Contact = () => {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: 'var(--light-bg)' }}>
      <div style={{ backgroundColor: 'var(--secondary-gray)', color: 'white', padding: '60px 2rem', textAlign: 'center' }}>
        <h1 style={{ color: 'white' }}>Contacto y Cotizaciones</h1>
        <p>Estamos listos para optimizar su cadena logística nacional e internacional.</p>
      </div>

      <div className="container" style={{ padding: '60px 2rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '50px' }}>
        
        {/* Información de Contacto Legal */}
        <div>
          <h2 style={{ color: 'var(--primary-cyan)', marginBottom: '20px' }}>Canales de Atención</h2>
          <div style={{ marginBottom: '30px' }}>
            <p><strong>📍 Oficina Principal:</strong><br /> Av. Mz. A Lt. 6 Urb. Aero industrial Gambeta - Callao, Perú</p>
            <p><strong>📞 Teléfono Fijo:</strong> (+51) 1 631-3737 </p>
            <p><strong>📱 WhatsApp:</strong> (+51) 946 243 145 </p>
            <p><strong>✉️ Correo:</strong> grupo@caplogistic.com.pe </p>
          </div>

          <div style={{ padding: '20px', backgroundColor: '#e9ecef', borderRadius: '8px' }}>
            <h4 style={{ marginBottom: '10px' }}>Horario de Atención </h4>
            <p>Lunes a Viernes: 8:20 a.m. - 6:00 p.m. </p>
            <p>Sábados: 8:20 a.m. - 12:00 p.m.</p>
          </div>

          <div style={{ marginTop: '30px' }}>
            <h4 style={{ color: 'var(--secondary-gray)' }}>Presencia Nacional</h4>
            <p style={{ fontSize: '0.9rem', color: '#666' }}>
              Tumbes, Paita, Callao, Pisco, Iquitos, Pucallpa, Iñapari, Desaguadero, Tacna, Cusco, Arequipa.
            </p>
          </div>
        </div>

        {/* El Formulario Dinámico */}
        <QuoteForm />
      </div>
    </div>
  );
};

export default Contact;