import { useState, useEffect, useCallback } from 'react';

interface CountdownTime {
  hours: string;
  minutes: string;
  seconds: string;
  totalSeconds: number;
  isExpired: boolean;
}

export function useCountdown(initialMinutes: number = 45): CountdownTime {
  const getStoredEndTime = useCallback(() => {
    const stored = localStorage.getItem('countdown_end_time');
    if (stored) {
      const endTime = parseInt(stored, 10);
      if (endTime > Date.now()) {
        return endTime;
      }
    }
    const newEndTime = Date.now() + initialMinutes * 60 * 1000;
    localStorage.setItem('countdown_end_time', newEndTime.toString());
    return newEndTime;
  }, [initialMinutes]);

  const calculateTimeLeft = useCallback((endTime: number) => {
    const diff = Math.max(0, endTime - Date.now());
    const totalSeconds = Math.floor(diff / 1000);
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    return {
      hours: hours.toString().padStart(2, '0'),
      minutes: minutes.toString().padStart(2, '0'),
      seconds: seconds.toString().padStart(2, '0'),
      totalSeconds,
      isExpired: totalSeconds === 0,
    };
  }, []);

  const [endTime] = useState(getStoredEndTime);
  const [timeLeft, setTimeLeft] = useState(() => calculateTimeLeft(endTime));

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(endTime));
    }, 1000);

    return () => clearInterval(timer);
  }, [endTime, calculateTimeLeft]);

  return timeLeft;
}
