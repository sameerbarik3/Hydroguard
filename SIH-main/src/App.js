import React, { useState } from 'react';
import Login from './Login';
import SensorList from './SensorList';
import AlertList from './AlertList';
import './index.css'; // Import the CSS file

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const sensors = [
    { sensorId: 'S1', waterLevel: 10, batteryLevel: 80 },
    { sensorId: 'S2', waterLevel: 45, batteryLevel: 15 },
    { sensorId: 'S3', waterLevel: 60, batteryLevel: 90 }
  ];

  const alerts = [
    { sensorId: 'S1', alertType: 'Low Water', message: 'Water level is below threshold' },
    { sensorId: 'S2', alertType: 'Low Battery', message: 'Battery level is below threshold' }
  ];

  return (
    <div className="app-container">
      <h1 className="app-title">DWLR Monitoring System</h1>
      {isLoggedIn ? (
        <div>
          <SensorList sensors={sensors} />
          <AlertList alerts={alerts} />
        </div>
      ) : (
        <Login onLogin={handleLogin} />
      )}
    </div>
  );
};

export default App;
