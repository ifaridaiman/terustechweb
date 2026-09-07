import { useEffect, useState } from 'react'

function formatLondonTime(date: Date): string {
  return new Intl.DateTimeFormat('en-GB', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
    timeZone: 'Europe/London',
  }).format(date)
}

export function useLondonTime(): string {
  const [time, setTime] = useState(() => formatLondonTime(new Date()))

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(formatLondonTime(new Date()))
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  return time
}
