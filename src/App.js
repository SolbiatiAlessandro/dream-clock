import React, { useState, useEffect } from 'react';

export default function DreamCountdown() {
  const [timeLeft, setTimeLeft] = useState({
    totalSeconds: 0
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const target = new Date('2081-10-07T12:07:00');
      const difference = target - now;

      if (difference > 0) {
        const totalSeconds = Math.floor(difference / 1000);
        setTimeLeft({ totalSeconds });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  const containerStyle = {
    minHeight: '100vh',
    backgroundColor: 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '2rem',
    fontFamily: 'Arial, sans-serif'
  };

  const contentStyle = {
    maxWidth: '800px',
    width: '100%',
    textAlign: 'center'
  };

  const titleStyle = {
    fontSize: 'clamp(1.5rem, 5vw, 3rem)',
    fontWeight: '300',
    color: 'black',
    marginBottom: '1rem'
  };

  const numberStyle = {
    fontSize: 'clamp(3rem, 12vw, 8rem)',
    fontFamily: 'monospace',
    color: 'black',
    marginBottom: '2rem'
  };

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '1rem',
    marginBottom: '3rem'
  };

  const itemStyle = {
    fontSize: 'clamp(0.9rem, 2.5vw, 1.1rem)',
    color: 'black'
  };

  const boxStyle = {
    border: '1px solid black',
    padding: '1.5rem',
    marginBottom: '1rem',
    fontSize: 'clamp(1rem, 3vw, 1.25rem)'
  };

  return (
    <div style={containerStyle}>
      <div style={contentStyle}>
        <div style={titleStyle}>
          SECONDS LEFT IN THIS <span style={{fontSize: '1.5em'}}>D</span>REAM
        </div>
        
        <div style={numberStyle}>
          {timeLeft.totalSeconds.toLocaleString()}
        </div>
        
        
        <div style={gridStyle}>
          <div style={itemStyle}>
            <strong>{Math.floor(timeLeft.totalSeconds / 60).toLocaleString()}</strong> minutes left
          </div>
          <div style={itemStyle}>
            <strong>{Math.floor(timeLeft.totalSeconds / 3600).toLocaleString()}</strong> hours left
          </div>
          <div style={itemStyle}>
            <strong>{Math.floor(timeLeft.totalSeconds / 86400).toLocaleString()}</strong> days left
          </div>
          <div style={itemStyle}>
            <strong>{Math.floor(timeLeft.totalSeconds / 604800).toLocaleString()}</strong> weeks left
          </div>
          <div style={itemStyle}>
            <strong>{Math.floor(timeLeft.totalSeconds / 2629800).toLocaleString()}</strong> months left
          </div>
          <div style={itemStyle}>
            <strong>{Math.floor(timeLeft.totalSeconds / 31557600).toLocaleString()}</strong> years left
          </div>
        </div>

        <div style={boxStyle}>
          Where will you make the Dream go next?
        </div>
        
        <div style={boxStyle}>
          Remember to stay lucid!
        </div>
      </div>
    </div>
  );
}
