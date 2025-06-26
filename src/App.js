import React, { useState, useEffect } from 'react';

export default function DreamCountdown() {
  const [timeLeft, setTimeLeft] = useState({
    years: 0,
    months: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    totalSeconds: 0
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const target = new Date('2071-01-01T00:00:00');
      const difference = target - now;

      if (difference > 0) {
        const totalSeconds = Math.floor(difference / 1000);
        const years = Math.floor(difference / (1000 * 60 * 60 * 24 * 365.25));
        const months = Math.floor((difference % (1000 * 60 * 60 * 24 * 365.25)) / (1000 * 60 * 60 * 24 * 30.44));
        const days = Math.floor((difference % (1000 * 60 * 60 * 24 * 30.44)) / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ years, months, days, hours, minutes, seconds, totalSeconds });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatNumber = (num) => num.toString().padStart(2, '0');

  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-8">
      <div className="max-w-3xl w-full text-center">
        {/* Main seconds counter */}
        <div className="mb-8 text-center">
          <div className="text-4xl font-light text-black mb-4">
            SECONDS LEFT IN THIS <span className="text-6xl">D</span>REAM
          </div>
          <div className="text-8xl font-mono text-black mb-4">
            {timeLeft.totalSeconds.toLocaleString()}
          </div>
          <div className="text-xl text-black">
            Where will you make the dream go next?
          </div>
        </div>

        {/* Other time unit counters */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          <div className="p-6 border border-black">
            <div className="text-sm text-black mb-2">
              Minutes left in this <span className="text-lg">D</span>ream
            </div>
            <div className="text-2xl font-mono text-black">
              {Math.floor(timeLeft.totalSeconds / 60).toLocaleString()}
            </div>
          </div>

          <div className="p-6 border border-black">
            <div className="text-sm text-black mb-2">
              Hours left in this <span className="text-lg">D</span>ream
            </div>
            <div className="text-2xl font-mono text-black">
              {Math.floor(timeLeft.totalSeconds / 3600).toLocaleString()}
            </div>
          </div>

          <div className="p-6 border border-black">
            <div className="text-sm text-black mb-2">
              Days left in this <span className="text-lg">D</span>ream
            </div>
            <div className="text-2xl font-mono text-black">
              {Math.floor(timeLeft.totalSeconds / 86400).toLocaleString()}
            </div>
          </div>

          <div className="p-6 border border-black">
            <div className="text-sm text-black mb-2">
              Weeks left in this <span className="text-lg">D</span>ream
            </div>
            <div className="text-2xl font-mono text-black">
              {Math.floor(timeLeft.totalSeconds / 604800).toLocaleString()}
            </div>
          </div>

          <div className="p-6 border border-black">
            <div className="text-sm text-black mb-2">
              Months left in this <span className="text-lg">D</span>ream
            </div>
            <div className="text-2xl font-mono text-black">
              {Math.floor(timeLeft.totalSeconds / 2629800).toLocaleString()}
            </div>
          </div>

          <div className="p-6 border border-black">
            <div className="text-sm text-black mb-2">
              Years left in this <span className="text-lg">D</span>ream
            </div>
            <div className="text-2xl font-mono text-black">
              {Math.floor(timeLeft.totalSeconds / 31557600).toLocaleString()}
            </div>
          </div>
        </div>

        <div className="border border-black p-8">
          <div className="text-xl text-black">
            Where will the <span className="text-2xl">D</span>ream go next?
          </div>
        </div>
      </div>
    </div>
  );
}
