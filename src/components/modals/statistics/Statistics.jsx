import React from 'react';
import Close from '../../svg/Close';
import './Statistics.css';
const StatisticsComponent = ({
  open,
  onClose,
  langQuantity,
  genderQuantity,
  userQuantity,
  manQuantity,
  womanQuantity,
}) => {
  if (!open) return null;
  return (
    <>
      <div className="overlay">
        <div className="modal-style">
          <button onClick={onClose} className="modal-btn">
            <Close></Close>
          </button>
          <h1>Estatisticas gerais</h1>
          <h4>Quantidade geral de usuários: {userQuantity}</h4>
          <h4>Quantidade geral de idiomas: {langQuantity}</h4>
          <h4>Quantidade geral de gêneros: {genderQuantity}</h4>
          <h4>Quantidade de homens: {manQuantity}</h4>
          <h4>Quantidade de mulheres: {womanQuantity}</h4>
        </div>
      </div>
    </>
  );
};

export default StatisticsComponent;
