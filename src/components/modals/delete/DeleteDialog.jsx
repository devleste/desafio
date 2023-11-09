import React, { useState } from 'react';
import './DeleteDialog.css';

function Dialog({ message, onDialog }) {
  const [loading, setLoading] = useState(false);

  const handleConfirmation = (choice) => {
    setLoading(true);
    setTimeout(() => {
      onDialog(choice);
      setLoading(false);
    }, 100);
  }

  return (
    <div className="dialog-container">
      <div className="dialog-backdrop">
        <div className="dialog-box">
          <h3 className="dialog-message" style={{ color: '#31AD94' }}>
            {message}
          </h3>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <button
              className={`dialog-button dialog-button-yes ${loading ? 'dialog-button-disabled' : ''}`}
              onClick={() => handleConfirmation(true)}
              disabled={loading}
            >
              Yes
            </button>
            <button
              className={`dialog-button dialog-button-no ${loading ? 'dialog-button-disabled' : ''}`}
              onClick={() => handleConfirmation(false)}
              disabled={loading}
            >
              No
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dialog;
