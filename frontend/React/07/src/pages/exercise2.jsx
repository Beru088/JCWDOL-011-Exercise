import { useState, useEffect } from "react"

export default function Exercise2() {
  const [time, setTime] = useState(0)
  const [isRunning, setIsRunning] = useState(false)

  useEffect(() => {
    let intervalId
    if (isRunning) {
      intervalId = setInterval(() => setTime(time + 1), 10)
    }
    return () => clearInterval(intervalId)
  }, [isRunning, time])

  //jam
  const hours = Math.floor(time / 360000)

  // Menit
  const minutes = Math.floor((time % 360000) / 6000)

  // detik
  const seconds = Math.floor((time % 6000) / 100)

  // Millidetik
  const milliseconds = time % 100

  return (
    <div className="soal2">
      <p>
        {hours}:{minutes.toString().padStart(2, "0")}:
        {seconds.toString().padStart(2, "0")}:
        {milliseconds.toString().padStart(2, "0")}
      </p>
      <div className="buttonSoal2">
        <button onClick={() => setIsRunning(!isRunning)}>
          {isRunning ? "Stop" : "Start"}
        </button>
        <button
          onClick={() => {
            setTime(0)
            setIsRunning(false)
          }}
        >
          Reset
        </button>
      </div>
    </div>
  )
}
