import React from 'react';

const SensorList = ({ sensors }) => {
  return (
    <div className="sensor-list-container">
      <h2 className="sensor-list-title">Sensor List</h2>
      <ul className="sensor-list">
        {sensors.map(sensor => (
          <li key={sensor.sensorId} className="sensor-item">
            Sensor ID: {sensor.sensorId}, Water Level: {sensor.waterLevel}, Battery Level: {sensor.batteryLevel}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SensorList;
