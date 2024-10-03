import React from 'react';

const AlertList = ({ alerts }) => {
  return (
    <div className="alert-list-container">
      <h2 className="alert-list-title">Alert List</h2>
      <ul className="alert-list">
        {alerts.map(alert => (
          <li key={alert.sensorId} className="alert-item">
            Sensor ID: {alert.sensorId}, Alert Type: {alert.alertType}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AlertList
