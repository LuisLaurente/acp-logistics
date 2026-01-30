import React, { useState } from 'react';

const QuoteForm = () => {
  const [formData, setFormData] = useState({
    nombre: '', cargo: '', email: '', whatsapp: '', empresa: '', ruc: '', servicio: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Datos enviados para cotización:", formData);
    alert("¡Solicitud recibida! El equipo de ACP Logistics se contactará pronto.");
  };

  const inputStyle = {
    width: '100%', padding: '12px', marginBottom: '15px',
    border: '1px solid #ddd', borderRadius: '5px', fontSize: '1rem'
  };

  return (
    <form onSubmit={handleSubmit} style={{ backgroundColor: 'white', padding: '30px', borderRadius: '10px', boxShadow: '0 4px 15px rgba(0,0,0,0.1)' }}>
      <h3 style={{ color: 'var(--secondary-gray)', marginBottom: '20px' }}>Solicita una Cotización</h3>
      
      <input type="text" name="nombre" placeholder="Nombre Completo *" required style={inputStyle} onChange={handleChange} />
      <input type="text" name="cargo" placeholder="Cargo" style={inputStyle} onChange={handleChange} />
      <input type="email" name="email" placeholder="Email *" required style={inputStyle} onChange={handleChange} />
      <input type="text" name="whatsapp" placeholder="Número de WhatsApp *" required style={inputStyle} onChange={handleChange} />
      <input type="text" name="empresa" placeholder="Empresa" style={inputStyle} onChange={handleChange} />
      <input type="text" name="ruc" placeholder="RUC" style={inputStyle} onChange={handleChange} />
      
      <select name="servicio" required style={inputStyle} onChange={handleChange}>
        <option value="">Seleccione el servicio que requiere *</option>
        <option value="aereo">Transporte Aéreo</option>
        <option value="maritimo">Transporte Marítimo</option>
        <option value="terrestre">Transporte Terrestre</option>
        <option value="aduana">Agenciamiento de Aduana</option>
        <option value="otro">Otros servicios logísticos</option>
      </select>

      <button type="submit" className="btn-primary" style={{ width: '100%', fontSize: '1.1rem' }}>
        Enviar Solicitud
      </button>
    </form>
  );
};

export default QuoteForm;